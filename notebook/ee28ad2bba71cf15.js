const _1546 = (md,tex) => {
return (
md`# Seven-Box Carbon Cycle Model

A seven-box carbon cycle model is used to show the time dependence of atmospheric ${tex `\text{CO}_2`} for the
past 250 years and the current flux between individual reservoirs. The model also yields results for
future levels of atmospheric ${tex `\text{CO}_2`} based on various scenarios.

**References**<br>
Tomizuka, Akira. [Is a box model effective for understanding the carbon cycle?](https://doi.org/10.1119/1.3013196) American Journal of Physics 77.2 (2009): 156-163.`
)
};

const _4956 = function viewof$year(Inputs){return(
Inputs.range([1750, 2300], { label: "Year", step: 1, value: 2025 })
)};

const _4972 = function(createFluxCalculator,N_0,beta,surfaceOceanCirculation,thermohalineCirculation,diapycnalMixing,co2_concentration_box_model,year,gtc_fossil_reserves,svg,width)
{
  const fluxCalculator = createFluxCalculator (N_0, beta, surfaceOceanCirculation, thermohalineCirculation, diapycnalMixing)
  const N = co2_concentration_box_model.find(d => d.t === year).y
  const mc = [...N, gtc_fossil_reserves.find(d => d.year === year).total].map(Math.round)
  const [f12, f21, f24, f23, f32, f34, f43, f45, f51, f16, f67, f71, δ, γ] = fluxCalculator(year, N)
    .map((x, i) => Number(x.toFixed(i < 12 ? 1 : 2)))
  return svg`<svg xmlns="http://www.w3.org/2000/svg" style="background: transparent; background-color: transparent; color-scheme: light dark;" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="${Math.min(720, width)}" height="100%" viewBox="0 0 604 462">
  <defs/>
  <g>
    <g data-cell-id="0">
      <g data-cell-id="1">
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-52">
          <g transform="translate(0.5,0.5)">
            <path d="M 477.02 140 L 507.07 140 Q 517.07 140 517.07 150 L 517.07 315.03 Q 517.07 325.03 507.07 325.03 L 483.39 325.01" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
            <path d="M 478.14 325 L 485.14 321.51 L 483.39 325.01 L 485.13 328.51 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
          </g>
          <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-56">
            <g>
              <g>
                <switch>
                  <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 226px; margin-left: 517px;">
                      <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; background-color: #ffffff; ">
                        <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">${f24}</div>
                      </div>
                    </div>
                  </foreignObject>
                  <text x="517" y="229" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="11px" text-anchor="middle">fC24</text>
                </switch>
              </g>
            </g>
          </g>
        </g>
        <g data-cell-id="46ssHhBuElWcMjjPV5GA-2">
          <g transform="translate(0.5,0.5)">
            <rect x="357.02" y="120" width="120" height="40" rx="6" ry="6" fill="#d4e1f5" stroke="#000000" pointer-events="all" style="fill: rgb(212, 225, 245); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 140px; margin-left: 358px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; ">
                      <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><strong>${mc[1]}</strong>
                        <br />2. Surface Ocean
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="417" y="144" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">mC2_0</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-34">
          <g transform="translate(0.5,0.5)">
            <path d="M 447.02 200 L 447.02 166.37" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
            <path d="M 447.02 161.12 L 450.52 168.12 L 447.02 166.37 L 443.52 168.12 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
          </g>
          <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-57">
            <g>
              <g>
                <switch>
                  <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 181px; margin-left: 446px;">
                      <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; background-color: #ffffff; ">
                        <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">${f32}</div>
                      </div>
                    </div>
                  </foreignObject>
                  <text x="446" y="184" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="11px" text-anchor="middle">fC32</text>
                </switch>
              </g>
            </g>
          </g>
        </g>
        <g data-cell-id="46ssHhBuElWcMjjPV5GA-3">
          <g transform="translate(0.5,0.5)">
            <rect x="357.02" y="200" width="120" height="50" rx="7.5" ry="7.5" fill="#a9c4eb" stroke="#000000" pointer-events="all" style="fill: rgb(169, 196, 235); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 225px; margin-left: 358px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; ">
                      <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><strong>${mc[2]}</strong>
                        <br />3. Intermediate Ocean
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="417" y="229" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">mC3_0</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-35">
          <g transform="translate(0.5,0.5)">
            <path d="M 447.03 290 L 447.02 256.37" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
            <path d="M 447.02 251.12 L 450.52 258.12 L 447.02 256.37 L 443.52 258.12 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
          </g>
          <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-58">
            <g>
              <g>
                <switch>
                  <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 271px; margin-left: 448px;">
                      <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; background-color: #ffffff; ">
                        <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">${f43}</div>
                      </div>
                    </div>
                  </foreignObject>
                  <text x="448" y="274" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="11px" text-anchor="middle">fC43</text>
                </switch>
              </g>
            </g>
          </g>
        </g>
        <g data-cell-id="46ssHhBuElWcMjjPV5GA-4">
          <g transform="translate(0.5,0.5)">
            <rect x="357.05" y="290" width="119.97" height="70" rx="10.5" ry="10.5" fill="#7ea6e0" stroke="#000000" pointer-events="all" style="fill: rgb(126, 166, 224); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 325px; margin-left: 358px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; ">
                      <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><strong>${mc[3]}</strong>
                        <br />4. Deep Ocean
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="417" y="329" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">mC4_0</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="46ssHhBuElWcMjjPV5GA-15">
          <g transform="translate(0.5,0.5)">
            <rect x="96.97" y="118.97" width="120" height="40" rx="6" ry="6" fill="#d5e8d4" stroke="#82b366" pointer-events="all" style="fill: rgb(213, 232, 212); stroke: rgb(130, 179, 102);"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 139px; margin-left: 98px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; ">
                      <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><strong>${mc[5]}</strong>
                        <br />6. Biosphere
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="157" y="143" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">mC6_0</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="46ssHhBuElWcMjjPV5GA-16">
          <g transform="translate(0.5,0.5)">
            <rect x="97" y="219.97" width="120" height="40" rx="6" ry="6" fill="#fff2cc" stroke="#d6b656" pointer-events="all" style="fill: rgb(255, 242, 204); stroke: rgb(214, 182, 86);"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 240px; margin-left: 98px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; ">
                      <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><strong>${mc[6]}</strong>
                        <br />7. Soil
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="157" y="244" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">mC7_0</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="46ssHhBuElWcMjjPV5GA-25">
          <g transform="translate(0.5,0.5)">
            <path d="M 187 50 L 186.97 112.6" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
            <path d="M 186.97 117.85 L 183.47 110.85 L 186.97 112.6 L 190.47 110.85 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
          </g>
          <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-98">
            <g>
              <g>
                <switch>
                  <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 83px; margin-left: 188px;">
                      <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; background-color: #ffffff; ">
                        <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">${f16}</div>
                      </div>
                    </div>
                  </foreignObject>
                  <text x="188" y="86" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="11px" text-anchor="middle">fC16</text>
                </switch>
              </g>
            </g>
          </g>
        </g>
        <g data-cell-id="46ssHhBuElWcMjjPV5GA-31">
          <g transform="translate(0.5,0.5)">
            <rect x="357.02" y="410" width="120" height="40" rx="6" ry="6" fill="#e6e6e6" stroke="#000000" pointer-events="all" style="fill: rgb(230, 230, 230); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 430px; margin-left: 358px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; ">
                      <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><strong>${mc[4]}</strong>
                        <br />5. Sediments
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="417" y="434" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">mC5_0</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="46ssHhBuElWcMjjPV5GA-32">
          <g transform="translate(0.5,0.5)">
            <path d="M 417.04 360 L 417.02 403.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
            <path d="M 417.02 408.88 L 413.52 401.88 L 417.02 403.63 L 420.52 401.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
          </g>
          <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-37">
            <g>
              <g>
                <switch>
                  <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 381px; margin-left: 417px;">
                      <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; background-color: #ffffff; ">
                        <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">${f45}</div>
                      </div>
                    </div>
                  </foreignObject>
                  <text x="417" y="384" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="11px" text-anchor="middle">fC45</text>
                </switch>
              </g>
            </g>
          </g>
        </g>
        <g data-cell-id="46ssHhBuElWcMjjPV5GA-36">
          <g transform="translate(0.5,0.5)">
            <path d="M 217 240 L 267 240 Q 277 240 277 230 L 277 56.37" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
            <path d="M 277 51.12 L 280.5 58.12 L 277 56.37 L 273.5 58.12 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
          </g>
          <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-44">
            <g>
              <g>
                <switch>
                  <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 140px; margin-left: 277px;">
                      <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; background-color: #ffffff; ">
                        <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">${f71}</div>
                      </div>
                    </div>
                  </foreignObject>
                  <text x="277" y="143" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="11px" text-anchor="middle">fC71</text>
                </switch>
              </g>
            </g>
          </g>
        </g>
        <g data-cell-id="46ssHhBuElWcMjjPV5GA-42">
          <g transform="translate(0.5,0.5)">
            <path d="M 387.02 160 L 387.02 193.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
            <path d="M 387.02 198.88 L 383.52 191.88 L 387.02 193.63 L 390.52 191.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 180px; margin-left: 387px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; background-color: #ffffff; ">
                      <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">${f23}</div>
                    </div>
                  </div>
                </foreignObject>
                <text x="387" y="183" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="11px" text-anchor="middle">fC23</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="46ssHhBuElWcMjjPV5GA-48">
          <g transform="translate(0.5,0.5)">
            <path d="M 186.97 158.97 L 187 213.6" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
            <path d="M 187 218.85 L 183.5 211.85 L 187 213.6 L 190.5 211.85 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
          </g>
          <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-99">
            <g>
              <g>
                <switch>
                  <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 182px; margin-left: 187px;">
                      <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; background-color: #ffffff; ">
                        <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">${f67}</div>
                      </div>
                    </div>
                  </foreignObject>
                  <text x="187" y="185" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="11px" text-anchor="middle">fC67</text>
                </switch>
              </g>
            </g>
          </g>
        </g>
        <g data-cell-id="46ssHhBuElWcMjjPV5GA-50">
          <g transform="translate(0.5,0.5)">
            <path d="M 387.02 250 L 387.04 283.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
            <path d="M 387.04 288.88 L 383.54 281.88 L 387.04 283.63 L 390.54 281.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
          </g>
          <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-55">
            <g>
              <g>
                <switch>
                  <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 269px; margin-left: 388px;">
                      <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; background-color: #ffffff; ">
                        <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">${f34}</div>
                      </div>
                    </div>
                  </foreignObject>
                  <text x="388" y="272" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="11px" text-anchor="middle">fC34</text>
                </switch>
              </g>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-21">
          <g transform="translate(0.5,0.5)">
            <path d="M 387.05 50 L 387.06 60 Q 387.07 70 387.06 80 L 387.03 113.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
            <path d="M 387.02 118.88 L 383.53 111.88 L 387.03 113.63 L 390.53 111.89 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 80px; margin-left: 387px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; background-color: #ffffff; ">
                      <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">${f12}</div>
                    </div>
                  </div>
                </foreignObject>
                <text x="387" y="83" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="11px" text-anchor="middle">fC12</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-2">
          <g transform="translate(0.5,0.5)">
            <path d="M 477.02 430 L 547 430 Q 557 430 557 420 L 557 56.37" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
            <path d="M 557 51.12 L 560.5 58.12 L 557 56.37 L 553.5 58.12 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
          </g>
          <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-39">
            <g>
              <g>
                <switch>
                  <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 226px; margin-left: 557px;">
                      <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; background-color: #ffffff; ">
                        <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">${f51}</div>
                      </div>
                    </div>
                  </foreignObject>
                  <text x="557" y="229" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="11px" text-anchor="middle">fC51</text>
                </switch>
              </g>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-9">
          <g transform="translate(0.5,0.5)">
            <path d="M 96.94 320 L 27 320 Q 17 320 17 310 L 17 40 Q 17 30 27 30 L 90.63 30" fill="none" stroke="#666666" stroke-miterlimit="10" stroke-dasharray="3 3" pointer-events="stroke" style="stroke: rgb(102, 102, 102);"/>
            <path d="M 95.88 30 L 88.88 33.5 L 90.63 30 L 88.88 26.5 Z" fill="#666666" stroke="#666666" stroke-miterlimit="10" pointer-events="all" style="fill: rgb(102, 102, 102); stroke: rgb(102, 102, 102);"/>
          </g>
          <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-49">
            <g>
              <g>
                <switch>
                  <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 125px; margin-left: 17px;">
                      <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; background-color: #ffffff; ">
                        <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">${γ}</div>
                      </div>
                    </div>
                  </foreignObject>
                  <text x="17" y="128" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="11px" text-anchor="middle">fC91</text>
                </switch>
              </g>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-22">
          <g transform="translate(0.5,0.5)">
            <path d="M 447.02 120 L 447 90 Q 447 80 447.02 70 L 447.04 56.37" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
            <path d="M 447.05 51.12 L 450.54 58.12 L 447.04 56.37 L 443.54 58.11 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 80px; margin-left: 447px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; background-color: #ffffff; ">
                      <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">${f21}</div>
                    </div>
                  </div>
                </foreignObject>
                <text x="447" y="83" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="11px" text-anchor="middle">fC21</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-23">
          <g transform="translate(0.5,0.5)">
            <path d="M 126.97 118.97 L 127 56.37" fill="none" stroke="#666666" stroke-miterlimit="10" stroke-dasharray="3 3" pointer-events="stroke" style="stroke: rgb(102, 102, 102);"/>
            <path d="M 127 51.12 L 130.5 58.12 L 127 56.37 L 123.5 58.12 Z" fill="#666666" stroke="#666666" stroke-miterlimit="10" pointer-events="all" style="fill: rgb(102, 102, 102); stroke: rgb(102, 102, 102);"/>
          </g>
          <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-47">
            <g>
              <g>
                <switch>
                  <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 81px; margin-left: 128px;">
                      <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; background-color: #ffffff; ">
                        <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">${δ}</div>
                      </div>
                    </div>
                  </foreignObject>
                  <text x="128" y="84" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="11px" text-anchor="middle">fC81</text>
                </switch>
              </g>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-31">
          <g transform="translate(0.5,0.5)">
            <rect x="207" y="170" width="40" height="30" fill="none" stroke="none" pointer-events="all"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe flex-start; width: 38px; height: 1px; padding-top: 185px; margin-left: 209px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: left; color: #000000; ">
                      <div style="display: inline-block; font-size: 9px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">
                        <span style="color: rgb(0, 0, 0); font-family: Helvetica; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: nowrap; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;">Literfall /
                          <br />Mortality
                        </span>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="209" y="188" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="9px">Literfal...</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-33">
          <g transform="translate(0.5,0.5)">
            <rect x="357.05" y="10" width="120" height="40" fill="none" stroke="none" pointer-events="all"/>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-36">
          <g transform="translate(0.5,0.5)">
            <rect x="307" y="368" width="60" height="25" fill="none" stroke="none" pointer-events="all"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe flex-start; width: 58px; height: 1px; padding-top: 381px; margin-left: 309px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: left; color: #000000; ">
                      <div style="display: inline-block; font-size: 9px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">
                        <span style="background-color: rgb(255, 255, 255); text-wrap-mode: nowrap; color: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));">Sedimentation
                          <br />
                          <div style="text-align: right;">
                            <span style="color: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); background-color: rgb(255, 255, 255);">/ </span>
                            <span style="color: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); background-color: rgb(255, 255, 255);">Burial</span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="309" y="383" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="9px">Sedimentation...</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-38">
          <g transform="translate(0.5,0.5)">
            <rect x="533.05" y="216" width="100" height="20" fill="none" stroke="none" transform="rotate(90,583.05,226)" pointer-events="all"/>
          </g>
          <g>
            <g transform="rotate(90 583.05 226)">
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 98px; height: 1px; padding-top: 226px; margin-left: 534px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; background-color: #ffffff; ">
                      <div style="display: inline-block; font-size: 9px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: normal; word-wrap: normal; ">
                        <span style="color: rgb(0, 0, 0); font-family: Helvetica; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: nowrap; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;">Volcanism &amp; Outgasing</span>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="583" y="229" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="9px" text-anchor="middle">Volcanism &amp; Outgasing</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-32">
          <g transform="translate(0.5,0.5)">
            <rect x="96.97" y="10" width="480.03" height="40" rx="6" ry="6" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 478px; height: 1px; padding-top: 30px; margin-left: 98px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; ">
                      <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><strong>${mc[0]}</strong>
                        <br />1. Atmosphere
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="337" y="34" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">mC1_0</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-42">
          <g transform="translate(0.5,0.5)">
            <rect x="97" y="10" width="120" height="40" fill="none" stroke="none" pointer-events="all"/>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-40">
          <g transform="translate(0.5,0.5)">
            <rect x="207" y="60" width="40" height="40" fill="none" stroke="none" pointer-events="all"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe flex-start; width: 38px; height: 1px; padding-top: 80px; margin-left: 209px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: left; color: #000000; ">
                      <div style="display: inline-block; font-size: 9px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">
                        <span style="text-wrap-mode: nowrap; background-color: rgb(255, 255, 255);">Photo-
                          <br />
                          <div>
                            <span style="color: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));">synthetic</span>
                          </div>Uptake
                        </span>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="209" y="83" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="9px">Photo-...</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-53">
          <g transform="translate(0.5,0.5)">
            <rect x="257" y="10" width="40" height="40" fill="none" stroke="none" pointer-events="all"/>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-41">
          <g transform="translate(0.5,0.5)">
            <rect x="239.74" y="131" width="114.51" height="18.03" fill="none" stroke="none" transform="rotate(90,297,140.01)" pointer-events="all"/>
          </g>
          <g>
            <g transform="rotate(90 296.9949999999999 140.0150000000001)">
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 113px; height: 1px; padding-top: 140px; margin-left: 241px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; background-color: #ffffff; ">
                      <div style="display: inline-block; font-size: 9px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: normal; word-wrap: normal; ">
                        <span style="color: rgb(0, 0, 0); font-family: Helvetica; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: nowrap; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;">Heterotrophic </span>
                        <span style="color: rgb(0, 0, 0); font-family: Helvetica; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: nowrap; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;">Respiration</span>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="297" y="143" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="9px" text-anchor="middle">Heterotrophic Respiration</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-59">
          <g transform="translate(0.5,0.5)">
            <rect x="433.58" y="225.72" width="133.95" height="17.5" fill="none" stroke="none" transform="rotate(270,500.56,234.47)" pointer-events="all"/>
          </g>
          <g>
            <g transform="rotate(90 500.55500000000006 299.44499999999994)">
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe flex-end; width: 132px; height: 1px; padding-top: 299px; margin-left: 369px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: right; color: #000000; background-color: #ffffff; ">
                      <div style="display: inline-block; font-size: 9px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: normal; word-wrap: normal; ">
                        <span style="color: rgb(27, 30, 35); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;">Fast Thermohaline Circulation</span>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="501" y="302" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="9px" text-anchor="end">Fast Thermohaline Circulation</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-65">
          <g transform="translate(0.5,0.5)">
            <rect x="327.05" y="70" width="40" height="20" fill="none" stroke="none" pointer-events="all"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe flex-end; width: 38px; height: 1px; padding-top: 80px; margin-left: 327px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: right; color: #000000; ">
                      <div style="display: inline-block; font-size: 9px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">
                        <span style="text-wrap-mode: nowrap; background-color: rgb(255, 255, 255);">Uptake</span>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="365" y="83" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="9px" text-anchor="end">Uptake</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-67">
          <g transform="translate(0.5,0.5)">
            <rect x="307.05" y="254" width="60" height="30" fill="none" stroke="none" pointer-events="all"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe flex-end; width: 58px; height: 1px; padding-top: 269px; margin-left: 307px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: right; color: #000000; ">
                      <div style="display: inline-block; font-size: 9px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">
                        <span style="color: rgb(27, 30, 35);">Diapycnal Mixing</span>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="365" y="272" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="9px" text-anchor="end">Diapycnal Mix...</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-68">
          <g transform="translate(0.5,0.5)">
            <rect x="307.05" y="163.97" width="60" height="30" fill="none" stroke="none" pointer-events="all"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe flex-end; width: 58px; height: 1px; padding-top: 179px; margin-left: 307px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: right; color: #000000; ">
                      <div style="display: inline-block; font-size: 9px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">
                        <span style="color: rgb(27, 30, 35);">Surface
                          <br />Circulation
                        </span>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="365" y="182" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="9px" text-anchor="end">Surface...</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-69">
          <g transform="translate(0.5,0.5)">
            <rect x="467.05" y="70" width="40" height="20" fill="none" stroke="none" pointer-events="all"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe flex-start; width: 38px; height: 1px; padding-top: 80px; margin-left: 469px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: left; color: #000000; ">
                      <div style="display: inline-block; font-size: 9px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">
                        <span style="text-wrap-mode: nowrap; background-color: rgb(255, 255, 255);">Outgasing</span>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="469" y="83" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="9px">Outgasing</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-70">
          <g transform="translate(0.5,0.5)">
            <rect x="67" y="70" width="40" height="20" fill="none" stroke="none" pointer-events="all"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe flex-end; width: 38px; height: 1px; padding-top: 80px; margin-left: 67px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: right; color: #000000; ">
                      <div style="display: inline-block; font-size: 9px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">
                        <span style="text-wrap-mode: nowrap; background-color: rgb(255, 255, 255);">Land-Use
                          <br />Change
                        </span>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="105" y="83" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="9px" text-anchor="end">Land-Use...</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-71">
          <g transform="translate(0.5,0.5)">
            <rect x="67" y="173.97" width="40" height="20" fill="none" stroke="none" pointer-events="all"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe flex-end; width: 38px; height: 1px; padding-top: 184px; margin-left: 67px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: right; color: #000000; ">
                      <div style="display: inline-block; font-size: 9px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">
                        <span style="text-wrap-mode: nowrap; background-color: rgb(255, 255, 255);">Land-Use
                          <br />Change
                        </span>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="105" y="187" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="9px" text-anchor="end">Land-Use...</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-12">
          <g transform="translate(0.5,0.5)">
            <rect x="96.94" y="300" width="120.03" height="40" rx="6" ry="6" fill="#ffcccc" stroke="#b85450" pointer-events="all" style="fill: rgb(255, 204, 204); stroke: rgb(184, 84, 80);"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 320px; margin-left: 98px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; ">
                      <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><strong>${mc[7]}</strong>
                        <br />Fossil Reserves
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="157" y="324" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="12px" text-anchor="middle">mC9_0</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-77">
          <g transform="translate(0.5,0.5)">
            <rect x="537" y="10" width="40" height="40" fill="none" stroke="none" pointer-events="all"/>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-82">
          <g transform="translate(0.5,0.5)">
            <rect x="17" y="415" width="150" height="30" fill="none" stroke="none" pointer-events="all"/>
          </g>
          <g>
            <g>
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe flex-start; width: 148px; height: 1px; padding-top: 430px; margin-left: 19px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: left; color: #000000; ">
                      <div style="display: inline-block; font-size: 9px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; font-style: italic; white-space: normal; word-wrap: normal; ">Reservoir Masses in PgC
                        <br />Fluxes in PgC/year
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="19" y="433" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="9px" font-style="italic">Reservoir Masses in PgC...</text>
              </switch>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-86">
          <g transform="translate(0.5,0.5)">
            <path d="M 126.97 158.97 L 127 213.6" fill="none" stroke="#666666" stroke-miterlimit="10" stroke-dasharray="3 3" pointer-events="stroke" style="stroke: rgb(102, 102, 102);"/>
            <path d="M 127 218.85 L 123.5 211.85 L 127 213.6 L 130.5 211.85 Z" fill="#666666" stroke="#666666" stroke-miterlimit="10" pointer-events="all" style="fill: rgb(102, 102, 102); stroke: rgb(102, 102, 102);"/>
          </g>
          <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-87">
            <g>
              <g>
                <switch>
                  <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                    <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 184px; margin-left: 126px;">
                      <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; background-color: #ffffff; ">
                        <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">${δ}</div>
                      </div>
                    </div>
                  </foreignObject>
                  <text x="126" y="187" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="11px" text-anchor="middle">fC87</text>
                </switch>
              </g>
            </g>
          </g>
        </g>
        <g data-cell-id="Ncm2IL2-Ma1VmLpDQGww-91">
          <g transform="translate(0.5,0.5)">
            <rect x="-8" y="120" width="90" height="20" fill="none" stroke="none" transform="rotate(90,37,130)" pointer-events="all"/>
          </g>
          <g>
            <g transform="rotate(90 37 130)">
              <switch>
                <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                  <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 88px; height: 1px; padding-top: 130px; margin-left: -7px;">
                    <div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; background-color: #ffffff; ">
                      <div style="display: inline-block; font-size: 9px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: normal; word-wrap: normal; ">
                        <span style="text-align: left; text-wrap-mode: nowrap;">Fossil </span>
                        <span style="text-align: left; text-wrap-mode: nowrap;">Emissions</span>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text x="37" y="133" fill="light-dark(#000000, #ffffff)" font-family="Helvetica" font-size="9px" text-anchor="middle">Fossil Emissions</text>
              </switch>
            </g>
          </g>
        </g>
      </g>
    </g>
  </g>
</svg>`
}
;

