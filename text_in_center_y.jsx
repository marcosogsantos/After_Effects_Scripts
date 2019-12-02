transform.position // Move effect
layer_width_limit = 1000 // Width limit for lines
char_space = 14 //
font_size = 90 // 
comp_height = 1200 //
n_chars = thisComp.layer("texto").text.sourceText.length // Number of chars in text
chars_p_lines = layer_width_limit/((font_size-char_space)/2) // Average of how many chars feet in your width limit
linhas = 1 + parseInt(n_chars/chars_p_lines) // Average of lines for your text
y_center = comp_height/2 - (linhas*font_size - (linhas*font_size/2))  // Average center of Y axis 
value+[0,y_center] // Apply effect to current value
