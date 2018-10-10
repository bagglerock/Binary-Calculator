<p><strong>Objective</strong> </p>

<p>In this challenge, we implement a calculator that uses binary numbers. Check out the attached tutorial for learning materials.</p>

<p><strong>Task</strong></p>

<p>Implement a simple calculator that performs the following operations on <em>binary numbers</em>: addition, subtraction, multiplication, and division. Note that division operation must be <em>integer division</em> only; for example, 1001/100 = 10, 1110/101=0, 101/1=1
<p>The calculator's initial state must look like this:</p>

<p><img src="https://s3.amazonaws.com/hr-challenge-images/0/1456642859-ad1191f53b-ScreenShot2016-02-28at12.29.21PM.png" alt="image" title=""></p>

<ul>
<li><p><em>Element IDs. Each element in the document must have an <code>id</code>, specified below:</em>   </p>

<table class="challenge-body-table">
<thead>
<tr>
  <th align="center"><code>innerHTML</code></th>
  <th align="center"><code>id</code></th>
  <th align="left">Description/Behavior</th>
</tr>
</thead>
<tbody><tr>
  <td align="center"></td>
  <td align="center"><code>res</code></td>
  <td align="left">Contains the result of button presses.</td>
</tr>
<tr>
  <td align="center"></td>
  <td align="center"><code>btns</code></td>
  <td align="left">A button container that displays all eight calculator buttons.</td>
</tr>
<tr>
  <td align="center"><code>0</code></td>
  <td align="center"><code>btn0</code></td>
  <td align="left">A button expressing binary digit 0.</td>
</tr>
<tr>
  <td align="center"><code>1</code></td>
  <td align="center"><code>btn1</code></td>
  <td align="left">A button expressing binary digit 1.</td>
</tr>
<tr>
  <td align="center"><code>C</code></td>
  <td align="center"><code>btnClr</code></td>
  <td align="left">A button to clear the contents of res.</td>
</tr>
<tr>
  <td align="center"><code>=</code></td>
  <td align="center"><code>btnEql</code></td>
  <td align="left">A button to evaluate the contents of the expression in .</td>
</tr>
<tr>
  <td align="center"><code>+</code></td>
  <td align="center"><code>btnSum</code></td>
  <td align="left">A button for the addition operation.</td>
</tr>
<tr>
  <td align="center"><code>-</code></td>
  <td align="center"><code>btnSub</code></td>
  <td align="left">A button for the subtraction operation.</td>
</tr>
<tr>
  <td align="center"><code>*</code></td>
  <td align="center"><code>btnMul</code></td>
  <td align="left">A button for the multiplication operation.</td>
</tr>
<tr>
  <td align="center"><code>/</code></td>
  <td align="center"><code>btnDiv</code></td>
  <td align="left">A button for the integer division operation.</td>
</tr>
</tbody></table>
</li>
<li><p><em>Styling.</em> The document's elements must have the following styles:    </p>

<ul><li><code>body</code> has a <code>width</code> of <code>33%</code>.</li>
<li><code>res</code> has a <code>background-color</code> of <code>lightgray</code>, a <code>border</code> that is <code>solid</code>, a <code>height</code> of <code>48px</code>, and a <code>font-size</code> of <code>20px</code>.</li>
<li><code>btn0</code> and <code>btn1</code> have a <code>background-color</code> of <code>lightgreen</code> and a <code>color</code> of <code>brown</code>.</li>
<li><code>btnClr</code> and <code>btnEql</code> have a <code>background-color</code> of <code>darkgreen</code> and a <code>color</code> of <code>white</code>.</li>
<li><code>btnSum</code>, <code>btnSub</code>, <code>btnMul</code>, and <code>btnDiv</code> have a <code>background-color</code> of <code>black</code>, a <code>color</code> of <code>red</code>.</li>
<li>All the buttons in <code>btns</code> have a <code>width</code> of <code>25%</code>, a <code>height</code> of <code>36px</code>, a <code>font-size</code> of <code>18px</code>, <code>margin</code> of <code>0px</code>, and <code>float</code> value <code>left</code>.</li></ul></li>
</ul>

<p>The <code>.js</code> and <code>.css</code> files are in different directories, so use the <em>link</em> tag to provide the CSS file path and the <em>script</em> tag to provide the JS file path:</p>

<p><strong>Constraints</strong></p>

<ul>
    <li>All expressions in the test dataset are entered in the form operand1 => operator => operand2, where operand1 is the first binary operator, operand2 is the second binary operator and operator is in the set {+,-,/,*}</li>
    <li>Both operands will always be positive integers when converted from base-2 to base-10.</li>
    <li>All expressions will be valid</li>
</ul>