const _2309 = (md,R_oil_0,EF_oil,tex,phi,R_gas_0,EF_gas,R_hard_coal_0,EF_hard_coal,R_brown_coal_0,EF_brown_coal) => {
return (
md`### Global Fossil Reserves
The following section defines the global proven reserves and average CO₂ emission factors for the primary fossil fuels. These baseline parameters are essential for calculating the total carbon potential and tracking resource depletion throughout the simulation.

#### Crude Oil
Global reserves currently stand at approx. ${R_oil_0} billion barrels. The average emission factor per 1 billion barrels of crude oil is approx. ${EF_oil} Gt of CO₂. ${tex.block `M^{\mathrm{oil}}_{C} = ${(R_oil_0 * EF_oil / phi ).toFixed(0)} \;\mathrm{PgC}`}

#### Natural Gas
Global reserves amount to approx. ${R_gas_0} trillion cubic meters. The average emission factor per 1 trillion cubic meters of natural gas is approx. ${EF_gas} Gt of CO₂. ${tex.block `M^{\mathrm{gas}}_{C} = ${(R_gas_0 * EF_gas / phi ).toFixed(2)} \;\mathrm{PgC}`}

#### Hard Coal
The physical reserves of hard coal amount to approx. ${R_hard_coal_0} billion tonnes (about 70% of global coal reserves). The combustion of one billion tonnes of hard coal produces an average of ${EF_hard_coal} Gt of CO₂. ${tex.block `M^{\mathrm{coal}}_{C} = ${(R_hard_coal_0 * EF_hard_coal / phi ).toFixed(2)} \;\mathrm{PgC}`}

#### Brown Coal (Lignite)
The physical reserves of brown coal amount to approx. ${R_brown_coal_0} billion tonnes (about 30% of global coal reserves). The combustion of one billion tonnes of brown coal produces an average of ${EF_brown_coal} Gt of CO₂. ${tex.block `M^{\mathrm{lignite}}_{C} = ${(R_brown_coal_0 * EF_brown_coal / phi  ).toFixed(2)} \;\mathrm{PgC}`}
`
)
};

