# jquery.hoverGrid

A simple, lightweight jQuery plugin for creating a grid of images which when hovered reveals a caption

## Installation

Include script *after* the jQuery library

    <script src="/path/jquery.hoverGrid.js"></script>
	
If you want the default styles also include the css, if not feel free to style it as you see wish!

	<link rel="stylesheet" type="text/css" href="/path/jquery.hoverGrid.css">

## Usage

create the html markup for the grid in your file

	<div id="whatever">
		<div class="item">
			<img width="181" height="181" src="/image/source.jpg" alt="my image" title="my image" />
			<div class="caption" style="display: none;">
				<h2>Some Title</h2>
				<p>This is a caption to end all captions</p>
			</div>
		</div>                 
	</div>

apply the js, example:

	<script type="text/javascript">
		$(document).ready(function() {
		  $('#whatever').hoverGrid();
		});
	</script>
	

Full Example
	Check out our [github-page] (http://carlwoodhouse.github.com/jquery.hoverGrid)
	
## Options
**itemClass** - Define a class for the grid items

    itemClass: '.alternate-class'
	
*Default: '.item'*

## Authors

* [Carl Woodhouse](https://github.com/carlwoodhouse)
* [Mark Searle](https://github.com/marksearle)
