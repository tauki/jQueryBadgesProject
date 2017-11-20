$(function() {

  $.ajax({
  	url: 'https://www.codeschool.com/users/taukitahmid.json',
  	dataType: 'jsonp',
  	success: function(response) {
  		addCourses(response.courses.completed)
  	}
  });

  function addCourses(courses) {

  	var $badges = $('#badges');

  	courses.forEach(function(courses){
  		var $course = $('<div />', {
  			'class': 'course'
  		}).appendTo($badges);

  		$('<h3 />', {
	  		text: courses.title
	  	}).appendTo($course);

	  	$('<img />', {
	  		src: courses.badge
	  	}).appendTo($course);

	  	$('<a />', {
	  		'class': 'btn btn-primary',
	  		target: '_blank',
	  		href: course.url,
	  		text: 'Details'
	  	}).appendTo($course);
  	})
  }
});