const _5108 = function viewof$gasConsumption(Inputs){return(
Inputs.range([5, 100], {value: 100, step: 5, label: "Gas Reserve Consumption [%]" })
)};

const _5112 = function viewof$oilConsumption(Inputs){return(
Inputs.range([5, 100], {value: 80, step: 5, label: "Oil Reserve Consumption [%]"})
)};

const _2880 = function viewof$coalConsumption(Inputs){return(
Inputs.range([5, 100], {value: 40, step: 5, label: "Hard Coal Reserve Consumption [%]"})
)};

const _5489 = function viewof$ligniteConsumption(Inputs){return(
Inputs.range([5, 100], {value: 12, step: 1, label: "Brown Coal Reserve Consumption [%]", disabled: true})
)};

const _5456 = function(gtc_fossil_reserves,Plot)
{
  const a = gtc_fossil_reserves.find(d => d.year === 2026)
  const b = gtc_fossil_reserves.find(d => d.year === 2300)

  const depletionData = [
    { fuel: "Gas", total: a.gas, consumed: Math.max(0, a.gas - b.gas) },
    { fuel: "Oil", total: a.oil, consumed: Math.max(0, a.oil - b.oil) },
    { fuel: "Hard Coal", total: a.hardCoal, consumed: Math.max(0, a.hardCoal - b.hardCoal) },
    { fuel: "Brown Coal", total: a.brownCoal, consumed: Math.max(0, a.brownCoal - b.brownCoal) }
  ]

  return Plot.plot({
    axis: null,
    label: null,
    height: 360,
    marginTop: 30,
    marginBottom: 60,
    title: 'Fossil Fuel Reserve Depletion',
    subtitle: "Amount consumed from 2025 to 2300 relative to total reserves",
    fx: {
      domain: ["Brown Coal", "Gas", "Oil",  "Hard Coal"],
    },
    color: {
      domain: ["Gas", "Oil", "Brown Coal", "Hard Coal"],
      range: [ "darkorange", "darkred", "#8c564b", "black"],
    },
    marks: [
      Plot.axisFx({ lineWidth: 10, anchor: "bottom", dy: 20, fontSize: 12 }),
      Plot.waffleY(depletionData, {
        fx: "fuel",
        y: "total",
        fillOpacity: 0.3,
        rx: "4",
        unit: 2,
      }),
      Plot.waffleY(depletionData, {
        fx: "fuel",
        y: "consumed",
        fill: "fuel" ,
        rx: "4",
        unit: 2
      }),
      Plot.text(depletionData, {
        fx: "fuel",
        text: d => Math.min(1, d.consumed / d.total).toLocaleString("en-US", { style: "percent", maximumFractionDigits: 1 }),
        frameAnchor: "bottom",
        lineAnchor: "top",
        dy: 10,
        fill: "fuel",
        fontSize: 14,
        fontWeight: "bold"
      }),
      Plot.text(depletionData, {
        fx: "fuel",
        y: "total",
        text: d => `${Math.round(d.total).toLocaleString("en-US")} PgC`,
        dy: -16,
        fill: "#333",
        fontSize: 11,
      })
    ]
  })
}
;

const _440 = function(co2_annual_emissions,hubert_emission_predictions,emission_scenarios,scenario,Plot,d3)
{
  const historicalEmissionTypes = [
    'emissionsFromCoal', 
    'emissionsFromOil', 
    'emissionsFromGas', 
    'emissionsFromOtherIndustry', 
    'landUseChangeEmissions', 
    'totalEmissions'
  ]
  const getHistoricalEmissionType = type => co2_annual_emissions.map(({ year, [type]: value }) => ({ year, type, value }))
  const historicalEmissions = historicalEmissionTypes.flatMap(getHistoricalEmissionType)
  
  const projectedEmissionTypes = [
    'coal', 
    'oil', 
    'gas', 
    'otherIndustry', 
    'landUseChange', 
    'total',
  ]
  const getProjectedEmissionType = (type, i) => hubert_emission_predictions.map(({ year, [type]: value }) => ({ year, type: historicalEmissionTypes[i], value }))
  const projectedEmissions = [
    ...projectedEmissionTypes.flatMap(getProjectedEmissionType),
    ...emission_scenarios.map(({ year, [scenario]: value }) => ({ year, type: scenario, value }))
  ]
  
  const colors = ['black', "darkred", "darkorange", "#76b7b2", "#59a14f", 'steelblue']
  const labels = {
    landUseChangeEmissions: "Land Use Change",
    emissionsFromCoal: "Coal",
    emissionsFromOil: "Oil",
    emissionsFromGas: "Gas",
    emissionsFromOtherIndustry: "Other Industry",
    totalEmissions: 'Total Anthropogenic Emissions',
  }

  return Plot.plot({
    width: 1154,
    height: 600,
    title: "Global Anthropogenic CO₂ Emissions",
    subtitle: "Historical data extended by SSP2 scenario projections to drive the seven-box carbon cycle model.",
    caption: "Projections are based on the selected SSP2 scenario (Middle of the Road) for moderate socioeconomic development. ",
    color: {
      domain: [...historicalEmissionTypes, scenario],
      range: [...colors, '#bc80bd'],
      tickFormat: d => labels[d] || d,
      legend: true
    },
    x: {
      domain: [1750, 2300],
      label: 'Year',
      tickFormat: d3.format('#0'),
      grid: true,
    },
    y: {
      domain: [0, 46],
      label: 'Anthropogenic CO₂ Emissions [Gt/year]',
      grid: true,
    },
    marks: [
      Plot.ruleY([0], { stroke: 'grey' }),
      Plot.line(projectedEmissions, { x: 'year', y: 'value', title: 'type', stroke: 'type', strokeWidth: 2, strokeDasharray: [3, 6] }),
      Plot.line(historicalEmissions, { x: 'year', y: 'value', title: 'type', stroke: 'type' }),
    ]
  })
}
;

const _5157 = function viewof$scenario(Inputs,emission_scenarios){return(
Inputs.select(emission_scenarios.keys, {label: "Reference Emmision Scenario", value: 'SSP2-4.5' })
)};

const _1345 = function(Plot,d3,co2_concentration_box_model,epsilon,co2_annual_mean_concentration){return(
Plot.plot({
  width: 1154,
  height: 572,
  title: "Atmospheric CO₂ Concentration",
  subtitle: "Box model simulation driven by combined historical and SSP2 scenario emissions.",
  caption: "Future model calculations are driven by the selected emission scenario. Note that Antarctic ice core records represent smoothed multi-year averages, resulting in a lower temporal resolution compared to modern direct observations.",
  color: {
    domain: ["Calculation based on the Sven-Box Carbon Cycle Model", "CO₂ measurement at Mauna Loa Observatory", "CO₂ measurement from Antarctic Ice Cores"],
    range: ["steelblue", "red", "darkorange"],
    legend: true
  },
  x: {
    domain: [1750, 2300],
    label: 'Year',
    tickFormat: d3.format('#0'),
    grid: true,
  },
  y: {
    domain: [280, 560],
    label: 'CO₂ concentration [ppm]',
    grid: true,
  },
  marks: [
    Plot.ruleY([427.5], { stroke: 'red', strokeDasharray: [2, 4]  }),
    Plot.ruleX([2025], { stroke: 'red', strokeDasharray: [2, 4] }),
    Plot.line(co2_concentration_box_model.map(({ t, y }) => [t, y[0] / epsilon ]), {
      stroke: 'steelblue', strokeWidth: 3, strokeOpacity: 1, title: d => `Year: ${d[0]}\nConcentration: ${Math.round(d[1])}` 
    }),
    Plot.dotY(co2_annual_mean_concentration.filter(({ year }) => year >= 1959) , {
      x: 'year', y: 'mean', stroke: 'red', r: 3, strokeOpacity: 0.3, fill: 'red', fillOpacity: 0.2,
    }),
    Plot.dotY(co2_annual_mean_concentration.filter(({ year }) => year < 1959), {
      x: 'year', y: 'mean', stroke: 'darkorange', r: 3, strokeOpacity: 0.3, fill: 'darkorange', fillOpacity: 0.2,
    }),
  ]
})
)};

