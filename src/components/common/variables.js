export const Font = {
  'sizeSmall': '12px',
  'size': '16px',
  'sizeH1': '16px * 2',
  'sizeH2': '16px * 1.665',
  'sizeH3': '16px * 1.42',
  'sizeH4': '16px * 1.175',
  'sizeH5': '16px * .95',
  'sizeH6': '16px * .75',
  'weight': '400',
  'weightHeading': '700',
  'height': '1.5',
  'family': '\'Roboto\', sans-serif',
  'familyHeading': '\'Roboto\', sans-serif'
}

export const Color = {
  'primary': '#008000 ',
  'secondary': '#2d3561',
  'additional': '#ffb961',
  'body': '#fff',
  'text': '#242124',
  'gray': '#888'
}

export const Button = {
  'fontSize': '$fontsize - 4',
  'fontWeight': '400',
  'fontFamily': '$fontfamily',
  'lineHeight': '$lineheight',
  'padding': '($spacer/ 2) $spacer',
  'borderWidth': '$spacer / 8',
  'borderStyle': 'solid',
  'borderRadius': '$spacer / 4',
  'textTransform': 'uppercase',
  'filledTextColor': '#fff',
  'smallFontSize': '$font_size - 6',
  'smallPadding': '($spacer/ 2 - 2) ($spacer - 2)',
  'primaryColor': '$primary_color',
  'secondaryColor': '$secondary_color',
  'body': '#fff'
};

export const Spacer = {
  'small': '8px',
  'medium': '16px',
  'big': '24px'
};

/*
$media_breakpoints: (
  "xs": 480,
  "sm": 768,
  "md": 992,
  "lg": 1200
);
*/

/*
@mixin media($media) {
  @each $code, $breakpoint in $media_breakpoints {
    @if (str-index($media, $code)) {
      @media only screen and (min-width: $breakpoint + 'px') { @content }
    }
  }
}*/

/*
@mixin button($style, $type) {
  @if $type == 'filled' {
    background-color: $style;
    color: $button_filled_text_color;

    &:hover,
    &:active {
      background-color: darken($style, 10%);
      color: darken($button_filled_text_color, 10%)
    }
  } @else if $type == 'bordered' {
    border-color: $style;
    background-color: inherit;
    color: $style;

    &:hover,
    &:active {
      border-color: darken($style, 10%);
      color: darken($style, 10%)
    }
  }
}
*/

// Input settings
/*$input_font_size: $font_size - 2;
$input_font_weight: 400;
$input_font_family: $font_family;
$input_line_height: $line_height - .1;
$input_padding: ($spacer/ 2) ($spacer * .75);
$input_border_width: $spacer / 8;
$input_border_style: solid;
$input_border_color: lighten($gray_color, 24%);
$input_border_radius: $spacer / 4;
$input_background_color: #fff;
$input_text_transform: uppercase;
$input_filled_text_color: #fff;*/

// Container
/*$container: 1168px;

// Spacers
$spacer: 16px;
$spacer_big: $spacer * $line_height;*/