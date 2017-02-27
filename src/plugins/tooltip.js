/*jshint esversion: 6 */
const TOOLTIP_DEFAULT_BACKGROUND_COLOR = '#1c1c1c';
const TOOLTIP_DEFAULT_POSITION = 'top';
const POSITION_FN = {
	top: positionTooltipToTop,
	left: positionTooltipToLeft,
	right: positionTooltipToRight,
	bottom: positionTooltipToBottom
};

const install = function (Vue, options) {
	if (this.installed) {
		return;
	}
	this.installed = true;
	
	// Add global resources
	Vue.directive('tooltip', function(el, binding){
		const $body = document.querySelector('body');
	    let $tooltip = null;
		
	    el.addEventListener('mouseenter', (e) => {
	    	$tooltip = createTooltip($body, el, binding);
	    	$tooltip.style.opacity = 1;
		});
	    
	    el.addEventListener('mouseleave', (e) => {
	    	$tooltip.style.display = 'none';
	    	$tooltip.style.opacity = 0;
		});
	});
};

function createTooltip($body, $el, binding){
	const title = binding.value.title || '';
	const position = binding.value.position || TOOLTIP_DEFAULT_POSITION;
	
	const $tooltip = document.querySelector('.m-tooltip') || document.createElement('div');
	$tooltip.className = 'm-tooltip';
	
	$tooltip.innerHTML = '<span>' + title + '</span>';
	$tooltip.style.backgroundColor = TOOLTIP_DEFAULT_BACKGROUND_COLOR;
	$tooltip.style.display = 'initial';
	$body.appendChild($tooltip);
	
	POSITION_FN[position]($el, $tooltip, binding);
	
	return $tooltip;
}

function positionTooltipToTop($el, $tooltip, binding){
	const $elPosition = $el.getBoundingClientRect();
	
	$tooltip.className = 'm-tooltip top';
	$tooltip.style.height = 'initial';
	$tooltip.style.lineHeight = 'initial';
	$tooltip.style.top = $elPosition.top - $tooltip.offsetHeight - 12 + 'px';
	$tooltip.style.left = $elPosition.left + 'px';
}

function positionTooltipToLeft($el, $tooltip, binding){
	
}

function positionTooltipToRight($el, $tooltip, binding){
	const $elPosition = $el.getBoundingClientRect();
	
	$tooltip.className = 'm-tooltip right';
	$tooltip.style.height = $elPosition.height + 'px';
	$tooltip.style.lineHeight = $elPosition.height - 14 + 'px';
	$tooltip.style.top = $elPosition.top + 'px';
	$tooltip.style.left = $elPosition.left + 12 + $el.offsetWidth + 'px';
}

function positionTooltipToBottom($el, $tooltip, binding){
	
}

const Tooltip = {
	install
};

export { Tooltip };