const _4360 = function viewof$noAnthropogenicEmissions(Inputs){return(
Inputs.toggle({ label: "No anthropogenic emissions", value: false })
)};

const _5235 = function(co2_annual_emission_gcb,co2_flux_box_model,Plot,d3)
{
  const colors = ["red", "grey", "steelblue", "green"];
  const reservoirTypes = ["atmosphericGrowth", "totalSink", "oceanSink", "landSink"];
  
  const labels = {
    atmosphericGrowth: "Atmospheric Growth", 
    totalSink: "Land & Ocean Sink",
    oceanSink: "Ocean Sink",
    landSink: "Land Sink",
  };

  // Berechnung von Spalte (col: 0 oder 1) und Zeile (row: 0 oder 1) für jeden Datenpunkt
  const gcbFlux = reservoirTypes.flatMap((type, i) => 
    co2_annual_emission_gcb.map(({ year, [type]: value }) => ({ 
      year, 
      type, 
      value,
      col: i % 2,
      row: Math.floor(i / 2)
    }))
  );
  
  const modelFlux = reservoirTypes.flatMap((type, i) => 
    co2_flux_box_model.map(({ year, [type]: value }) => ({ 
      year, 
      type, 
      value,
      col: i % 2,
      row: Math.floor(i / 2)
    }))
  );

  // Separate Datenstruktur für die englischen Titel der vier Unterdiagramme
  const facetTitles = reservoirTypes.map((type, i) => ({
    col: i % 2,
    row: Math.floor(i / 2),
    label: labels[type]
  }));
  
  return Plot.plot({
    width: 1154,
    height: 800, // Höhe wieder auf den ursprünglichen Wert gesetzt, da 2x2 kompakter ist
    color: {
      range: colors,
      domain: reservoirTypes,
      tickFormat: d => labels[d] || d,
      legend: true,
    },
    // Versteckt die generierten "0" und "1" an den äußeren Rändern des Grids
    fx: { axis: null },
    fy: { axis: null },
    x: {
      domain: [1750, 2300],
      label: "Year",
      tickFormat: d3.format("#0"),
      grid: true,
    },
    y: {
      domain: [-8, 26],
      label: "Carbon Flux [GtCO₂/year]",
      grid: true,
    },
    marks: [
      Plot.ruleY([0], { stroke: "grey" }),
      Plot.ruleX([2025], { stroke: "red", strokeDasharray: [2, 4] }),
      
      // Die Marks nutzen nun das 2D-Raster über fx und fy
      Plot.dot(gcbFlux, {
          x: "year", y: "value", fx: "col", fy: "row", stroke: "type", strokeOpacity: 0.15, fill: "type", fillOpacity: 0.1,
      }),
      Plot.line(modelFlux, {
         x: "year", y: "value", fx: "col", fy: "row", stroke: "type", strokeWidth: 3, strokeOpacity: 1
      }),

      // Setzt die englischen Labels oben mittig in jeden der 4 Graphen
      Plot.text(facetTitles, {
        fx: "col", 
        fy: "row",
        frameAnchor: "top",
        dy: -16, // Schiebt den Text leicht nach unten in den Graphen hinein
        text: "label",
        fontSize: 12,
        fontWeight: "bold",
        fill: "currentColor"
      })
    ]
  })
}
;

const _3958 = function(Plot,d3,temperature_anomaly_regression_model){return(
Plot.plot({
  width: 1154,
  height: 572,
  title: "Transient Climate Response (TCR)",
  subtitle: "This diagram shows the change in the surface temperature in response to radiative forcing forced by a change in the atmospheric carbon dioxide (CO2) concentration.",
  x: {
    domain: [-0.1, 3.4],
    label: 'Radiative Forcing [W/m²]',
    tickFormat: d3.format('#0'),
    grid: true,
  },
  y: {
    domain: [-0.3, 2.8],
    label: 'Temperature Anomaly [°C]',
    grid: true,
  },
  marks: [
    Plot.ruleX([0], { stroke: 'grey'}),
    Plot.ruleY([0], { stroke: 'grey'}),
          Plot.lineY(temperature_anomaly_regression_model.dataset, Plot.windowY({k: 10, reduce: "min"}, {x: "0", y: "1", stroke: "steelblue"})),
    Plot.lineY(temperature_anomaly_regression_model.dataset, Plot.windowY({k: 10, reduce: "max"}, {x: "0", y: "1", stroke: "red"})),
    Plot.dot(temperature_anomaly_regression_model.dataset, { fill: 'red', stroke: 'red', fillOpacity: 0.2, strokeOpacity: 0.7 }),
    Plot.line(temperature_anomaly_regression_model, { stroke: 'black', strokeWidth: 2 }),
  ]
})
)};

const _4126 = function(temperature_anomaly_regression_model,radiative_forcing,Plot,d3,temperature_anomaly)
{ 
  const ΔT = ΔF => temperature_anomaly_regression_model.predict(ΔF)
  const temperatureAnomalyModelData = radiative_forcing.map(([year, ΔF]) => [year, ΔT(ΔF)])

  return Plot.plot({
    width: 1154,
    height: 572,
    title: "Temperature Annomaly ",
    subtitle: "Temperature annomaly prediction of the seven-box carbon cycle model compared to historical data (1850-2025)",
    x: {
      domain: [1750, 2300],
      label: 'Year',
      tickFormat: d3.format('#0'),
      grid: true,
    },
    y: {
      domain: [-0.3, 2.6],
      label: 'Temperature Annomaly [°C]',
      grid: true,
    },
    marks: [
      Plot.ruleY([0], { stroke: 'grey'}),
      Plot.ruleX([2025], { stroke: 'red', strokeDasharray: [2, 4] }),
      Plot.ruleY([temperature_anomaly.find(d => d.year === 2025).mean], { stroke: 'red', strokeDasharray: [2, 4] }),
      Plot.line(temperatureAnomalyModelData, { stroke: 'black', strokeWidth: 2, }),
      Plot.lineY(temperature_anomaly, Plot.windowY({k: 10, reduce: "min"}, {x: "year", y: "mean", stroke: "steelblue"})),
      Plot.lineY(temperature_anomaly, Plot.windowY({k: 10, reduce: "max"}, {x: "year", y: "mean", stroke: "red"})),
      Plot.dotY(temperature_anomaly, {
        x: "year",
        y: "mean",
        stroke: 'red', 
        strokeOpacity: 0.7,
        fill: 'red',
        fillOpacity: 0.2,
        title: d => `Year: ${d.year}\nMean: ${d.mean.toFixed(2)}`
      }),
    ]
  })
}
;

const _5588 = (md) => {
return (
md`### Imports`
)
};

const _5586 = async () => {
const [{default: Spline}, d3Base, d3Regression] = await Promise.all([import("https://cdn.jsdelivr.net/npm/cubic-spline@3.0.3/+esm").then((module) => {
  if (!("default" in module)) throw new SyntaxError(`export 'default' not found`);
  return module;
}), import("https://cdn.jsdelivr.net/npm/d3@6/+esm"), import("https://cdn.jsdelivr.net/npm/d3-regression@1/+esm")]);

const d3 = { ...d3Base, ...d3Regression }
return {Spline,d3Base,d3Regression,d3};
};

const _387 = (md) => {
return (
md`### Data`
)
};

const _5071 = function years()
{
  const data = []
  for (let i = 1850; i <= 2100; ++i) {
    data.push(i)
  }
  return data
}
;

const _3963 = async function temperature_anomaly(d3)
{
  // Another possible data source ist https://berkeley-earth-temperature.s3.us-west-1.amazonaws.com/Global/Land_and_Ocean_summary.txt
  const data = await d3.csv('https://ourworldindata.org/grapher/temperature-anomaly.csv?v=1&csvType=filtered&useColumnShortNames=true', d3.autoType)
  return data.filter(d => d.entity === 'World').map(d => ({
    year: d.year, 
    lower: d.near_surface_temperature_anomaly_lower,
    mean: d.near_surface_temperature_anomaly,
    upper: d.near_surface_temperature_anomaly_upper,
  }))
}
;

const _398 = async function gtc_annual_emissions(Spline,d3,phi)
{
  // based on  HYDE datasets https://landuse.sites.uu.nl/datasets/
   const hydeData = [
    {year: 1750, fossil: 0.0025, landUse: 0.0819},
    {year: 1760, fossil: 0.0033, landUse: 0.0955},
    {year: 1770, fossil: 0.0041, landUse: 0.1146},
    {year: 1780, fossil: 0.0068, landUse: 0.1392},
    {year: 1790, fossil: 0.0087, landUse: 0.1692},
    {year: 1800, fossil: 0.0104, landUse: 0.2047},
    {year: 1810, fossil: 0.0123, landUse: 0.2511},
    {year: 1820, fossil: 0.0164, landUse: 0.3139},
    {year: 1830, fossil: 0.0246, landUse: 0.3957},
    {year: 1840, fossil: 0.0368, landUse: 0.5186},
    {year: 1850, fossil: 0.054, landUse: 0.6823},
  ]
  const xs = hydeData.map(d => d.year)
  const fossilSpline = new Spline(xs, hydeData.map(d => d.fossil))
  const landUseSpline = new Spline(xs, hydeData.map(d => d.landUse))
  const data = []
  let totalFossil = 0
  let totalCoal = 0
  let totalGas = 0
  let totalOil = 0
  let totalOtherIndustry = 0
  for (let year = 1750; year < 1850; ++year) {
    const fossilEmissions = fossilSpline.at(year)
    const landUseChangeEmissions = landUseSpline.at(year)
    totalFossil += fossilEmissions
    data.push({
      year,
      fossilEmissions,
      emissionsFromGas: 0,
      emissionsFromOil: 0,
      emissionsFromCoal: fossilEmissions,
      emissionsFromOtherIndustry: 0,
      landUseChangeEmissions,
      totalEmissions: fossilEmissions + landUseChangeEmissions,
    })
  }
  totalCoal = totalFossil
  const rawData = await d3.csv("https://ourworldindata.org/grapher/co2-fossil-plus-land-use.csv?v=1&csvType=filtered&useColumnShortNames=true&overlay=download-data", d3.autoType)
  const toGtC = x => x / (phi * 1e9)
  for (const obj of rawData) {
    const {
      year,
      emissions_total_including_land_use_change: total,
      emissions_from_land_use_change: landUseChange,
      emissions_total: fossil,
    } = obj
    const fossilEmissions = toGtC(fossil)
    const landUseChangeEmissions = toGtC(landUseChange)
    const totalEmissions = toGtC(total)
    totalFossil += fossilEmissions
    data.push({
      year, 
      fossilEmissions,
      landUseChangeEmissions,
      totalEmissions,
    })
  }
  const dataBySource = await d3.csv('https://ourworldindata.org/grapher/co2-by-source.csv?v=1&csvType=filtered&useColumnShortNames=true&overlay=download-data', d3.autoType)
  for (let i = 0; i < dataBySource.length; i++) {
    const {
      emissions_from_coal: coal = 0,
      emissions_from_oil: oil = 0,
      emissions_from_gas: gas = 0,
      emissions_from_other_industry: otherIndustry = 0,
      emissions_from_flaring: flaring = 0,
      emissions_from_cement: cement = 0,
    } = dataBySource[i]
    const emissionsFromGas = toGtC(gas)
    const emissionsFromOil = toGtC(oil)
    const emissionsFromCoal = toGtC(coal)
    const emissionsFromOtherIndustry = toGtC(otherIndustry + flaring + cement)
    totalCoal += emissionsFromCoal
    totalOil += emissionsFromOil
    totalGas += emissionsFromGas
    totalOtherIndustry += emissionsFromOtherIndustry
    Object.assign(data[i], {
      emissionsFromGas,
      emissionsFromOil,
      emissionsFromCoal,
      emissionsFromOtherIndustry,
    })
  }
  return data
}
;

