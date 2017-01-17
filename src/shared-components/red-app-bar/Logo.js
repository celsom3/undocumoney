import React from 'react';

const style = {
	'fill': '#fff',
	'fillOpacity': '1',
	'imageRendering': 'optimizeSpeed',
	'enableBackground': 'new 0 0 80 40',
	brand: {
		fontFamily: '"Kaushan Script","Helvetica Neue",Helvetica,Arial,cursive',
    color: '#fe3737',
    fontSize: '2.6em',
	}
};

const Logo = (props) => (
  <div style={style.brand}>#Undocumoney</div>
);

export default Logo;
