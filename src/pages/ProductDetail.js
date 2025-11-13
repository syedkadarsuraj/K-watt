// src/pages/ProductDetail.js
import {React, useState} from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetail.css";

import LD1 from "../assets/images/LD-250W.png";
import LD2 from "../assets/images/LD-250W_RF.png";
import LD3 from "../assets/images/LD-250W_BST.png";
import LD4 from "../assets/images/LD-RGB_BST.png";
import LD5 from "../assets/images/LD-RGB.png";
import DM1 from "../assets/images/DM-400LN.jpg";
import DM2 from "../assets/images/DM-1000W.jpg";
import DM3 from "../assets/images/DM-400B.png";
import DM4 from "../assets/images/DM-400B-RF.png";
import DM5 from "../assets/images/DM-300B.png";
import DM6 from "../assets/images/DM-DGL-B.png";
import DM7 from "../assets/images/DM-2500W.jpg";
import DM8 from "../assets/images/DM-2500.jpg";
import DM9 from "../assets/images/DM-PRO.jpg";

// ================== PRODUCT DATA ==================
const productData = {
  "ld-250w": {
    name: "LD-250W",
    image: LD1,
    description: (
      <>
        <p>
          <b>Led Controller LD-250W</b> was designed to fulfill the needs of
          illumination control and management of lighting fixtures using LED
          technology at <b>12VDC</b> and <b>24VDC</b> like Led Stripes, Led bulbs, etc. It is
          a safe and reliable product because it was designed with special
          integrated circuits and plastic parts for adverse operating
          conditions.
        </p>

        <p><br/>
          <b>Led Controller LD-250W operation features:</b>
        <br/></p>
        <ul>
          <li>
            Control from one or more parallel connected button to adjust
            lighting intensity (ON / OFF by briefly pressing the button and
            stretch the lighting - Dimming with a long press).
          </li>
          <li>
            Control through other systems and lighting regulators having
            communication protocol 1-10V.
          </li>
          <li>
            <b>Input:</b> 12 - 24V DC power supply
          </li>
          <li>
            <b>Output:</b> 12 - 24V DC / 21A to the electrical load.
          </li>
          <li>Function 12V / 250W operation 24V / 500W</li>
        </ul>

        <div className="technical-specs">
          <h3>Technical Specifications</h3>
          <p>FUNCTION: Soft - Start</p>
          <p>OPERATING VOLTAGE: 12-24V DC</p>
          <p>OUTPUT POWER: 250 Watt /12V & 500Watt /24V</p><br/>
          <p><b>CONTROL LOAD:</b></p>
          <ul>
            <li>LED lamps (dimmable)</li>
            <li>LED stripes</li>
            <li>Halogen lamps</li>
            <li>Resistive</li>
          </ul><br/>
          <p><b>ENVIRONMENT TEMPERATURE:</b> -20°C until +50°C</p>
          <p>
            <b>FUSE:</b> Electronic fuse for short-circuit protection with automatic
            reset
          </p>
          <p><b>WIRE SIZE:</b> From Ø0.5 mm to Ø3.5 mm</p>
          <p>
            <b>EUROPEAN COMMUNITY DIRECTIVES:</b> The product complies with directives
            (LVD) 2014/35/EU and (EMC) 2014/30/EU
          </p>
        </div>
      </>
    ),
  },

  // ------- Example other products (you can keep yours as is) -------
  "ld-250w-rf": {
    name: "LD-250W-RF",
    image: LD2,
    description:(
      <>
      <p>
        <b>Led Controller LD-250W-RF</b> was designed to fulfill the needs of illumination control and management of lighting fixtures using LED technology at 12VDC and 24VDC like Led Stripes, Led bulbs, etc. It is a safe and reliable product because it was designed with special integrated circuits and plastic parts for adverse operating conditions.
      </p><br/>
      <p>
        <b>Led Controller LD-250W-RF</b> operation features:
      </p>
      <ul>
        <li>Wired operation with one or more parallel buttons for adjusting the lighting intensity (ON / OFF by briefly pressing the button and stretch the lighting - Dimming with a long press).</li>
        <li>Wireless operation with a wirelessthree buttons remote control (RF-CTRL). (ON / OFF button with momentary pressure and UP / DOWN buttons to increase or decrease -Dimming of light respectively).</li>
        <li><b>Input:</b> 12 - 24V DC power supply.</li>
        <li><b>Output:</b> 12 - 24V DC / 21A to the electrical load.</li>
        <li>Function 12V / 250W   Operation 24V / 500W</li>
      </ul><br/>
      <div className="technical-specs">
          <h3>Technical Specifications</h3>
          <p>FUNCTION: Soft - Start</p>
          <p>OPERATING VOLTAGE: 12-24V DC</p>
          <p>OUTPUT POWER: 250 Watt /12V & 500Watt /24V</p><br/>
          <p><b>CONTROL LOAD:</b></p>
          <ul>
            <li>LED lamps (dimmable)</li>
            <li>LED stripes</li>
            <li>Halogen lamps</li>
            <li>Resistive</li>
          </ul><br/>
          <p><b>ENVIRONMENT TEMPERATURE:</b> -20°C until +50°C</p>
          <p>
            <b>FUSE:</b> Electronic fuse for short-circuit protection with automatic
            reset
          </p>
          <p><b>WIRE SIZE:</b> From Ø0.5 mm to Ø3.5 mm</p>
          <p>
            <b>EUROPEAN COMMUNITY DIRECTIVES:</b> The product complies with directives
            (LVD) 2014/35/EU and (EMC) 2014/30/EU
          </p>
      </div>  
      </>
    )
  },
  "ld-250w-bst": {
    name: "LD-250W-BST",
    image: LD3,
    description:(
      <>
      <p>
        <b>Led Controller LD-250W-BST</b> (Booster-Amplifier one channel) was designed to fulfill the needs of illumination control and management of lighting fixtures using LED technology at 12VDC and 24VDC like Led Stripes, Led bulbs, etc. It is a safe and reliable product because it was designed with special integrated circuits and plastic parts for adverse operating conditions.
      </p><br/>
      <p>
        <b>Led Controller LD-250W-BST</b> operation features:
      </p>
      <ul>
        <li>Signal input (PWM) for controlling and adjusting  lighting intensity from other digital systems and lighting regulator (LED CONTROLLERS) having PWM communication protocol.</li>
        <li><b>Input:</b> 12 - 24V DC power supply.</li>
        <li><b>Output:</b> 12 - 24V DC / 21A to the electrical load.</li>
        <li>Function 12V / 250W   Operation 24V / 500W</li>
      </ul><br/>
      <div className="technical-specs">
          <h3>Technical Specifications</h3>
          <p>FUNCTION: Soft - Start</p>
          <p>OPERATING VOLTAGE: 12-24V DC</p>
          <p>OUTPUT POWER: 250 Watt /12V & 500Watt /24V</p><br/>
          <p><b>CONTROL LOAD:</b></p>
          <ul>
            <li>LED lamps (dimmable)</li>
            <li>LED stripes</li>
            <li>Halogen lamps</li>
            <li>Resistive</li>
          </ul><br/>
          <p><b>ENVIRONMENT TEMPERATURE:</b> -20°C until +50°C</p>
          <p>
            <b>FUSE:</b> Electronic fuse for short-circuit protection with automatic
            reset
          </p>
          <p><b>WIRE SIZE:</b> From Ø0.5 mm to Ø3.5 mm</p>
          <p>
            <b>EUROPEAN COMMUNITY DIRECTIVES:</b> The product complies with directives
            (LVD) 2014/35/EU and (EMC) 2014/30/EU
          </p>
      </div>  
      </>
    )
  },
  "ld-rgb-bst": {
    name: "LD-RGB-BST",
    image: LD4,
    description:(
      <>
      <p>
        <b>Led Controller LD-RGB-BST</b> (Booster-Amplifier three channels) was designed to fulfill the needs of illumination control and management of lighting fixtures using LED technology at 12VDC and 24VDC like Led Stripes, Led bulbs, etc. It is a safe and reliable product because it was designed with special integrated circuits and plastic parts for adverse operating conditions.
      </p><br/>
      <p>
        <b>Led Controller LD-RGB-BST</b> operation features:
      </p>
      <ul>
        <li>Signal input (PWM) for controlling and adjusting  lighting intensity from other digital systems and lighting regulator (LED CONTROLLERS) having PWM communication protocol.</li>
        <li><b>Input:</b> 12 - 24V DC power supply.</li>
        <li><b>Output:</b> 12 - 24V DC / 3*8 A to the electrical load.</li>
        <li>Function 12V / 250W   Operation 24V / 500W</li>
      </ul><br/>
      <div className="technical-specs">
          <h3>Technical Specifications</h3>
          <p>FUNCTION: Soft - Start</p>
          <p>OPERATING VOLTAGE: 12-24V DC</p>
          <p>OUTPUT POWER: 3*8 A</p><br/>
          <p><b>CONTROL LOAD:</b></p>
          <ul>
            <li>LED lamps (dimmable)</li>
            <li>LED stripes</li>
            <li>Halogen lamps</li>
            <li>Resistive</li>
          </ul><br/>
          <p><b>ENVIRONMENT TEMPERATURE:</b> -20°C until +50°C</p>
          <p>
            <b>FUSE:</b> Electronic fuse 3*8 A for short-circuit protection with automatic
            reset
          </p>
          <p><b>WIRE SIZE:</b> From Ø0.5 mm to Ø3.5 mm</p>
          <p>
            <b>EUROPEAN COMMUNITY DIRECTIVES:</b> The product complies with directives
            (LVD) 2014/35/EU and (EMC) 2014/30/EU
          </p>
      </div>  
      </>
    )
  },
  "ld-rgb": {
    name: "LD-RGB",
    image: LD5,
    description:(
      <>
      <p>
        <b>Led Controller LD-RGB</b> was designed to fulfill the needs of illumination control and management of lighting fixtures using LED technology at 12VDC and 24VDC like Led Stripes and R-G-B projectors. It is a safe and reliable product because it was designed with special integrated circuits and plastic parts for adverse operating conditions.
      </p><br/>
      <p>
        <b>Led Controller LD-RGB</b> operation features:
      </p>
      <ul>
        <li>Control with one or more parallel buttons for adjusting the lighting intensity (ON / OFF by briefly pressing the button and stretch the lighting - Dimming with a long press).</li>
        <li>Control  through other systems and lighting regulators having communication protocol 1-10V</li>
        <li><b>Input:</b> 12 - 24V DC power supply.</li>
        <li><b>Output:</b> 12 - 24V DC / 21 A to the electrical load.</li>
        <li>Function 12V / 250W   Operation 24V / 500W</li>
      </ul><br/>
      <p><b> Button Control</b></p>
      <ul>
        <li>ON/OFF: Briefly pressing the button</li>
        <li>DIMMING: Long pressing the button</li>
        <li>Lighting Colour Selection: Briefly pressing the button twice the LD-RGB starts rolling all the possible combinations. Briefly pressing the button once again we are choosing the desirable combination of R-G-B and the Controller resets  in dimming operation.</li>
      </ul>
      <div className="technical-specs">
          <h3>Technical Specifications</h3>
          <p>FUNCTION: Soft - Start</p>
          <p>OPERATING VOLTAGE: 12-24V DC</p>
          <p>OUTPUT POWER: 3*8 A</p><br/>
          <p><b>CONTROL LOAD:</b></p>
          <ul>
            <li>LED projectors</li>
            <li>LED stripes</li>
          </ul><br/>
          <p><b>ENVIRONMENT TEMPERATURE:</b> -20°C until +50°C</p>
          <p>
            <b>FUSE:</b> Electronic fuse 3*8 A for short-circuit protection with automatic
            reset
          </p>
          <p><b>WIRE SIZE:</b> From Ø0.5 mm to Ø3.5 mm</p>
          <p>
            <b>EUROPEAN COMMUNITY DIRECTIVES:</b> The product complies with directives 73/23/EEC about low voltage, 89/336/EEC about electromagnetic compliance (EMC)
          </p>
      </div>  
      </>
    )
  },
  "dm-400l-n": {
    name: "DM-400L/N",
    image: DM1,
    description:(
      <>
      <p><b>The DM-400L/N (Dimmer)</b> is an innovative digital technology product (Phase-cut) with switchable Leading Edge - Trailing Edge operation.</p>
      <p>
        It fully meets the needs of light intensity adjustment and energy saving, especially when using alternative LED Filament, LED Dimmable, CFL, Halogen lamps and Dimmable Drivers.

It is an absolutely safe, reliable, and aesthetically elegant product made with special state-of-the-art integrated circuits and durable plastic parts for challenging operating and usage conditions.

Its operation locally from the device and remotely from one or more parallel-connected push buttons of any type and manufacturer makes it unique.
      </p><br/>
      <div className="technical-specs">
          <h3>Technical Specifications</h3>
          <p><b>LIGHTING CONTROLLER:</b> Digital (IGBT) - LED / 1 Channel</p>
          <p><b>OPERATING VOLTAGE:</b> 180 – 230V AC</p>
          <p><b>OPERATING FREQUENCY:</b> 50Hz</p>
          <p><b>OUTPUT POWER:</b> 400W (max)</p>
          <p><b>STANDBY POWER CONSUMPTION:</b> ≦ 1 Watt</p>
          <br/><p><b>OPERATION:</b> Soft-Start</p>
          <p><b>OPERATION (Phase-Cut):</b> Leading – Trailing Edge (Operation mode switching with extended 6 sec button press)</p>
          <p><b>MOUNTING:</b> In switch box with 40mm depth</p>
          <p><b>SAFETY:</b> Electronic protection against overvoltage and overheating with automatic reset to operating state.</p>
          <p><b>TEMPERATURE CONDITIONS:</b> Operating temperature -20°C to +50°C Storage temperature -20°C to +60°C</p>
          <p><b>WIRE SIZE:</b> ∅1mm to ∅2.5mm</p>
          <br/><p><b>Operation:</b></p>
          <p>The <b>Dimmer DM-400L/N</b> has the following control features:</p>
          <ul>
            <li>Rotary potentiometer for light intensity adjustment with integrated (ON/OFF) button for switching the lighting on and off</li>
            <li>Input for wired remote control from one or more parallel-connected push buttons of any type and manufacturer.</li>
          </ul><br/>
          <p><b>Operation Mode Selection (Phase-Cut Dimming):</b></p>
          <ul>
            <li>The DM-400L/N with Phase-Cut Dimming operation gives you the ability to select between Leading Edge and Trailing Edge operation according to the type of electrical load you have installed.</li>
            <li>The selection between Leading Edge - Trailing Edge operation and vice versa is achieved by pressing and holding the device's integrated ON/OFF button for 6 seconds.</li>
          </ul><br/>
          <p><b>Connection:</b></p>
          <ul>
            <li> Without Neutral.<br/>
Connection recommended for any electrical application using dimmable LED lamps.</li>
<li>With Neutral.<br/>
This connection is optional and is applied in areas where the 230VAC / 50Hz electrical network is unstable.</li>
          </ul>
      </div>

      </>
    )
  },
  "dm-1000w": {
    name: "DM-1000W",
    image: DM2,
    description:(
      <>
      <p><b> DM-1000W </b> wall mounting dimmer wasdesigned to cover the needs on lighting and ventilation control on house and partly professional fields. It is an absolutely safe, reliable and good looking product manufactured with special integrated circuits and good quality, resistant plastic parts for cases of function and use under adverse conditions, equipped with one of the best antiparasitic systems.
      </p><br/>
      <p><b>Control:</b></p>
      <p><b>DM-1000W</b> wall mounting dimmer is equipped with a rotary potentiometer (for lighting intensity increase/decrease) with embedded button (ON – OFF) for its function to activate and deactivate.</p>
      <br/><p><b>Lower level setting:</b></p>
      <p><b>DM-1000W</b> has the ability to adjust the minimum level of output power so that it can be used to control electric single phase motors, in which it is essential to prevent the dimmer from delivering less power than it is necessary to turn the motor on. This specific procedure is succeeded by adjusting a potentiometer which is found on the product’s side.</p>
      <div className="technical-specs">
          <h3>Technical Specifications</h3>
          <br/><p><b>Dimmer:</b> MULTI - ALLERETOUR </p>
          <p><b>Operating voltage:</b> 180 – 230V AC</p>
          <p><b>Power line frequency:</b> 50Hz</p>
          <p><b>Output Power:</b> 1000 Watt </p>
          <br/><p><b>CONTROL LOAD:</b></p>
          <ul>
            <li>Halogen lamps</li>
            <li>Resistive Magnetic transformers</li>
            <li>Electronic transformers</li>
            <li>Electric single-phase motors :</li>
          </ul><br/>
          <p><b>ENVIRONMENT TEMPERATURE:</b> -20°C until +50°C</p>
          <p>
            <b>FUSE:</b> 6 A / 230VAC (for short-circuit protection)
          </p>
          <p><b>WIRE SIZE:</b> From Ø0.5 mm to Ø3.5 mm</p>
          <p><b>Mounting: </b>Electrical switch box</p>
          <p>
            <b>EUROPEAN COMMUNITY DIRECTIVES:</b> The product complies with directives:
Low Voltage Directive: 2014/55/EU
EMC Directive: 2014/30/EU
          </p>
      </div>
    </>        
    )        
  },
  "dm-400b": {
    name: "DM-400B",
    image: DM3,
    description:(
      <>
      <p><b> DM-400B </b> (Lighting Controller) is an innovative product of digital technology Leading Edge & Trailing Edge, specially created to fully cover the needs for regulation of lighting intensity and for energy saving, using alternative type of lamps such as LED (dimmable LED), economy lamps (dimmable CFL ) and previous generation light bulbs (Resistive - Halogen).
      </p>
      <p>It is a totally safe, reliable, and aesthetically shaped product made of special integrated circuits of cutting-edge technology and of resistant plastic parts for difficult conditions of operation and usage.</p><br/>
      <p><b>Handling:  Dimmer-400B </b>operation features: </p>
      <p>Input for wired remote control from one or more parallel buttons for adjusting the lighting intensity (ON / OFF by briefly pressing the button and stretch the lighting - Dimming with a long press).</p>
      <br/><p><b>Function selection:</b></p>
      <p>Leading Edge to Trailing Edge and conversely is accomplished by  long pressing  the button for more than  fifteen (15) seconds.</p>
      <br/><p><b>Lowest threshold setting:</b></p>
      <p><b>DM-400B </b>enables the user to preconfigure the minimum point of brightness for Dimmable Led lamps, if required. This process is achieved by adjusting a potentiometer (trimmer) located on the product.</p>
      <div className="technical-specs">
          <h3>Technical Specifications</h3>
          <br/><p><b>Dimmer:</b> IGBT – Digital </p>
          <p><b>FUnction: </b>Soft Start</p>
          <p><b>Operating voltage:</b> 180 – 230V AC</p>
          <p><b>Power line frequency:</b> 50Hz</p>
          <p><b>Output Power:</b> 400 Watt </p>
          <br/><p><b>CONTROL LOAD:</b></p>
          <ul>
            <li>LED lamps (dimmable)</li>
            <li>CFL lamps (dimmable)</li>
            <li>Halogen lamps</li>
            <li>Resistive Magnetic transformers</li>
            <li>Electronic transformers</li>
            <li>Electric single-phase motors :</li>
          </ul><br/>
          <p><b>ENVIRONMENT TEMPERATURE:</b> -20°C until +50°C</p>
          <p>
            <b>FUSE:</b>  Electronic protection against short-circuit, overheating and overvoltage 
          </p>
          <p><b>WIRE SIZE:</b> From Ø0.5 mm to Ø3.5 mm</p>
          <p><b>Mounting: </b>Electrical switch box</p>
          <p>
            <b>EUROPEAN COMMUNITY DIRECTIVES:</b> The product complies with directives:
Low Voltage Directive: 2014/55/EU
EMC Directive: 2014/30/EU
          </p>
      </div>
    </>        
    )
  },
  "dm-400b-rf": {
    name: "DM-400B-RF",
    image: DM4,
    description:(
      <>
      <p><b> DM-400B-RF </b> (Lighting Controller) is an innovative product of digital technology Leading Edge & Trailing Edge, specially created to fully cover the needs for regulation of lighting intensity and for energy saving, using alternative type of lamps such as LED (dimmable LED), economy lamps (dimmable CFL ) and previous generation light bulbs (Resistive - Halogen).
      </p>
      <p>It is a totally safe, reliable, and aesthetically shaped product made of special integrated circuits of cutting-edge technology and of resistant plastic parts for difficult conditions of operation and usage.</p><br/>
      <p><b>Handling:  Dimmer-400B-RF </b>operation features: </p>
      <p>Input for wired remote control from one or more parallel buttons for adjusting the lighting intensity (ON / OFF by briefly pressing the button and stretch the lighting - Dimming with a long press).</p>
      <br/><p><b>Function selection:</b></p>
      <p>Leading Edge to Trailing Edge and conversely is accomplished by  long  pressing  the button for more than  fifteen (15) seconds.</p>
      <br/><p><b>Lowest threshold setting:</b></p>
      <p><b>DM-400B-RF </b>enables the user to preconfigure the minimum point of brightness for Dimmable Led lamps, if required. This process is achieved by adjusting a potentiometer (trimmer) located on the product.</p>
      <div className="technical-specs">
          <h3>Technical Specifications</h3>
          <br/><p><b>Dimmer:</b> IGBT – Digital </p>
          <p><b>Function: </b>Soft Start</p>
          <p><b>Operating voltage:</b> 180 – 230V AC</p>
          <p><b>Power line frequency:</b> 50Hz</p>
          <p><b>Output Power:</b> 400 Watt </p>
          <br/><p><b>CONTROL LOAD:</b></p>
          <ul>
            <li>LED lamps (dimmable)</li>
            <li>CFL lamps (dimmable)</li>
            <li>Halogen lamps</li>
            <li>Resistive Magnetic transformers</li>
            <li>Electronic transformers</li>
            <li>Electric single-phase motors :</li>
          </ul><br/>
          <p><b>ENVIRONMENT TEMPERATURE:</b> -20°C until +50°C</p>
          <p>
            <b>FUSE:</b>  Electronic protection against short-circuit, overheating and overvoltage 
          </p>
          <p><b>WIRE SIZE:</b> From Ø0.5 mm to Ø3.5 mm</p>
          <p><b>Mounting: </b>Electrical switch box</p>
          <p>
            <b>EUROPEAN COMMUNITY DIRECTIVES:</b> The product complies with directives:
Low Voltage Directive: 2014/55/EU
EMC Directive: 2014/30/EU
          </p>
      </div>
    </>        
    )
  },
  "dm-300-b": {
    name: "DM-300/b",
    image: DM5,
    description:(
      <>
      <p><b>DM-300/b </b>rail mounting digital dimmer (light adjuster) is an innovative product of digital technology Leading edge & Trailing edge, especially designed to fulfill the needs of professional spaces in the important field of lighting adjustment and energy savings.</p>
      <p>Its perfect linearity in lighting adjustment with alternative types of lamps such as Filament LED, Dimmable LED, Dimmable CFL and previous technology lamps (HALOGEN) makes this product unique.</p>
      <p>The product can be remotely controlled through one or several distant buttons (any type or company). The output power of the product can be expanded indefinitely by adding amplifiers DM-CHL (1000W per amplifier) thereby making any electrical application possible.</p>
      <br/><p><b>Control:</b></p>
      <p><b>DM-300/b</b> rail-mounting dimmer has 3 buttons for control and a remote control input:</p>
      <ul>
        <li>Button: (ON/OFF) It is used to activate and de-activate the electric load.</li>
        <li>Button: (+ & -) They are used to adjust the lighting intensity and therefore the consumption of the load at the desired point for the operator, from 1% to 100%.</li>
        <li>Input for wired remote control from one or more parallel buttons for adjusting the lighting intensity.</li>
      </ul><br/>
      <p><b>(Phase-Cut Dimming):</b></p>
      <p>The <b>DM-300/b</b> enables the user select the type of Phase-Cut Dimming according to the load Leading Edge and Trailing Edge.</p> 
      <p>In order to select Leading Edge or Trailing Edge long press for 6 sec the following buttons on the device:</p> 
      <ul>
        <li><b>Leading Edge:</b> (+) and (ON/OFF) The LED indicator will flash <b>GREEN.</b>.</li>
        <li><b>Trailing Edge:</b> (-) and (ON/OFF) The LED indicator will flash <b>RED.</b></li>
      </ul><br/>
      <p><b>Adjustment of minimum power limit:</b></p>
      <p>The <b>Dimmer DM-300/b</b> an adjust the lower threshold of the lightning intensity of the Dimmable LED lamps if it's required. This takes place as follows:</p>
      <ul>
        <li><b>Step 1.</b> Long press the ON/OFF for 6 sec and the LED indicator of the DM- 300/b will start blinking orange.</li>
        <li><b>Step 2.</b>Press up (+) or down (-) to adjust the lower threshold of the Dimmable LED lamps.</li>
        <li><b>Step 3.</b>Press the button ON/OFF briefly once to save the adjustment.</li>
      </ul><br/>
      <div className="technical-specs">
          <h3>Technical Specifications</h3>
          <br/><p><b>RAIL-MOUNTED DIMMER 1 MODULE:</b> Digital (IGBT) - LED / 1 Channel </p>
          <p><b>Function: </b>Soft Start</p>
          <p><b>Operating voltage:</b> 180 – 230V AC</p>
          <p><b>Power line frequency:</b> 50Hz</p>
          <p><b>Output Power:</b> The output power of the product can be expanded by adding amplifiers DM-BST/R (1000W per amplifier) </p>
          <p><b>STAND BY CONSUMPTION:</b> ≤ 1W</p><br/>
          <p><b>TEMPERATURE CONDITIONS:</b></p> 
          <p>Operation : -20°C until +50°C</p>
          <p>Storage : -20°C to +60°C</p>
          <p>
            <b>FUSE:</b>  Electronic protection against overheating and overvoltage with automatic reset in operational mode. </p>
          <p><b>WIRE SIZE:</b> From Ø0.5 mm to Ø3.5 mm</p>
          <p><b>Mounting: </b>Din-rail mounting 35x7.5mm (DIN 45277)</p>
          <p>
            <b>EUROPEAN COMMUNITY DIRECTIVES:</b> The product complies with directives:
Low Voltage Directive: 2014/55/EU
EMC Directive: 2014/30/EU
          </p>
      </div>
      </>
    )
  },
  "dm-dgl-b": {
    name: "DM-DGL/b",
    image: DM6,
    description:(
      <>
      <p><b> DM-DGL/b </b> rail mounting digital dimmer  is an innovative product of the digital technology, especially designed to fulfill the needs of professional spaces in the important field of lighting adjustment and energy savings. Its perfect linearity in lighting adjustment with alternative types of lamps such as  Dimmable LED, Dimmable CFL and previous technology lamps (RESISTIVE & HALOGEN) makes this product unique. The product can be remotely controlled through one or several distant buttons.
      </p>
      <br/><p><b>Handling:  DM-DGL/b </b>rail mounting digital dimmer has 3 buttons for control and a remote control input. </p>
      <ul>
        <li><b>Button 1:</b> It is used to activate and de-activate the electric load..</li>
        <li><b>Button 2 and 3:</b> They are used to adjust the lighting intensity and therefore the consumption of the load at the desired point for the operator, from 1% to 100%.</li>
        <li><b>Input</b> for wired remote control from one or more parallel buttons for adjusting the lighting intensity (ON / OFF by briefly pressing the button and stretch the lighting - Dimming with a long press).</li>    
      </ul><br/>
      <p><b>Adjustment of minimum power limit:</b></p>
      <p>The <b>Dimmer DM-DGL/b</b> provides the capacity to also control loads from single-phase electric motors. Therefore, it is necessary to control the lower engine speed of the electric motor in order to avoid its overheating and thus its destruction.</p>
      <ul>
        <li><b>Step 1.</b> Keep the button No 1 (ON / OFF) pressed.</li>
        <li><b>Step 2.</b>While the button No 1 is pressed, adjust the engine speed of the electric motor with buttons No 2 & No 3 (UP / DOWN) at the lowest allowed threshold.</li>
        <li><b>Step 3.</b>Release button No 1 (ON / OFF) and the adjustment is complete. To readjust the lowest threshold the same process must be repeated.</li>
      </ul><br/>
      <div className="technical-specs">
          <h3>Technical Specifications</h3>
          <br/><p><b>Dimmer:</b> Electronic – Digital </p>
          <p><b>Operating voltage:</b> 180 – 230V AC</p>
          <p><b>Operating frequency:</b> 50Hz</p>
          <p><b>Output Power:</b> 1000 Watt </p>
          <br/><p><b>CONTROL LOAD:</b></p>
          <ul>
            <li>LED </li>
            <li>Resistive & Halogen</li>
            <li>Inductive Transformers</li>
            <li>Electronic transformers</li>
            <li>Electric single-phase motors :</li>
          </ul><br/>
          <p><b>ENVIRONMENT TEMPERATURE:</b> -20°C until +50°C</p>
          <p>
            <b>FUSE:</b>  6 A / 230VAC (for short-circuit protection)  
          </p>
          <p><b>WIRE SIZE:</b> From Ø0.5 mm to Ø3.5 mm</p>
          <p><b>Mounting: </b>Din-rail mounting 35 x 7.5 mm (DIN 45277)</p>
          <p>
            <b>EUROPEAN COMMUNITY DIRECTIVES:</b> The product complies with directives:
Low Voltage Directive: 2014/55/EU
EMC Directive: 2014/30/EU
          </p>
      </div>
    </>        
    )
  },
  "dm-2500w": {
    name: "DM-2500W",
    image: DM7,
    description:(
      <>
      <p><b> Dimmer DM-2500 </b>was designed to cover the needs of professional stores on basic sections oflighting and ventilation. It is an absolutely safe to use and reliable product as it isconstructed with special integrated circuits and tough plastic so it can function under adverse conditions.
      </p>
      <br/><p><b>Control: Dimmer DM-2500 </b>is controlled by a a rotary potentiometer which controls the current and the power consumption to the desired level from 1% to 100%. The is also an embedded switch in the potentiometer (press switch) to activate and deactivate the device.</p>
      <br/><p><b>Lower level setting :</b></p>
      <p>As it is mentioned at the technical characteristics topic, DM - 2500 has the ability to adjust the minimum level of output power so that it can be used to control electric single phase motors, in which it is essential to prevent the dimmer from delivering less power than it is necessary to turn the motor on. This specific procedure is succeeded by adjusting a potentiometer which is found inside the product.</p>
      <br/><ul>
        <li><b>Step 1.</b> Set the main potentiometer at lowest setting.</li>
        <li><b>Step 2.</b>Meanwhile, remove the mask of the device (DM - 2500) and then set the potentiometer which is inside the dimmer (ADJ) to the lowest allowed desired limit.</li>
        <li><b>Step 3.</b> Repeat the same procedure in order to reset the lowest limit.</li>
      </ul><br/>
      <div className="technical-specs">
          <h3>Technical Specifications</h3>
          <br/><p><b>Dimmer:</b> Electronic – Digital </p>
          <p><b>Operating voltage:</b> 180 – 230V AC</p>
          <p><b>Operating frequency:</b> 50Hz</p>
          <p><b>Maximum Output Power:</b> 2500 Watt </p>
          <br/><p><b>CONTROL LOAD:</b></p>
          <ul>
            <li>LED </li>
            <li>Resistive & Halogen</li>
            <li>Inductive Transformers</li>
            <li>Electronic transformers</li>
            <li>Electric single-phase motors :</li>
            <br/><ol>
              <li>Universal</li>
              <li>Asynchronous with torque strongly depended from motor speed (centrifugal pumps, fans, ventilations).</li>
            </ol>
          </ul><br/>
          <p><b>ENVIRONMENT TEMPERATURE:</b> -20°C until +50°C</p>
          <p>
            <b>FUSE:</b>  15 A / 230VAC (for short-circuit protection)  
          </p>
          <p><b>WIRE SIZE:</b> From Ø0.5 mm to Ø3.5 mm</p>
          <p><b>Fixing: </b>Surface Mounting</p>
          <p>
            <b>EUROPEAN COMMUNITY DIRECTIVES:</b> The product complies with directives:
Low Voltage Directive: 2014/55/EU
EMC Directive: 2014/30/EU
          </p>
      </div>
    </>        
    )
  },
  "dm-2500": {
    name: "DM-2500",
    image: DM8,
    description:(
      <>
      <p><b> Dimmer DM-2500 </b>was designed to cover the needs of professional stores on basic sections oflighting and ventilation. It is an absolutely safe to use and reliable product as it isconstructed with special integrated circuits and tough plastic so it can function under adverse conditions.
      </p>
      <br/><p><b>Control: Dimmer DM-2500 </b>is controlled by a a rotary potentiometer which controls the current and the power consumption to the desired level from 1% to 100%. The is also an embedded switch in the potentiometer (press switch) to activate and deactivate the device.</p>
      <br/><p><b>Lower level setting :</b></p>
      <p>As it is mentioned at the technical characteristics topic, DM - 2500 has the ability to adjust the minimum level of output power so that it can be used to control electric single phase motors, in which it is essential to prevent the dimmer from delivering less power than it is necessary to turn the motor on. This specific procedure is succeeded by adjusting a potentiometer which is found inside the product.</p>
      <br/><ul>
        <li><b>Step 1.</b> Set the main potentiometer at lowest setting.</li>
        <li><b>Step 2.</b>Meanwhile, remove the mask of the device (DM - 2500) and then set the potentiometer which is inside the dimmer (ADJ) to the lowest allowed desired limit.</li>
        <li><b>Step 3.</b> Repeat the same procedure in order to reset the lowest limit.</li>
      </ul><br/>
      <div className="technical-specs">
          <h3>Technical Specifications</h3>
          <br/><p><b>Dimmer:</b> Electronic – Digital </p>
          <p><b>Operating voltage:</b> 180 – 230V AC</p>
          <p><b>Operating frequency:</b> 50Hz</p>
          <p><b>Maximum Output Power:</b> 2500 Watt </p>
          <br/><p><b>CONTROL LOAD:</b></p>
          <ul>
            <li>LED </li>
            <li>Resistive & Halogen</li>
            <li>Inductive Transformers</li>
            <li>Electronic transformers</li>
            <li>Electric single-phase motors :</li>
            <br/><ol>
              <li>Universal</li>
              <li>Asynchronous with torque strongly depended from motor speed (centrifugal pumps, fans, ventilations).</li>
            </ol>
          </ul><br/>
          <p><b>ENVIRONMENT TEMPERATURE:</b> -20°C until +50°C</p>
          <p>
            <b>FUSE:</b>  15 A / 230VAC (for short-circuit protection)  
          </p>
          <p><b>WIRE SIZE:</b> From Ø0.5 mm to Ø3.5 mm</p>
          <p><b>Fixing: </b>Surface Mounting</p>
          <p>
            <b>EUROPEAN COMMUNITY DIRECTIVES:</b> The product complies with directives:
Low Voltage Directive: 2014/55/EU
EMC Directive: 2014/30/EU
          </p>
      </div>
    </>        
    )
  },
  "dm-pro-1-10v": {
    name: "DM-PRO 1-10V",
    image: DM9,
    description:(
      <>
      <p><b> Dimmer DM-PRO 1-10V </b>was designed to cover the needs of professional stores on basic sections of lighting.The modern design combined with the advantages of technology 1-10V, which is widening in the field of professional lighting, makes it unique. It is an absolutely safe to use and reliable product as it is constructed with special integrated circuits and tough plastic so it can function under adverse conditions.
      </p>
      <br/><p><b>Handling: Dimmer DM-PRO 1-10V </b>is controlled by a rotary potentiometer which controls the current and the power consumption to the desired level from 1% to 100%. The is also an embedded switch in the potentiometer (press switch) to activate and deactivate the device.</p>
      <br/><p><b>Lower level setting :</b></p>
      <p><b>Dimmer DM-PRO 1-10V</b>gives us the ability to pre-configure the minimum lamp brightness point if required. This process is accomplished by adjusting a potentiometer (trimmer) located inside the device.</p>
      <br/><ul>
        <li><b>Step 1.</b> Set the main potentiometer at lowest setting.</li>
        <li><b>Step 2.</b>Meanwhile, remove the mask of the device (DM-PRO 1-10V) and then set the potentiometer which is inside the dimmer (ADJ) to the lowest allowed desired limit.</li>
        <li><b>Step 3.</b> Repeat the same procedure in order to reset the lowest limit.</li>
      </ul><br/>
      <div className="technical-specs">
          <h3>Technical Specifications</h3>
          <br/><p><b>Dimmer:</b> Electronic  1-10V </p>
          <p><b>Operation: </b>Soft Start</p>
          <p><b>Operating voltage:</b> 230V AC</p>
          <p><b>Operating frequency:</b> 50Hz</p>
          <p><b>Output Signal:</b> 1-10V / 50 mA </p>
          <p><b>Fuse:</b>6,3 A (for short-circuit protection)</p>
          <p><b>Setting: Rotary Potentiometer</b></p>
          <p><b>Lower Limit Setting:</b>Internal Potentiometer (trimmer) </p>
          <br/>
          <p><b>ENVIRONMENT TEMPERATURE:</b> -20°C until +50°C</p>
          <p><b>WIRE SIZE:</b> From Ø0.5 mm to Ø3.5 mm</p>
          <p><b>Mounting: </b>Surface Mounting</p>
          <p>
            <b>EUROPEAN COMMUNITY DIRECTIVES:</b> The product complies with directives:
Low Voltage Directive: 2014/55/EU
EMC Directive: 2014/30/EU
          </p>
      </div>
    </>        
    )
  },
};

// ================== COMPONENT ==================
const ProductDetail = () => {
  const { productId } = useParams();
  const product = productData[productId];
  const [isZoomed, setIsZoomed] = useState(false);

  if (!product) {
    return (
      <div className="product-detail-container">
        <h2>Product Not Found</h2>
        <Link to="/k-watt-electric/products" className="back-button">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-content">
        <img src={product.image} alt={product.name} className="main-image" onClick={() => setIsZoomed(true)}/>
        <div className="product-detail-text">
          <h2>{product.name}</h2>

          {/* ✅ FIXED: use div, not p */}
          <div>{product.description}</div>

          <Link to="/products" className="back-button">
            ← Back to Products
          </Link>
        </div>
      </div>
      {isZoomed && (
        <div className="zoom-overlay" onClick={() => setIsZoomed(false)}>
          <button
      className="close-zoom-btn"
      onClick={() => setIsZoomed(false)}
      aria-label="Close"
    >
      ✖
    </button>
          <img
            src={product.image}
            alt={product.name}
            className="zoomed-image"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