const _5057 = function co2_annual_emissions(gtc_annual_emissions,phi)
{
  const keys = Object.keys(gtc_annual_emissions[0])
  return gtc_annual_emissions.map(({ year, ...values }) => {
    const obj = { year }
    for (const [key, value] of Object.entries(values)) {
      obj[key] = value * phi
    }
    return obj
  })
}
;

const _5079 = async function co2_annual_emission_gcb(FileAttachment,phi)
{
  const workbook = await FileAttachment("Global_Carbon_Budget_2025_v0@1.6.xlsx").xlsx()
  const rawData = workbook.sheet('Historical Budget', {
    headers: true,
    range: "A16:I291"
  })
  const data = []
  for (const row of rawData) {
    const {
      Year: year,
      'fossil emissions excluding carbonation': fossilEmissions = 0,
      'land-use change emissions': landUseChangeEmissions = 0,
      'atmospheric growth': atmosphericGrowth = 0,
      'ocean sink': oceanSink = 0,
      'land sink': landSink = 0,
      'cement carbonation sink': cementCarbonationSink = 0,
      'budget imbalance': budgetImbalance = 0,
    } = row
    data.push({
      year,
      fossilEmissions: fossilEmissions * phi,
      landUseChangeEmissions: landUseChangeEmissions * phi,
      totalEmissions: (fossilEmissions + landUseChangeEmissions) * phi,
      atmosphericGrowth: atmosphericGrowth * phi,
      oceanSink: oceanSink * phi,
      landSink: (landSink + cementCarbonationSink) * phi,
      totalSink: (oceanSink + landSink + cementCarbonationSink) * phi,
    })
  }
  return data
}
;

const _417 = async function emission_scenarios(d3,co2_annual_emissions,Spline)
{
  const rawData = await d3.csv('https://ourworldindata.org/explorers/ipcc-scenarios.csv?v=1&csvType=filtered&useColumnShortNames=true&country=SSP1+-+1.9~SSP1+-+2.6~SSP1+-+3.4~SSP1+-+4.5~SSP2+-+1.9~SSP2+-+2.6~SSP2+-+3.4~SSP2+-+4.5~SSP2+-+6.0~SSP3+-+3.4~SSP3+-+4.5~SSP3+-+6.0~SSP4+-+2.6~SSP4+-+3.4~SSP4+-+4.5~SSP4+-+6.0~SSP5+-+1.9~SSP5+-+2.6~SSP5+-+3.4~SSP5+-+4.5~SSP5+-+6.0&Metric=Greenhouse+gas+emissions&Sub-metric=Carbon+dioxide+%28CO%E2%82%82%29&Rate=Total&Region=Global', d3.autoType)
  const obj = {}
  const keys = []
  for (const { year, entity, emissions_co2__region_global, emissions_co2__region_global__annotations } of rawData) {
    const key = entity.replaceAll(/\s/g, '')
    if (keys.indexOf(key) < 0) {
      keys.push(key)
    }
    if (!obj[year]) {
      obj[year] = { year }
    }
    obj[year][key] = emissions_co2__region_global * 1e-9
  }
  const lastIndex = co2_annual_emissions.length - 1
  for (let i = lastIndex; i > lastIndex - 5; i--) {
    const {year, totalEmissions} = co2_annual_emissions[i]
    obj[year] = {}
    for (const key of keys) {
      obj[year][key] = totalEmissions
    }
  }
  obj[2150] = {}
  for (const key of keys) {
      obj[2150][key] = 0
  }
  const xs = Object.keys(obj)
  const splines = {}
  for (const key of keys) {
    const ys = Object.values(obj).map(({ [key]: y }) => y)
    splines[key] = new Spline(xs, ys)
  }
  const data = [] 
  for (let i = 2025; i <= 2150; ++i) {
    const row = { year: i }
    for (const key of keys) {
      row[key] = splines[key].at(i)
    }
    data.push(row)
  }
  data.keys = keys
  return data
}
;

const _2279 = function gtc_fossil_reserves(R_oil_0,EF_oil,phi,R_gas_0,EF_gas,R_hard_coal_0,EF_hard_coal,R_brown_coal_0,EF_brown_coal,gtc_annual_emissions,hubert_emission_predictions)
{
  const ligniteShare = 0.075  // Anteil Braunkohle an den historischen Kohle-Emissionen
  let R_oil = R_oil_0 * EF_oil / phi
  let R_gas = R_gas_0 * EF_gas / phi
  let R_hardCoal = R_hard_coal_0 * EF_hard_coal / phi
  let R_brownCoal = R_brown_coal_0 *  EF_brown_coal / phi 
  let R_total = R_oil + R_gas + R_hardCoal + R_brownCoal
  
  for (const d of gtc_annual_emissions) {
    const {
      fossilEmissions,
      emissionsFromGas,
      emissionsFromOil,
      emissionsFromCoal,
      emissionsFromOtherIndustry,
    } = d
    R_gas += emissionsFromGas
    R_oil += emissionsFromOil
    R_hardCoal += emissionsFromCoal * (1 - ligniteShare)
    R_brownCoal += emissionsFromCoal * ligniteShare
    R_total += emissionsFromGas + emissionsFromOil + emissionsFromCoal
  }
  
  const pushData = year => data.push({
    year, 
    oil: R_oil, 
    gas: R_gas, 
    hardCoal: R_hardCoal, 
    brownCoal: R_brownCoal,
    total: R_total,
  })
  
  const data = []
  
  for (const d of gtc_annual_emissions) {
    const {
      year,
      fossilEmissions,
      landUseChangeEmissions,
      totalEmissions,
      emissionsFromGas,
      emissionsFromOil,
      emissionsFromCoal,
      emissionsFromOtherIndustry,
    } = d
    R_gas -= emissionsFromGas
    R_oil -= emissionsFromOil
    R_hardCoal -= emissionsFromCoal * (1 - ligniteShare)
    R_brownCoal -= emissionsFromCoal * ligniteShare
    R_total -= emissionsFromGas + emissionsFromOil + emissionsFromCoal
    pushData(year)
  }
  
  for (const { year, hardCoal, brownCoal, oil, gas } of hubert_emission_predictions) {
    R_hardCoal -= hardCoal /phi,
    R_brownCoal -= brownCoal  /phi
    R_oil -= oil  /phi
    R_gas -= gas  /phi
    R_total -= (oil + gas + hardCoal + brownCoal) / phi 
    pushData(year)
  }
  
  return data
}
;

