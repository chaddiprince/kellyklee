$(document).ready(function(){


      $('#life').change(function() {
    if ($('#life_yes').is(':checked')) {
       $('#life_review').addClass('show');
    }
    else {
       $('#life_review').removeClass('show');

    }
  });
  
  
   $('#tickets').change(function() {
    if ($('#tickets_yes').is(':checked')) {
       $('#tickets_des').addClass('show');
       $('#tickets_text').focus();
    }
    else {
       $('#tickets_des').removeClass('show');

    }
  });
  
  
        $('#cancellation').change(function() {
    if ($('#cancellation_yes').is(':checked')) {
       $('#cancellation_des').addClass('show');
       $('#cancellation_text').focus();
    }
    else {
       $('#cancellation_des').removeClass('show');

    }
  });


  
        $('#bankruptcy').change(function() {
    if ($('#bankruptcy_yes').is(':checked')) {
       $('#bankruptcy_des').addClass('show');
       $('#bankruptcy_text').focus();
    }
    else {
       $('#bankruptcy_des').removeClass('show');

    }
  });


        $('#crime').change(function() {
    if ($('#crime_yes').is(':checked')) {
       $('#crime_des').addClass('show');
       $('#crime_text').focus();
    }
    else {
       $('#crime_des').removeClass('show');

    }
  });


 
  
      $('input[type=checkbox][name=products]').change(function() {
    if ($(this).is(':checked')) {
        $(this).parent('li').addClass('enabled');
    }
    else {
        $(this).parent('.product').removeClass('enabled');

    }
  });
  
  
        $('input[type=checkbox][name=home_product]').change(function() {
    if ($(this).is(':checked')) {
       $('.home_product').addClass('enabled');
    }
    else {
        $('.home_product').removeClass('enabled');

    }
  });
  
    
        $('input[type=checkbox][name=vehicle_product]').change(function() {
    if ($(this).is(':checked')) {
       $('.vehicle_product').addClass('enabled');
    }
    else {
        $('.vehicle_product').removeClass('enabled');

    }
  });
  
    
        $('input[type=checkbox][name=valuable_product]').change(function() {
    if ($(this).is(':checked')) {
       $('.valuable_product').addClass('enabled');
    }
    else {
        $('.valuable_product').removeClass('enabled');

    }
  });
  
    
        $('input[type=checkbox][name=umbrella_product]').change(function() {
    if ($(this).is(':checked')) {
       $('.umbrella_product').addClass('enabled');
    }
    else {
        $('.umbrella_product').removeClass('enabled');

    }
  });
  
  
  $( "#note_link" ).click(function() {
       $('.noteable').toggle();
});


$( "#overview_link" ).click(function() {
	$('#overview_section').show();
	$('#people_section').hide();
	$('#homes_section').hide();
	$('#vehicles_section').hide();
	$('#valuables_section').hide();
	$('#umbrella_section').hide();
	$('#proposal_section').hide();

});


$( "#research_link" ).click(function() {
	$('#overview_section').show();
	$('#people_section').hide();
	$('#homes_section').hide();
	$('#vehicles_section').hide();
	$('#valuables_section').hide();
	$('#umbrella_section').hide();
	$('#proposal_section').hide();

});

$( "#proposal_link" ).click(function() {
	$('#overview_section').hide();
	$('#people_section').hide();
	$('#homes_section').hide();
	$('#vehicles_section').hide();
	$('#valuables_section').hide();
	$('#umbrella_section').hide();
	$('#proposal_section').show();

});

$( "#people_link" ).click(function() {
	$('#overview_section').hide();
	$('#people_section').show();
	$('#homes_section').hide();
	$('#vehicles_section').hide();
	$('#valuables_section').hide();
	$('#umbrella_section').hide();
	$('#proposal_section').hide();
});

$( "#home_link" ).click(function() {
	$('#overview_section').hide();
	$('#people_section').hide();
	$('#homes_section').show();
	$('#vehicles_section').hide();
	$('#valuables_section').hide();
	$('#umbrella_section').hide();
	$('#proposal_section').hide();
});

$( "#vehicles_link" ).click(function() {
	$('#overview_section').hide();
	$('#people_section').hide();
	$('#homes_section').hide();
	$('#vehicles_section').show();
	$('#valuables_section').hide();
	$('#umbrella_section').hide();
	$('#proposal_section').hide();
});

$( "#valuable_link" ).click(function() {
	$('#overview_section').hide();
	$('#people_section').hide();
	$('#homes_section').hide();
	$('#vehicles_section').hide();
	$('#valuables_section').show();
	$('#umbrella_section').hide();
	$('#proposal_section').hide();

});

$( "#umbrella_link" ).click(function() {
	$('#overview_section').hide();
	$('#people_section').hide();
	$('#homes_section').hide();
	$('#vehicles_section').hide();
	$('#valuables_section').hide();
	$('#umbrella_section').show();
	$('#proposal_section').hide();

});

  
  
  
  $(function () {
    $("input[type=checkbox]").change();
});
  
  
});


