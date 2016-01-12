/**
 * 
 */
$(function(){

	$('body').on('pvplayer', '#webplayer', function(){
		$('#webplayer').raSelector({
			channels: {
				css: { 
					width: '39.5%', height: '32px',
					top: '65%', left: '29.5%'
				},
				prev: {
					width: '12%', height: '76%',
					top: '11%', left: '0%'
				},
				next: {
					width: '12%', height: '76%',
					top: '11%', right: '0%'
				},
				list: {
					width: '78%', height: '40%',
					top: '9px', left: '32px'
				},
				imgSelector: {
					width: '18px', height: '100%',
					top: '6px', left: '9px'
				},
				elementInfo : {
					width: '93%', height: '28px',
					top: '-124%', left: '4%',
				}
			},
			albums: {
				css: { 
					width: '36%', height: '127px',
					top: '33%', left: '31%'
				},
				prev: {
					width: '12%', height: '30%',
					top: '34%', left: '-2%'
				},
				next: {
					width: '12%', height: '30%',
					top: '34%', right: '-2%'
				},
				list: {
					width: '200px', height: '100px',
					top: '7px', left: '27px'
				},
				marquee : { 
					width: '281px', height: '20px',
					top: '-17%', left: '-4%'
				},
			},
			sliderType : 'doble',
			skin: 'pvplayer',
			volumeType: 'Hor',
		});
		setDefaultSkinValues();
	})
})