const _751 = async function co2_annual_mean_concentration(FileAttachment,d3)
{
  const dataSets = await Promise.all([
    FileAttachment('CO2_OBS_1850-2005.lpl').text(),
    d3.text('https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_annmean_mlo.csv'),
  ])

  const parseNasa = rawText => {
    const csv = rawText.replaceAll(/^\s*\n/g, '').replace(/^ x  CO2/, 'year,mean').replaceAll(/(\d{4})\s*/g, '$1, ')
    return d3.csvParse(csv, d3.autoType)
  }
  const parseNoaa = rawText => {
    const csv = rawText.replaceAll(/#.*\n/g,'')
    return d3.csvParse(csv, d3.autoType)
  }
  const rawData = [
    ...parseNasa(dataSets[0]).filter(({ year }) => year < 1959),
    ...parseNoaa(dataSets[1]),
  ]
  console.log(dataSets[0])
  const data = [{ ...rawData[0], rate: 0 }]
  for (let i = 1; i < rawData.length; ++i) {
    const rate = rawData[i].mean - rawData[i-1].mean
    data.push({ ...rawData[i], rate: Number(rate.toFixed(1)) })
  }
  return data
}
;

const _1227 = function co2_concentration_box_model(initSevenBoxModel,N_0,beta,surfaceOceanCirculation,thermohalineCirculation,diapycnalMixing,solveRK4)
{
  const t = [1750, 2300]
  const boxModel = initSevenBoxModel(N_0, beta, surfaceOceanCirculation, thermohalineCirculation, diapycnalMixing)
  return solveRK4(boxModel, t, N_0, { stepSize: 0.5 })
}
;

const _1580 = function co2_flux_box_model(co2_concentration_box_model,getBoxModelFlux,phi)
{
  const data = []
  const start = co2_concentration_box_model[0].t
  const end = co2_concentration_box_model[co2_concentration_box_model.length - 1].t
  for (let y = start; y < end; y++) {
    const { year, ...obj } = getBoxModelFlux(co2_concentration_box_model, y)
    const entries = Object.entries(obj).map(([key, value]) => [key, value * phi])
    const d = Object.fromEntries(entries)
    data.push({
        year,
        ...d,
        totalSink: d.oceanSink + d.landSink,
    })
  }
  return data
}
;

const _4095 = function radiative_forcing(N_0,co2_concentration_box_model)
{
  // Pre-industrial carbon mass in atmosphere 
  const N1_0 = N_0[0]
  
  // Calculate CO2 radiative forcing (ΔF) using the standard IPCC logarithmic formula
  const calcRadiativeForcing = N1 => 5.35 * Math.log(N1/N1_0)
  
  // Map the box model results to a time series of radiative forcing
  const radiativeForcing = co2_concentration_box_model.map(({ t, y: [N1] }) => [t, calcRadiativeForcing(N1)])

  // Calculate the baseline average for the 1861-1890 pre-industrial period.
  // This matches the baseline used by "Our World in Data" for global average temperatures.
  const radiativeForcingOffset = radiativeForcing
    .filter(([year]) => year >= 1861 && year <= 1890)
    .reduce((acc, [, ΔF]) => acc + ΔF, 0) / 30 // 30 years inclusive
  
  // Calibrate the entire dataset by subtracting the pre-industrial baseline offset
  return radiativeForcing.map(([year, ΔF]) => [year, ΔF - radiativeForcingOffset])
}
;

const _4368 = function transient_climate_response(radiative_forcing,temperature_anomaly)
{
  const getRadiativeForcing = t => radiative_forcing.find(([year]) => year === t)[1]
  return temperature_anomaly
    .filter(({ year }) => year > 1850)
    .map(({ year, mean }) => [year, mean / getRadiativeForcing(year)])
}
;

const _4131 = function temperature_anomaly_regression_model(radiative_forcing,temperature_anomaly,d3)
{
  const getRadiativeForcing = t => radiative_forcing.find(([year]) => year === t)[1]
  const dataset = temperature_anomaly
    .filter(({ year }) => year > 1850)
    .map(({ year, mean }) => [getRadiativeForcing(year), mean])
  const temperatureAnomalyRegressionModel = d3.regressionQuad().domain([-0.1,  5])(dataset)
  temperatureAnomalyRegressionModel.dataset = dataset
  return temperatureAnomalyRegressionModel
}
;

const _2716 = function hubert_emission_predictions(generateHubertData,R_hard_coal_0,EF_hard_coal,coalConsumption,R_oil_0,EF_oil,oilConsumption,R_gas_0,EF_gas,gasConsumption)
{
  const t = [2025, 2300]
  const length = t[1] - t[0] + 1
  const emissionsFromHardCoal = generateHubertData({ t, y0: 15.36, dy0: 0.17, I: R_hard_coal_0 * EF_hard_coal * (coalConsumption/ 100) })
  const emissionsFromOil = generateHubertData({ t, y0: 12.63, dy0: 0.2, I: R_oil_0 * EF_oil * (oilConsumption/ 100) })
  const emissionsFromGas = generateHubertData({ t, y0: 8.1, dy0: 0.2, I: R_gas_0 * EF_gas * (gasConsumption/ 100) })
  const emissionsFromBrownCoal = generateHubertData({ t, y0: 0.64, tMax: 2035, k: 0.016 })
  const emissionsFromOtherIndustry = generateHubertData({ t, y0: 2.23, tMax: 1980, k: 0.016 })
  const emissionsFromLandUseChange = generateHubertData({ t, y0: 4.46, tMax: 1980, k: 0.016 })
  const data = []
  for (let i = 0; i < length; i++) {
    const hardCoal = emissionsFromHardCoal[i][1]
    const brownCoal = emissionsFromBrownCoal[i][1]
    const oil = emissionsFromOil[i][1]
    const gas = emissionsFromGas[i][1]
    const otherIndustry = emissionsFromOtherIndustry[i][1]
    const landUseChange = emissionsFromLandUseChange[i][1]
    data.push({
      year: t[0] + i,
      hardCoal,
      brownCoal,
      oil,
      gas,
      otherIndustry,
      landUseChange,
      coal: hardCoal + brownCoal,
      total: hardCoal + brownCoal + oil + gas + otherIndustry + landUseChange,
    })
  } 
  return data
}
;

const _2312 = (md) => {
return (
md`#### Crude Oil

Global reserves currently stand at approx. 1770 billion barrels. The average emission factor per 1 billion barrels of crude oil is approx. 0.43 Gt of CO₂.`
)
};

const _2271 = function R_oil_0(){return(
1770
)};

const _2314 = function EF_oil(){return(
0.43
)};

const _2317 = (md) => {
return (
md`#### Natural Gas

Global reserves amount to approx. 206 trillion cubic meters. The average emission factor per 1 trillion cubic meters of natural gas is approx. 2 Gt of CO₂.`
)
};

const _2320 = function EF_gas(){return(
2
)};

const _2274 = function R_gas_0(){return(
206
)};

const _2322 = (md) => {
return (
md`#### Hard Coal

The physical reserves of hard coal amount to approx. 745 billion tonnes (about 70% of global coal reserves). The combustion of one billion tonnes of hard coal produces an average of 2.6 Gt of CO₂.`
)
};

const _2291 = function R_hard_coal_0(){return(
745
)};

const _2324 = function EF_hard_coal(){return(
2.6
)};

const _2328 = (md,R_brown_coal_0,EF_brown_coal) => {
return (
md`#### Brown Coal (Lignite)

The physical reserves of brown coal amount to approx. ${R_brown_coal_0} billion tonnes (about 30% of global coal reserves). The combustion of one billion tonnes of brown coal produces an average of ${EF_brown_coal} Gt of CO₂.`
)
};

const _2306 = function R_brown_coal_0(){return(
320
)};

const _2331 = function EF_brown_coal(){return(
1.2
)};

const _17 = (md) => {
return (
md`## Constants`
)
};

const _999 = (md,tex) => {
return (
md`Molare Masse von Kohlenstoff: ${tex.block `M_\text{C} = 12,011~\text{g/mol}`}`
)
};

const _1025 = (md,tex) => {
return (
md`Molare Masse von Sauerstoff: ${tex.block `M_\text{O} = 15,999~\text{g/mol}`}`
)
};

const _1028 = (md,tex) => {
return (
md`Molare Masse von Kohlendioxid (${tex `CO_2`}): ${tex.block `M_{\text{CO}_2} = 1 \times M_\text{C} + 2 \times M_\text{O} \approx 44,01~\text{g/mol}`}`
)
};

const _1010 = (md,tex) => {
return (
md`Molare Masse von trockener Luft: ${tex.block `M_\text{dry air} = 28,97~\text{g/mol}`}`
)
};

const _1035 = (md,tex) => {
return (
md`Umrechnungsfaktor zwischen der Masse von reinem Kohlenstoff und der Masse von ${tex `\text{CO}_2`} ist das Verhältnis ihrer molaren Massen: ${tex.block `\phi =  \frac{M_{\text{CO}_2}}{M_\text{C}} \approx 3,664`}`
)
};

const _1613 = function phi(){return(
3.664
)};

const _1049 = (md,tex) => {
return (
md`Gesamtmasse der Atmosphäre: ${tex.block `m_\text{atm} = 5,148 \times 10^{21}~\text{g}`}`
)
};

const _1052 = (md,tex) => {
return (
md`Stoffmenge der trockenen Luft: ${tex.block `n_\text{dry air} = \frac{m_{atm}}{M_\text{dry air}} \approx 1,777 \times 10^{20} \text{ mol}`}`
)
};

const _1060 = (md,tex) => {
return (
md`Umrechnungsfaktor von atmosphärischer ${tex `\text{CO}_2`}-Konzentration in Kohlenstoffmasse: ${tex.block `\epsilon =  \frac{10^{-6} \times n_\text{dry air} \times M_\text{C}}{ \text{ppm}}  \approx 2,134 \times 10^{15}~\frac{\text{g}^\text{C}}{\text{ppm}} = 2,134~\frac{\text{Pg}^\text{C}}{\text{ppm}}`}`
)
};

const _1607 = function epsilon(){return(
2.134
)};

const _2150 = (md) => {
return (
md`### Pre-Industrial Carbon Inventories

This section allows you to define the pre-industrial carbon inventories of the atmosphere, the entire hydrosphere (comprising the surface, intermediate, and deep ocean), the entire biosphere (comprising vegetation and soils), and the sediments.`
)
};

const _5564 = (md) => {
return (
md`#### ☁️ Atmosphere`
)
};

const _2115 = function viewof$c_atm_0(Inputs){return(
Inputs.number({ value: 598, label: 'Atmosphere [GtC]', step: 0.1, })
)};

const _5567 = (md) => {
return (
md`#### 🌊 Hydrosphere`
)
};

const _5518 = function viewof$c_ocean_0(Inputs){return(
Inputs.number({ value: 36_866, label: 'Hydrosphere [GtC]', step: 1, })
)};

const _5558 = function viewof$k_surface_ocean(Inputs){return(
Inputs.range([0, 100], { value: 2.4, label: `Surface Ocean Share [%]`, step: 0.1, })
)};

const _2157 = function viewof$k_intermediate_ocean(Inputs){return(
Inputs.range([0, 100], { value: 26.4, label: 'Intermediate Ocean Share [%]', step: 0.1 })
)};

const _5547 = function viewof$k_deep_ocean(Inputs,k_surface_ocean,k_intermediate_ocean){return(
Inputs.range([0, 100], {value: 100 - k_surface_ocean -  k_intermediate_ocean, label: "Deep Ocean Share [%]", step: 0.1, disabled: true})
)};

const _5571 = (md) => {
return (
md`#### 🌳 Biosphere`
)
};

const _5523 = function viewof$c_land_0(Inputs){return(
Inputs.number({ value: 1_969, label: 'Biosphere [GtC]', step: 1, })
)};

const _5573 = function viewof$k_vegetation_share(Inputs){return(
Inputs.range([0, 100], { value: 37, label: `Vegetation Share [%]`, step: 0.1, })
)};

const _5578 = function viewof$k_soil_share(Inputs,k_vegetation_share){return(
Inputs.range([0, 100], {value: 100 - k_vegetation_share, label: "Soil Share [%]", step: 0.1, disabled: true})
)};

const _5582 = (md) => {
return (
md`#### 🪨 Sediments`
)
};

const _5526 = function viewof$c_sediments_0(Inputs){return(
Inputs.number({ value: 90_000_000, label: 'Sediments [GtC]', step: 1, })
)};

const _1620 = function N_0(c_atm_0,c_ocean_0,k_surface_ocean,k_intermediate_ocean,c_sediments_0,c_land_0,k_vegetation_share)
{
  return [
    c_atm_0,                        // N1: Atmosphäre
    Math.round(c_ocean_0  * k_surface_ocean / 100), // N2: Oberflächenozean
    Math.round(c_ocean_0  * k_intermediate_ocean / 100), // N3: Zwischenozean
    Math.round(c_ocean_0  * (100 - k_surface_ocean - k_intermediate_ocean) / 100), // N4: Tiefenozean
    Math.round(c_sediments_0),      // N5: Sedimente
    Math.round(c_land_0 * k_vegetation_share / 100),         // N6: Biosphäre
    Math.round(c_land_0 * (100 - k_vegetation_share) / 100), // N7: Boden
  ]
}
;

const _1637 = (md) => {
return (
md`**CO₂ Fertilization Factor**<br>
A dimensionless parameter representing the extent to which elevated atmospheric CO2 concentrations stimulate terrestrial plant growth. It quantifies the biosphere's capacity to act as a carbon sink in response to rising emissions`
)
};

const _1630 = function viewof$beta(Inputs){return(
Inputs.number({ value: 0.11, label: 'Fertilizations-Faktor', step: 0.001, })
)};

const _5008 = (md) => {
return (
md`**Surface to Intermediate Ocean (Subduction)**<br>
The downward transport of dissolved carbon from the surface ocean into intermediate layers, primarily driven by the sinking of cold, dense water masses.`
)
};

const _4669 = function viewof$surfaceOceanCirculation(Inputs){return(
Inputs.number({ value: 11, label: `Subduction [PgC/year]`, step: 0.1 })
)};

const _5018 = (md) => {
return (
md`**Surface to Deep Ocean (Fast Thermohaline Circulation)**<br>
The rapid, density-driven transport of dissolved carbon directly from the surface to the deep ocean, primarily occurring through deep water formation in polar regions.`
)
};

const _4686 = function viewof$thermohalineCirculation(Inputs){return(
Inputs.number({ value: 59, label: `Thermohaline Circulation [PgC/year]`, step: 0.1 })
)};

const _4778 = (md) => {
return (
md`**Intermediate to Deep Ocean (Diapycnal Mixing)**<br>
The vertical exchange of carbon across ocean density gradients. This mixing process balances the large-scale overturning circulation and controls the slow transfer of carbon into the deep ocean.`
)
};

const _4693 = function viewof$diapycnalMixing(Inputs){return(
Inputs.number({ value: 162, label: `Diapycnal Mixing [PgC/year]`, step: 1 })
)};

const _2059 = function(Inputs,beta,surfaceOceanCirculation,thermohalineCirculation,diapycnalMixing,optimizeParameters,set,viewof$beta,viewof$surfaceOceanCirculation,viewof$thermohalineCirculation,viewof$diapycnalMixing){return(
Inputs.button([
  ["Fit parameter", () => { 
    const [
      b = beta, 
      s = surfaceOceanCirculation, 
      t = thermohalineCirculation, 
      d = diapycnalMixing
    ] = optimizeParameters([beta, , thermohalineCirculation, ], [0.02, 0.5, 1, 5])
    set(viewof$beta, Number(b.toFixed(3)))
    set(viewof$surfaceOceanCirculation, Number(s.toFixed(1)))
    set(viewof$thermohalineCirculation, Number(t.toFixed(1)))
    set(viewof$diapycnalMixing, Number(d.toFixed(0)))
  }]
])
)};

const _21 = (md) => {
return (
md`### Functions`
)
};

const _2601 = function generateHubertData(){return(
function generateHubertData (params = {}) {
  const {
    t = [2025, 2300],
    y0,
    dy0,
    I,
  } = params
  let {
    k,
    tMax,
  } = params
  
  const k_from_tau = (I, y0, tau) => {
    if (tau === 0) {
      return y0 / I
    }
    
    let k = y0 / I
    
    // Newton-Raphson 
    for (let i = 0; i < 15; i++) {
      const e_term = Math.exp(2 * k * tau)
      const f = 2 * I * k - y0 * (e_term + 1)
      const df = 2 * I - 2 * tau * y0 * e_term
      k = k - f / df
    }
    
    return k
  }

  const k_form_dy0 = (I, y0, dy0) => {
    return y0 / I + dy0 / (2 * y0)
  }

  const data = []
  if (I && tMax) {
    k = k_from_tau(I, y0, tMax - t[0])
  } else if (I && dy0) {
    k = k_form_dy0(I, y0, dy0)
    tMax = t[0] + Math.atanh(dy0 / (2 * k * y0)) / k
  } 

  const yMax = y0 * Math.pow(Math.cosh(k * (t[0] - tMax)), 2)
  
  const y = t => yMax / Math.pow(Math.cosh(k * (t - tMax)), 2)
  for (let x = t[0]; x <= t[1]; x++) {
    data.push([x, y(x)])
  }
  return data
}
)};

const _5181 = function createFluxCalculator(beta,surfaceOceanCirculation,thermohalineCirculation,diapycnalMixing,epsilon,findAnthropogenicEmissions){return(
function createFluxCalculator (N_0, ...args) {
  const [N1_0, N2_0, N3_0, N4_0, N5_0, N6_0, N7_0] = N_0
  const [
    β = beta, 
    z_0 = surfaceOceanCirculation, 
    z_1 = thermohalineCirculation, 
    z_2 = diapycnalMixing, 
    z_3 = 62, 
    z_4 = 60, 
    z_5 = 0.2,
  ] = args
  
  const k12 = (z_4 + z_5) / N1_0 
  const k21 = z_4 / N2_0 
  const k23 = (z_0 + z_5) / N2_0
  const k24 = z_1 / N2_0 
  const k32 = (z_0 + z_1) / N3_0 
  const k34 = (z_2 + z_5) / N3_0
  const k43 = (z_2 + z_1) / N4_0 
  const k45 = z_5 / N4_0 
  const k51 = z_5 / N5_0
  const k67 = z_3 / N6_0 
  const k71 = z_3 / N7_0

  const f = x => z_3 * (1 + β * Math.log(x))
  const ξ = z => 3.69 + 1.86e-2 * z - 1.80e-6 * z * z
  
  return (t, N) => {
    const [N1, N2, N3, N4, N5, N6, N7] = N

    const f12 = k12 * N1
    const f21 = k21 * (N2_0 + ξ(N1 / epsilon) * (N2 - N2_0))
    const f24 = k24 * N2
    const f23 = k23 * N2
    const f32 = k32 * N3
    const f34 = k34 * N3
    const f43 = k43 * N4
    const f45 = k45 * N4
    const f51 = k51 * N5
    const f16 = f(N1/N1_0)
    const f67 = k67 * N6
    const f71 = k71 * N7
    const [δ, γ] = findAnthropogenicEmissions(t)
    
    return [f12, f21, f24, f23, f32, f34, f43, f45, f51, f16, f67, f71, δ, γ]
  }
}
)};

const _1447 = function initSevenBoxModel(createFluxCalculator){return(
function initSevenBoxModel (...args) {
  const fluxCalculator = createFluxCalculator(...args)
  
  return (t, N) => {
    const [f12, f21, f24, f23, f32, f34, f43, f45, f51, f16, f67, f71, δ, γ] = fluxCalculator(t, N)
    
    const dN1dt = f21 - f12 + f51 + f71 - f16 + δ + γ
    const dN2dt = f12 - f21 + f32 - f23 - f24 
    const dN3dt = f23 - f32 - f34 + f43
    const dN4dt = f34 - f43 + f24 - f45
    const dN5dt = f45 - f51
    const dN6dt = f16 - f67 - 2 * δ
    const dN7dt = f67 - f71 + δ
    
    return [dN1dt, dN2dt, dN3dt, dN4dt, dN5dt, dN6dt, dN7dt]
  }
}
)};

const _1326 = function solveRK4(){return(
function solveRK4(dydt, tspan, y0, { stepSize = 0.1 }) {
  let t = tspan[0]
  let y = [...y0]
  
  const tEnd = tspan[1]
  const data = [{t, y: y0 }]  
  
  while (t < tEnd) {
    const dt = Math.min(stepSize, tEnd - t)

    const k1 = dydt(t, y)

    const y_k1 = y.map((val, i) => val + 0.5 * dt * k1[i])
    const k2 = dydt(t + 0.5 * dt, y_k1)

    const y_k2 = y.map((val, i) => val + 0.5 * dt * k2[i])
    const k3 = dydt(t + 0.5 * dt, y_k2)

    const y_k3 = y.map((val, i) => val + dt * k3[i])
    // Antrieb ist pro Kalenderjahr konstant: Ende des Schritts noch im laufenden Jahr auswerten
    const k4 = dydt(t + dt - 1e-9, y_k3)

    t += dt
    for (let i = 0; i < y.length; i++) {
      y[i] += (dt / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i])
    }

    if (Math.abs(t - Math.round(t)) < 1e-6) {
      t = Math.round(t)
      data.push({t, y: [...y]})
    }
  }
  return data
}
)};

