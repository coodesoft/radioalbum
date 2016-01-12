/**
 * 
 */
$(function(){

	$('body').on('evplayer', '#webplayer', function(){
		
		$('#webplayer').raSelector({
			channels: {
				css: { 
					width: '65%', height: '35px',
					top: '51%', left: '7.5%'
				},
				prev: {
					width: '6%', height: '90%',
					top: '11%', left: '-1%'
				},
				next: {
					width: '6%', height: '90%',
					top: '11%', right: '0%'
				},
				list: {
					width: '91%', height: '49%',
					top: '9px', left: '24px'
				},
				imgSelector: {
					width: '18px', height: '18px',
					top: '10px', left: '9px'
				},
				elementInfo : {
					width: '44%', height: '28px',
					top: '42px', left: '7%'
				}
			},
			albums: {
				css: { 
					width: '60%', height: '151px',
					top: '14%', left: '10%'
				},
				prev: {
					width: '20%', height: '60%',
					top: '17%', left: '0%'
				},
				next: {
					width: '20%', height: '60%',
					top: '17%', right: '0%'
				},
				list: {
					width: '248px', height: '120px',
					top: '10px', left: '89px',
				},
				marquee : { 
					width: '238px', height: '20px',
					top: '88%', left: '22%',
				},
			},
			sliderType: 'doble',
			skin: 'evplayer',
			volumeType: 'Rot',
		});
		setDefaultSkinValues();
	})
})
