console.log('app is alive');

function switchChannel(channelName) {
  console.log('Tuning into channel ' + channelName);
  $('#changing').html(channelName);
  $('#changing_location').html('upgrading.never.helps');
  $('#changing_href').attr('href', 'https://w3w.co/upgrading.never.helps');
  $('#changing_star').attr("src", "https://ip.lfe.mw.tum.de/sections/star-o.png");
}

function fill_the_star(){
  $('#changing_star').attr('src', 'https://ip.lfe.mw.tum.de/sections/star.png');
}

function selectTab(channelName){
  $('#channels-list li').removeClass('selected');
  $('li:contains(' +channelName+ ')').addClass('selected');
  console.log('Changing to tab ' + channelName);
}

function select_switch(channelName) {
  switchChannel(channelName);
  selectTab(channelName);
}
function hide_emoji(){
  $('#emojis').toggle();
}