const _5172 = function findAnthropogenicEmissions(noAnthropogenicEmissions,gtc_annual_emissions,hubert_emission_predictions,phi){return(
function findAnthropogenicEmissions (t) {
  let gamma = 0, delta = 0
  if (!noAnthropogenicEmissions) {
    const y = Math.floor(t)  // t = Y ist der 1. Januar des Jahres Y
    const predicate = ({ year }) => year === y
    const annualEmissions = gtc_annual_emissions.find(predicate)
    if (annualEmissions) {
      delta = annualEmissions.landUseChangeEmissions
      gamma = annualEmissions.fossilEmissions
    } else {
      const { landUseChange, coal, oil, gas, otherIndustry } = hubert_emission_predictions.find(predicate)
      delta = landUseChange / phi
      gamma = (coal + oil + gas + otherIndustry) / phi
    } 
  }
  return [delta, gamma]
}
)};

const _1442 = function calculateError(solveRK4,initSevenBoxModel,N_0,getBoxModelFlux,getAnualReservoirChange){return(
function calculateError(...args) {
  const t = [1750, 2025]
  const modelData = solveRK4(initSevenBoxModel(N_0, ...args), t, N_0, { stepSize: 0.5 })

  let totalError = 0;
  for (let year = 1851; year < 2025; year++) {
    const model = getBoxModelFlux(modelData, year)
    const measurement = getAnualReservoirChange(year)
    const factor = (year < 1880) ? 2 : (year > 1950) ? 5 : 1
    const atmosphericError = factor * Math.pow(model.atmosphericGrowth - measurement.atmosphericGrowth, 2)
    const oceanError = Math.pow(model.oceanSink - measurement.oceanSink, 2)
    const landError = Math.pow(model.landSink - measurement.landSink, 2)
    totalError += (atmosphericError * 5 + oceanError * 3 + landError * 1)
  }
  console.log(Math.round(totalError), ...args)

  return totalError
}
)};

const _1440 = function optimizeParameters(calculateError){return(
function optimizeParameters(initialParams, initialSteps) {
    const TOLERANCE = 1e-5
    const MAX_ITERATIONS = 1000
    const numberOfParams = initialParams.length
  
    let currentParams = [...initialParams]
    let currentSteps = [...initialSteps]
    let currentError = calculateError(...currentParams)

    for (let j = 0; j < MAX_ITERATIONS; j++) {
        let allStepsSmallEnough = true

        for (let i = 0; i < numberOfParams; i++) {
            const currentValue = currentParams[i]
            if (typeof currentValue === 'undefined') {
                continue
            }
          
            let improved = false
            let step = currentSteps[i]
          
            for (let delta of [step, -step]) {
                currentParams[i] = currentValue + delta
                let testError = calculateError(...currentParams)

                if (testError < currentError) {
                    currentError = testError
                    improved = true
                    break
                }
                
                currentParams[i] = currentValue
            }

            if (!improved) {
                currentSteps[i] /= 2
            }

            if (currentSteps[i] >= initialSteps[i] * TOLERANCE) {
                allStepsSmallEnough = false
            }
        }

        if (allStepsSmallEnough) {
            console.log(`Konvergiert nach ${j} Iterationen.`)
            break
        }
    }
  
    return currentParams
}
)};

const _2086 = function set(Event){return(
function set(input, value) {
  input.value = value;
  input.dispatchEvent(new Event("input", {bubbles: true}));
}
)};

const _2969 = function timeFilter(){return(
function timeFilter(a = 1750, b = 2024, key = 'year') {
  return ({ [key]: x }) => x >= a && x <= b
}
)};

const _3400 = function getBoxModelFlux(findAnthropogenicEmissions){return(
function getBoxModelFlux (modelData, year) {
    const i = year - modelData[0].t
    if (i < 0 || i + 1 >= modelData.length) {
      throw new Error('Index out of range')
    }
    const a = modelData[i]      // 1. Januar year
    const b = modelData[i + 1]  // 1. Januar year + 1
    const [delta = 0, gamma = 0] = findAnthropogenicEmissions(year)
    const dt = b.t - a.t
    const [dN1, dN2, dN3, dN4, dN5, dN6, dN7] = Object.keys(b.y).map(i => b.y[i] - a.y[i])
    const dN_a = dN1 / dt
    const dN_o = (dN2 + dN3 + dN4 + dN5) / dt
    const dN_b = (dN6 + dN7) / dt
    return {
        year,
        totalEmissions: gamma + delta,
        landUseChangeEmissions: delta,
        fossilEmissions: gamma,
        atmosphericGrowth: dN_a,
        oceanSink: dN_o,
        landSink: dN_b + delta,
    }
}
)};

const _3415 = function getAnnualMeanConcentrationGrowth(co2_annual_mean_concentration,epsilon){return(
function getAnnualMeanConcentrationGrowth (year) {
  const i = year - co2_annual_mean_concentration[0].year
  
  if (i <= 0 || i >= co2_annual_mean_concentration.length) {
    throw new Error('Given year is out of range')
  }

  const a = co2_annual_mean_concentration[i-1]
  const b = co2_annual_mean_concentration[i]
  return (b.mean - a.mean) * epsilon
}
)};

const _3439 = function getAnualReservoirChange(co2_annual_emission_gcb,phi){return(
function getAnualReservoirChange (year, n = 3) {
  const i = year - co2_annual_emission_gcb[0].year
  
  if (i <= 0 || i >= co2_annual_emission_gcb.length) {
    throw new Error('Given year is out of range')
  }
  
  let m = (n - 1) / 2 

  let landSink = 0
  let oceanSink = 0
  let atmosphericGrowth = 0
  while (i + m >= co2_annual_emission_gcb.length) {
    m--
  }
  for (let j = -m; j < m + 1; j++) {
    landSink += co2_annual_emission_gcb[i+j].landSink
    oceanSink += co2_annual_emission_gcb[i+j].oceanSink
    atmosphericGrowth += co2_annual_emission_gcb[i+j].atmosphericGrowth
  }
  const count = 2 * m + 1  // am Ende der Reihe wird das Fenster kleiner
  landSink /= count * phi
  oceanSink /= count * phi
  atmosphericGrowth /= count * phi
  return { landSink, oceanSink, atmosphericGrowth }
}
)};

const _4952 = function mC(co2_concentration_box_model,year,gtc_fossil_reserves){return(
function mC(i) {
  if (i >= 1 && i <= 7) {
    const { y: N } = co2_concentration_box_model.find(({t, y }) => t === year)
    return Math.round(N[i-1])
  } else if (i >= 8 && i <= 9) {
    const { total } = gtc_fossil_reserves.find(d => d.year === year)
    return Math.round(total)
  }
  return 0
}
)};

