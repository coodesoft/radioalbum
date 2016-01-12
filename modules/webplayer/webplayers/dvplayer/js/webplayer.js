/**
 * 
 */

$(function(){
	$('body').on('dvplayer', '#webplayer', function(){
		$('#webplayer').raSelector({
			channels: {
				css: { 
					width: '44%', height: '39px',
					top: '71%', left: '12.5%'
				},
				prev: {
					width: '0%', height: '0%',
					top: '22%', left: '3.4%'
				},
				next: {
					width: '0%', height: '0%',
					top: '22%', right: '2.7%'
				},
				list: {
					width: '74%', height: '65%',
					top: '11px', left: '41px'
				},
				imgSelector: {
					width: '18px', height: '34px',
					top: '6px', left: '9px'
				},
				elementInfo : {
					width: '100%', height: '28px',
					top: '-45%', left: '0%',
				}
			},
			albums: {
				css: { 
					width: '43%', height: '110px',
					top: '39%', left: '12.5%'
				},
				prev: {
					width: '0%', height: '0%',
					top: '21%', left: '4%'
				},
				next: {
					width: '0%', height: '0%',
					top: '21%', right: '4%'
				},
				list: {
					width: '100px', height: '100px',
					top: '7px', left: '106px'
				},
				marquee : { 
					width: '294px', height: '20px',
					top: '-33%', left: '0%', color: 'whitesmoke'
				},
			},
			sliderType : 'simple',
			skin: 'dvplayer',
			volumeType: 'Rot',
		});
		setDefaultSkinValues();
	})
})
	

