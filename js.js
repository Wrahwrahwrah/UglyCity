$(document).ready(function () {


    var region = $('g.region');
    var regions = $('#regions')
    var regionBtn = $('.regions-navi-btn') 
  
  
    region.on('click', function () {
      var test = $(this).attr('id');
      var regionLink = $(".regions-navi-btn." + test).attr('href');
      window.location.href = regionLink;
    })
  
  
    region.hover(function () {
      var regionId = $(this).attr('id');
      $(this).toggleClass('region-focused')
      $('.' + regionId).toggleClass('visible');
    })
  
  
    regionBtn.hover(function () {
      var buttonData = $(this).attr('data-region');
      $('.' + buttonData).toggleClass('visible');
      $('#' + buttonData).toggleClass('region-focused');
    })
  
  
  
  })
  