const _4959 = function fC(findAnthropogenicEmissions,year){return(
function fC(i, j) {
  if (i === 8) {
    const [delta] = findAnthropogenicEmissions(year)
    return delta.toFixed(1)
  } else if (i === 9) {
    const [,gamma] = findAnthropogenicEmissions(year)
    return gamma.toFixed(1)
  }
  return 60
}
)};

export default function define(runtime) {
  const main = runtime.module();
  const files = [
    {name: "Global_Carbon_Budget_2025_v0.6.xlsx", href: "./Global_Carbon_Budget_2025_v0.6.xlsx", mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", lastModified: 1767613137966.382, size: 433031},
    {name: "Global_Carbon_Budget_2025_v0@1.6.xlsx", href: "./Global_Carbon_Budget_2025_v0@1.6.xlsx", mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", lastModified: 1777138338658.199, size: 433031},
    {name: "CO2_OBS_1850-2005.lpl", href: "./CO2_OBS_1850-2005.lpl", mimeType: "application/octet-stream", lastModified: 1777303191945.655, size: 2038}
  ];
  main.builtin("FileAttachment", runtime.fileAttachments(files));
  main.define("cell 1546", ["md","tex"], _1546);
  main.define("viewof$year", ["Inputs"], _4956);
  main.define("year", ["Generators", "viewof$year"], (G, _) => G.input(_));
  main.define("cell 4972", ["createFluxCalculator","N_0","beta","surfaceOceanCirculation","thermohalineCirculation","diapycnalMixing","co2_concentration_box_model","year","gtc_fossil_reserves","svg","width"], _4972);
  main.define("cell 2309", ["md","R_oil_0","EF_oil","tex","phi","R_gas_0","EF_gas","R_hard_coal_0","EF_hard_coal","R_brown_coal_0","EF_brown_coal"], _2309);
  main.define("viewof$gasConsumption", ["Inputs"], _5108);
  main.define("gasConsumption", ["Generators", "viewof$gasConsumption"], (G, _) => G.input(_));
  main.define("viewof$oilConsumption", ["Inputs"], _5112);
  main.define("oilConsumption", ["Generators", "viewof$oilConsumption"], (G, _) => G.input(_));
  main.define("viewof$coalConsumption", ["Inputs"], _2880);
  main.define("coalConsumption", ["Generators", "viewof$coalConsumption"], (G, _) => G.input(_));
  main.define("viewof$ligniteConsumption", ["Inputs"], _5489);
  main.define("ligniteConsumption", ["Generators", "viewof$ligniteConsumption"], (G, _) => G.input(_));
  main.define("cell 5456", ["gtc_fossil_reserves","Plot"], _5456);
  main.define("cell 440", ["co2_annual_emissions","hubert_emission_predictions","emission_scenarios","scenario","Plot","d3"], _440);
  main.define("viewof$scenario", ["Inputs","emission_scenarios"], _5157);
  main.define("scenario", ["Generators", "viewof$scenario"], (G, _) => G.input(_));
  main.define("cell 1345", ["Plot","d3","co2_concentration_box_model","epsilon","co2_annual_mean_concentration"], _1345);
  main.define("viewof$noAnthropogenicEmissions", ["Inputs"], _4360);
  main.define("noAnthropogenicEmissions", ["Generators", "viewof$noAnthropogenicEmissions"], (G, _) => G.input(_));
  main.define("cell 5235", ["co2_annual_emission_gcb","co2_flux_box_model","Plot","d3"], _5235);
  main.define("cell 3958", ["Plot","d3","temperature_anomaly_regression_model"], _3958);
  main.define("cell 4126", ["temperature_anomaly_regression_model","radiative_forcing","Plot","d3","temperature_anomaly"], _4126);
  main.define("cell 5588", ["md"], _5588);
  main.define("cell 5586", [], _5586);
  main.define("Spline", ["cell 5586"], (_) => _.Spline);
  main.define("d3Base", ["cell 5586"], (_) => _.d3Base);
  main.define("d3Regression", ["cell 5586"], (_) => _.d3Regression);
  main.define("d3", ["cell 5586"], (_) => _.d3);
  main.define("cell 387", ["md"], _387);
  main.define("years", [], _5071);
  main.define("temperature_anomaly", ["d3"], _3963);
  main.define("gtc_annual_emissions", ["Spline","d3","phi"], _398);
  main.define("co2_annual_emissions", ["gtc_annual_emissions","phi"], _5057);
  main.define("co2_annual_emission_gcb", ["FileAttachment","phi"], _5079);
  main.define("emission_scenarios", ["d3","co2_annual_emissions","Spline"], _417);
  main.define("gtc_fossil_reserves", ["R_oil_0","EF_oil","phi","R_gas_0","EF_gas","R_hard_coal_0","EF_hard_coal","R_brown_coal_0","EF_brown_coal","gtc_annual_emissions","hubert_emission_predictions"], _2279);
  main.define("co2_annual_mean_concentration", ["FileAttachment","d3"], _751);
  main.define("co2_concentration_box_model", ["initSevenBoxModel","N_0","beta","surfaceOceanCirculation","thermohalineCirculation","diapycnalMixing","solveRK4"], _1227);
  main.define("co2_flux_box_model", ["co2_concentration_box_model","getBoxModelFlux","phi"], _1580);
  main.define("radiative_forcing", ["N_0","co2_concentration_box_model"], _4095);
  main.define("transient_climate_response", ["radiative_forcing","temperature_anomaly"], _4368);
  main.define("temperature_anomaly_regression_model", ["radiative_forcing","temperature_anomaly","d3"], _4131);
  main.define("hubert_emission_predictions", ["generateHubertData","R_hard_coal_0","EF_hard_coal","coalConsumption","R_oil_0","EF_oil","oilConsumption","R_gas_0","EF_gas","gasConsumption"], _2716);
  main.define("cell 2312", ["md"], _2312);
  main.define("R_oil_0", [], _2271);
  main.define("EF_oil", [], _2314);
  main.define("cell 2317", ["md"], _2317);
  main.define("EF_gas", [], _2320);
  main.define("R_gas_0", [], _2274);
  main.define("cell 2322", ["md"], _2322);
  main.define("R_hard_coal_0", [], _2291);
  main.define("EF_hard_coal", [], _2324);
  main.define("cell 2328", ["md","R_brown_coal_0","EF_brown_coal"], _2328);
  main.define("R_brown_coal_0", [], _2306);
  main.define("EF_brown_coal", [], _2331);
  main.define("cell 17", ["md"], _17);
  main.define("cell 999", ["md","tex"], _999);
  main.define("cell 1025", ["md","tex"], _1025);
  main.define("cell 1028", ["md","tex"], _1028);
  main.define("cell 1010", ["md","tex"], _1010);
  main.define("cell 1035", ["md","tex"], _1035);
  main.define("phi", [], _1613);
  main.define("cell 1049", ["md","tex"], _1049);
  main.define("cell 1052", ["md","tex"], _1052);
  main.define("cell 1060", ["md","tex"], _1060);
  main.define("epsilon", [], _1607);
  main.define("cell 2150", ["md"], _2150);
  main.define("cell 5564", ["md"], _5564);
  main.define("viewof$c_atm_0", ["Inputs"], _2115);
  main.define("c_atm_0", ["Generators", "viewof$c_atm_0"], (G, _) => G.input(_));
  main.define("cell 5567", ["md"], _5567);
  main.define("viewof$c_ocean_0", ["Inputs"], _5518);
  main.define("c_ocean_0", ["Generators", "viewof$c_ocean_0"], (G, _) => G.input(_));
  main.define("viewof$k_surface_ocean", ["Inputs"], _5558);
  main.define("k_surface_ocean", ["Generators", "viewof$k_surface_ocean"], (G, _) => G.input(_));
  main.define("viewof$k_intermediate_ocean", ["Inputs"], _2157);
  main.define("k_intermediate_ocean", ["Generators", "viewof$k_intermediate_ocean"], (G, _) => G.input(_));
  main.define("viewof$k_deep_ocean", ["Inputs","k_surface_ocean","k_intermediate_ocean"], _5547);
  main.define("k_deep_ocean", ["Generators", "viewof$k_deep_ocean"], (G, _) => G.input(_));
  main.define("cell 5571", ["md"], _5571);
  main.define("viewof$c_land_0", ["Inputs"], _5523);
  main.define("c_land_0", ["Generators", "viewof$c_land_0"], (G, _) => G.input(_));
  main.define("viewof$k_vegetation_share", ["Inputs"], _5573);
  main.define("k_vegetation_share", ["Generators", "viewof$k_vegetation_share"], (G, _) => G.input(_));
  main.define("viewof$k_soil_share", ["Inputs","k_vegetation_share"], _5578);
  main.define("k_soil_share", ["Generators", "viewof$k_soil_share"], (G, _) => G.input(_));
  main.define("cell 5582", ["md"], _5582);
  main.define("viewof$c_sediments_0", ["Inputs"], _5526);
  main.define("c_sediments_0", ["Generators", "viewof$c_sediments_0"], (G, _) => G.input(_));
  main.define("N_0", ["c_atm_0","c_ocean_0","k_surface_ocean","k_intermediate_ocean","c_sediments_0","c_land_0","k_vegetation_share"], _1620);
  main.define("cell 1637", ["md"], _1637);
  main.define("viewof$beta", ["Inputs"], _1630);
  main.define("beta", ["Generators", "viewof$beta"], (G, _) => G.input(_));
  main.define("cell 5008", ["md"], _5008);
  main.define("viewof$surfaceOceanCirculation", ["Inputs"], _4669);
  main.define("surfaceOceanCirculation", ["Generators", "viewof$surfaceOceanCirculation"], (G, _) => G.input(_));
  main.define("cell 5018", ["md"], _5018);
  main.define("viewof$thermohalineCirculation", ["Inputs"], _4686);
  main.define("thermohalineCirculation", ["Generators", "viewof$thermohalineCirculation"], (G, _) => G.input(_));
  main.define("cell 4778", ["md"], _4778);
  main.define("viewof$diapycnalMixing", ["Inputs"], _4693);
  main.define("diapycnalMixing", ["Generators", "viewof$diapycnalMixing"], (G, _) => G.input(_));
  main.define("cell 2059", ["Inputs","beta","surfaceOceanCirculation","thermohalineCirculation","diapycnalMixing","optimizeParameters","set","viewof$beta","viewof$surfaceOceanCirculation","viewof$thermohalineCirculation","viewof$diapycnalMixing"], _2059);
  main.define("cell 21", ["md"], _21);
  main.define("generateHubertData", [], _2601);
  main.define("createFluxCalculator", ["beta","surfaceOceanCirculation","thermohalineCirculation","diapycnalMixing","epsilon","findAnthropogenicEmissions"], _5181);
  main.define("initSevenBoxModel", ["createFluxCalculator"], _1447);
  main.define("solveRK4", [], _1326);
  main.define("findAnthropogenicEmissions", ["noAnthropogenicEmissions","gtc_annual_emissions","hubert_emission_predictions","phi"], _5172);
  main.define("calculateError", ["solveRK4","initSevenBoxModel","N_0","getBoxModelFlux","getAnualReservoirChange"], _1442);
  main.define("optimizeParameters", ["calculateError"], _1440);
  main.define("set", ["Event"], _2086);
  main.define("timeFilter", [], _2969);
  main.define("getBoxModelFlux", ["findAnthropogenicEmissions"], _3400);
  main.define("getAnnualMeanConcentrationGrowth", ["co2_annual_mean_concentration","epsilon"], _3415);
  main.define("getAnualReservoirChange", ["co2_annual_emission_gcb","phi"], _3439);
  main.define("mC", ["co2_concentration_box_model","year","gtc_fossil_reserves"], _4952);
  main.define("fC", ["findAnthropogenicEmissions","year"], _4959);
  return main;
}
