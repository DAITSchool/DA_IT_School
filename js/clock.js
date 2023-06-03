'use strict';

function Clock(){

	// Init scope variables
	var self = this;
	
	// Init selectors
	self.clockHour   = document.getElementById('clock__hour');
	self.clockMinute = document.getElementById('clock__minute');
	self.clockSecond = document.getElementById('clock__second');
	
	self.init = function(){
	
		// Init points
		var date   = new Date(),
			second = date.getSeconds(),
			minute = date.getMinutes(),
			hour   = date.getHours();

		if ( hour > 12) {
			hour -= 12;
		}
		
		self.clockSecond.style.transform = 'rotate( ' + ( ( second / 60 ) * 360 ) + 'deg )';
		self.clockMinute.style.transform = 'rotate( ' + ( ( ( minute + ( second / 60 ) ) / 60 ) * 360 ) + 'deg )';
		self.clockHour.style.transform = 'rotate( ' + ( ( ( hour + ( minute / 60 ) ) / 12 ) * 360 ) + 'deg )';
		
		setTimeout(self.init, 1000);

	};
	
}

new Clock().init();