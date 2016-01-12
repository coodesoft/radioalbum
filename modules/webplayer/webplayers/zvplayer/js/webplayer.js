/**
 * 
 */
$(function(){
	$('body').on('zvplayer', '#webplayer', function(){
		$('#webplayer').raSelector({
			channels: {
				css: { 
					width: '53%', height: '37px',
					top: '64%', left: '6.5%'
				},
				prev: {
					width: '0%', height: '0%',
					top: '11%', left: '3.4%'
				},
				next: {
					width: '0%', height: '0%',
					top: '11%', right: '5.7%'
				},
				list: {
					width: '75%', height: '65%',
					top: '6px', left: '42px'
				},
				imgSelector: {
					width: '18px', height: '90%',
					top: '6px', left: '9px'
				},
				elementInfo : {
					width: '72%', height: '28px',
					top: '-34px', left: '31%',
				}
			},
			albums: {
				css: { 
					width: '49%', height: '81px',
					top: '72%', left: '8%'
				},
				prev: {
					width: '0%', height: '0%',
					top: '0%', left: '10%'
				},
				next: {
					width: '0%', height: '0%',
					top: '0%', right: '10%'
				},
				list: {
					width: '140px', height: '70px',
					top: '-5px', left: '103px'
				},
				marquee : { 
					width: '273px', height: '20px',
					top: '80%', left: '10%'
				},
			},
			sliderType : 'doble',
			skin: 'zvplayer',
			volumeType: 'Hor', 

		});
		setDefaultSkinValues();
	})
})