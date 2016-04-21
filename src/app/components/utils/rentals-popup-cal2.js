var BRE = BRE || {};

jQuery.extend(true, BRE,
{
	ArrivalDeparturePopup2:
	{
		triggerEl:'',
		checkinEl:'',
		checkoutEl:'',
		checkinDate:'',
		checkoutDate:'',
		nbrMonths:2,	// don't change this.  I want this code to ultimately support date range and single date selection
		// but there wasn't enough time to really work everything out and will have to be developed later.

		unavailable:[],	// dates or date ranges that should be shown as unavailable. {date:<moment date>} or
		// {start:<moment date>, stop:<moment date>}

		unclickable:[],	// dates or date ranges that should not be clickable. {date:<moment date>} or
		// {start:<moment date>, stop:<moment date>}.

		reservations:[],// checkin and checkout date ranges to show as such. {checkin:<moment date>, checkout:<moment date>}

		months:[],
		selectedCallbacks:null,
		isOpen:false,

		init:function(triggerElement, checkinEl, checkoutEl, onSelected)
		{
			var ap = BRE.ArrivalDeparturePopup2;

			ap.selectedCallbacks = jQuery.Callbacks();
			ap.selectedCallbacks.add(onSelected);

			ap.triggerEl = triggerElement;
			ap.checkinEl = checkinEl;
			ap.checkoutEl = checkoutEl;

			jQuery(ap.triggerEl).focus(ap.popup).click(ap.popup);
		},

		popup:function(ev)
		{
			var ap = BRE.ArrivalDeparturePopup2,
					firstDate;

			if(ap.isOpen)
				return;

			ap.cleanup();
			ap.isOpen = true;

			ap.createInitialCalendar();
			ap.setupStayDates();
			if(moment.isMoment(ap.checkinDate) && ap.checkinDate.isValid())
				firstDate = ap.checkinDate.clone();
			else
				firstDate = moment().date(1).hour(12).minute(0).second(0).millisecond(0);

			ap.buildMonths(firstDate);
			for(var i = 0; i < ap.nbrMonths; i++) {
				ap.buildDates(i);
				ap.createMonth(i);
			}

			ap.hookupEvents();
			ap.positionCalendar();
		},

		positionCalendar:function()
		{
			var ap = BRE.ArrivalDeparturePopup2,
					el = jQuery(ap.triggerEl),
					cal = jQuery('.bre-popup-calendar2'),
					calHeight = cal.outerHeight(),
					elHeight = el.outerHeight(),
					elOffset = el.offset(),
					elPos = el.position(),
					viewportHeight = jQuery(window).height(),
					viewportTop = jQuery(window).scrollTop(),
					viewportBottom =  viewportTop + viewportHeight,
					top = elOffset.top + elHeight;

			if(top + calHeight > viewportBottom)
			{
				top = elOffset.top - calHeight - 2;
                if (top < 0) top = 0;
				cal.css({top:top+'px'});
			}
			else
			{
                if (top < 0) top = 0;
				cal.css({top:top+'px'});
			}


		},


		hookupEvents:function()
		{
			jQuery('.bre-popup-calendar2 .bre-popup-calendars2').click(BRE.ArrivalDeparturePopup2.dateCellClick);
			jQuery('.prev-mth-btn2').click(BRE.ArrivalDeparturePopup2.previousMonth);
			jQuery('.next-mth-btn2').click(BRE.ArrivalDeparturePopup2.nextMonth)
			jQuery('.bre-popup-background2').click(BRE.ArrivalDeparturePopup2.backgroundClicked);
			jQuery(document).on('keydown', BRE.ArrivalDeparturePopup2.keydown);
		},

		backgroundClicked:function(ev)
		{
			BRE.ArrivalDeparturePopup2.isOpen = false;
			BRE.ArrivalDeparturePopup2.cleanup();
		},

		keydown:function(ev)
		{
			if(ev.which == 27)
			{
				ev.preventDefault();
				BRE.ArrivalDeparturePopup2.isOpen = false;
				BRE.ArrivalDeparturePopup2.cleanup();
			}
		},

		previousMonth:function()
		{
			var ap = BRE.ArrivalDeparturePopup2;
			ap.setupStayDates();
			var dt = ap.months[0].date.clone();
			if(dt.isSame(moment(), 'month')) return;
			dt.subtract('months', 1);
			ap.buildMonths(dt);
			for(var i = 0; i < ap.nbrMonths; i++) {
				ap.buildDates(i);
				ap.createMonth(i);
			}
		},
		nextMonth:function(ev)
		{
			ev.preventDefault();
			var ap = BRE.ArrivalDeparturePopup2;
			ap.setupStayDates();
			var dt = ap.months[0].date.clone().add('months', 1);
			ap.buildMonths(dt);
			for(var i = 0; i < ap.nbrMonths; i++) {
				ap.buildDates(i);
				ap.createMonth(i);
			}
		},

		dateCellClick:function(ev)
		{
			var ap = BRE.ArrivalDeparturePopup2,
					target = jQuery(ev.target);

			if(!target.hasClass('rcal-cell2') && !target.hasClass('selectable'))
				return;

			var list = jQuery('.rcal-cell2.selected');
			if(list.length > 1)
				list.removeClass('selected');

			target.addClass('selected');
			list = jQuery('.rcal-cell2.selected');
			if(list.length == 2)
			{
				var start = moment(jQuery(list[0]).attr('data-date'));
				var stop = moment(jQuery(list[1]).attr('data-date'));
				var dt = start.clone().add('days', 1);
				var value = '';
				while(dt.isBefore(stop)) {
					value = dt.format('YYYY-MM-DD');
					list = jQuery('.rcal-cell2[data-date="' + value + '"]');
					if(list.length > 0)
						list.addClass('selected');
					dt.add('days', 1);
				}

				ap.isOpen = false;
				ap.cleanup();
				ap.selectedCallbacks.fire(start, stop);
			}
		},

		cleanup:function()
		{
			jQuery('.bre-popup-background2').remove();
			jQuery('.bre-popup-calendar2').remove();
			jQuery(document).off('keydown', BRE.ArrivalDeparturePopup2.keydown);

		},

		createInitialCalendar:function()
		{
			var ap = BRE.ArrivalDeparturePopup2;
			var el = jQuery(ap.triggerEl);
			var title = '';
			var offset = el.offset();
			var heightGuess = 240;
			var viewportHeight = jQuery(window).height();
			offset.top += el.outerHeight();

			if(el.is('[data-title]')) title = el.attr('data-title');
			else title = "Arrival &amp; Departure Dates";

			// add background overlay
			jQuery('body').append('<div class="bre-popup-background2"></div>');

			var html = 	'<div class="bre-popup-calendar2">' +
					'	<div class="popup-heading2">' +
					'		<a class="prev-mth-btn2"><b></b></a>' +
					'		<h4>' + title + '</h4>' +
					'		<a class="next-mth-btn2"><b></b></a>' +
					'		<br style="clear:both;" />' +
					'	</div>' +
					'	<div class="bre-popup-calendars2">' +
					ap.createPopupCalendarContainer() +
					'	</div>' +
					'</div>';
			jQuery('body').append(html);
			jQuery('.bre-popup-calendar2').css({
				top:offset.top + 'px',
				left:offset.left + 'px'
			});
		},

		createPopupCalendarContainer:function()
		{
			var ap = BRE.ArrivalDeparturePopup2;
			var id = '',
					html =
							'<table id="mth-container2" class="months-container2" rules="none" border="0" cellpadding="0" cellspacing="0">' +
									'<tbody>' +
									'<tr>';
			for(var i = 1; i <= ap.nbrMonths; i++)
			{
				id = "mth-container2-" + i;
				html += '<td valign="top" id="' + id + '"></td>';
			}
			html +=
					'</tbody>' +
							'</table>';
			return html;
		},


		setupStayDates:function()
		{
			var ap = BRE.ArrivalDeparturePopup2;
			ap.checkinDate = moment(jQuery(ap.checkinEl).val());
			ap.checkoutDate = moment(jQuery(ap.checkoutEl).val());
			if(moment.isMoment(ap.checkinDate) && ap.checkinDate.isValid()) {
				ap.checkinDate.hour(12).minute(0).second(0).millisecond(0);
			}

			if(moment.isMoment(ap.checkoutDate) && ap.checkoutDate.isValid()) {
				ap.checkoutDate.hour(12).minute(0).second(0).millisecond(0);
			}
		},

		buildMonths:function(firstDate)
		{
			var ap = BRE.ArrivalDeparturePopup2;

			if(ap.months.length > 0)
				ap.months.length = 0;

			var dt = null;
			for(var i = 0; i < ap.nbrMonths; i++)
			{
				if(i == 0)
				{
					dt = firstDate.clone().date(1).hour(12).minute(0).second(0).millisecond(0);
				}
				else
				{
					dt = ap.months[i-1].date.clone();
					dt.add('months', 1).date(1).hour(12).minute(0).second(0).millisecond(0);
				}

				ap.months.push({'date':dt, 'days':[]});

			}
		},

		buildDates:function(mthIndex)
		{
			var ap = BRE.ArrivalDeparturePopup2;

			var dow = ap.months[mthIndex].date.day();

			dateIdx = 0;
			while(dateIdx < dow) {
				ap.months[mthIndex].days.push('');
				++dateIdx;
			}

			var dt = ap.months[mthIndex].date.clone();
			var daysInMonth = ap.months[mthIndex].date.daysInMonth();
			for(var i = 1; i <= daysInMonth;i++) {
				ap.months[mthIndex].days.push(dt.clone());
				dt.add('days', 1);
			}
			while(ap.months[mthIndex].days.length < 42) {
				ap.months[mthIndex].days.push('');
			}
		},

		createMonth:function(mthIdx)
		{
			var ap = BRE.ArrivalDeparturePopup2,
					monthData = ap.months[mthIdx],
					startDt = monthData.date.clone(),
					html = '',
					firstSelectableDate = moment().add('days', 2).hour(12).minute(0).second(0).millisecond(0),
					calId = 'rcal-mth2' + (mthIdx+1),
					mthContainerId = 'mth-container2-' + (mthIdx+1);


			html =
					'<table class="rcal-mth2" id="' + calId + '" rules="none" border="0" cellpadding="0" cellspacing="0">' +
							'<thead>' +
							'<tr>' +
							'<th colspan="7" class="header">' +
							startDt.format('MMMM YYYY');

			html +=
					'<br style="clear:both;" />' +
							'</th>' +
							'</tr>' +
							'<tr>' +
							'<th class="header">S</th>' +
							'<th class="header">M</th>' +
							'<th class="header">T</th>' +
							'<th class="header">W</th>' +
							'<th class="header">T</th>' +
							'<th class="header">F</th>' +
							'<th class="header">S</th>' +
							'</tr>' +
							'</thead>' +
							'<tbody>';

			var col = 1, thedate, className, dataDate, value;
			for(var i = 0; i < monthData.days.length; i++)
			{
				if(col == 1) {
					html += '<tr>';
				}

				thedate = monthData.days[i];

				if(thedate == '') {
					dataDate = '';
					className = "rcal-no-date2";
					value = "&nbsp;";
				} else if(thedate.isBefore(firstSelectableDate)) {
					dataDate = '';
					className = "rcal-cell2 unclickable";
					value = thedate.date();
				} else {
					className = 'rcal-cell2 ';
					if(ap.isUnavailable(thedate)) {
						className += ' disabled ';

					} else if(ap.isUnclickable(thedate)) {
						// dont add anything
						className += ' unclickable';
					} else {
						className += ' selectable ';
					}
					dataDate = thedate.format('YYYY-MM-DD');
					value = thedate.date();

					if(		moment.isMoment(ap.checkinDate)
							&&	ap.checkinDate.isValid()
							&& 	moment.isMoment(ap.checkoutDate)
							&&	ap.checkoutDate.isValid()) {
						if(		thedate.isSame(ap.checkinDate, 'day')
								||	thedate.isSame(ap.checkoutDate, 'day')
								||	(thedate.isAfter(ap.checkinDate) && thedate.isBefore(ap.checkoutDate))) {
							className += " selected ";
						}
					}
				}

				html += '<td class="' + className + '" data-date="' + dataDate + '">' + value + '</td>';

				if(col == 7) {
					html += '</tr>';
					col = 0;
				}
				++col;
			}
			html +=
					'</tbody>' +
							'</table>';

			jQuery('#' + mthContainerId)
					.empty()
					.html(html);
		},

		isUnavailable:function(date)
		{
			var un = BRE.ArrivalDeparturePopup2.unavailable,
					result = false;

			for(var i = 0; i < un.length; i++)
			{
				if(typeof(un[i].date) != "undefined")
				{
					if(un[i].date.isSame(date, 'day'))
					{
						result = true;
						break;
					}
				}
				else if(typeof(un[i].start) != "undefined" && typeof(un[i].stop) != "undefined")
				{
					if(		un[i].start.isSame(date, 'day')
							||	un[i].stop.isSame(date, 'day')
							|| 	(un[i].start.isBefore(date) && un[i].stop.isAfter(date)))
					{
						result = true;
						break;
					}
				}
			}

			return result;
		},

		isUnclickable:function(date)
		{
			var uc = BRE.ArrivalDeparturePopup2.unclickable,
					result = false, dow;

			for(var i = 0; i < uc.length; i++)
			{
				if(typeof(uc[i].date) != "undefined")
				{
					if(uc[i].date.isSame(date, 'day'))
					{
						result = true;
						break;
					}
				}
				else if(typeof(uc[i].start) != "undefined" && typeof(uc[i].stop) != "undefined")
				{
					if(		uc[i].start.isSame(date, 'day')
							||	uc[i].stop.isSame(date, 'day')
							||	(uc[i].start.isBefore(date) && uc[i].stop.isAfter(date)))
					{
						if(typeof(uc[i].days) == "undefined")
						{
							result = true;
							break;
						}
						else
						{
							dow = date.day();
							for(var d = 0; d < uc[i].days.length; d++) {
								if(dow == uc[i].days[d]) {
									result = true;
									break;
								}
							}
						}
					}
				}
			}
			return result;
		},

		setUnavailableDates:function(unavailable)
		{
			var ap = BRE.ArrivalDeparturePopup2;

			for(var i = 0; i < unavailable.length; i++)
			{
				if(typeof(unavailable[i].date) != "undefined")
				{
					unavailable[i].date = moment(unavailable[i].date);
					ap.unavailable.push(unavailable[i]);
				}
				else if(typeof(unavailable[i].start) != "undefined" && typeof(unavailable[i].stop) != "undefined")
				{
					unavailable[i].start = moment(unavailable[i].start);
					unavailable[i].stop = moment(unavailable[i].stop);
					ap.unavailable.push(unavailable[i]);
				}
			}

		},

		setUnclickableDates:function(unclickable)
		{
			var ap = BRE.ArrivalDeparturePopup2;

			for(var i = 0; i < unclickable.length; i++)
			{
				if(typeof(unclickable[i].date) != "undefined")
				{
					unclickable[i].date = moment(unclickable[i].date);
					ap.unclickable.push(unclickable[i]);
				}
				else if(typeof(unclickable[i].start) != "undefined" && typeof(unclickable[i].stop) != "undefined")
				{
					unclickable[i].start = moment(unclickable[i].start);
					unclickable[i].stop = moment(unclickable[i].stop);
					ap.unclickable.push(unclickable[i]);
				}
			}
		}


	}

});