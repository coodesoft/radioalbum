/**
 * 
 */
$(function(){
	$('body').on('yvplayer', '#webplayer', function(){
		$('#webplayer').raSelector({
			channels: {
				css: { 
					width: '54.5%', height: '28px',
					top: '63%', left: '12%'
				},
				prev: {
					width: '6%', height: '70%',
					top: '5%', left: '-1%'
				},
				next: {
					width: '6%', height: '70%',
					top: '5%', right: '2.5%'
				},
				list: {
					width: '89%', height: '15px',
					top: '4px', left: '14px'
				},
				imgSelector: {
					width: '18px', height: '34px',
					top: '6px', left: '9px'
				},
				elementInfo : {
					width: '167px', height: '48px',
					top: '-147px', left: '42%',
				}
			},
			albums: {
				css: { 
					width: '55%', height: '116px',
					top: '72%', left: '12%'
				},
				prev: {
					width: '16%', height: '68%',
					top: '13%', left: '0%'
				},
				next: {
					width: '16%', height: '68%',
					top: '13%', right: '3%'
				},
				list: {
					width: '160px', height: '80px',
					top: '20px', left: '111px'
				},
				marquee : { 
					width: '228px', height: '20px',
					top: '-5%', left: '21%', color: 'white',
				},
			},
			sliderType : 'doble',
			skin: 'yvplayer',
			volumeType: 'Ver', 
		});
		setDefaultSkinValues();
	})
})
	

