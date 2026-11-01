<script setup>
// Carbon cycle diagram (drawn with draw.io) showing reservoir masses [PgC] and fluxes [PgC/yr]
defineProps({
  // Formatted fluxes f12 … f71, delta (land-use change) and gamma (fossil emissions)
  fluxes: { type: Object, required: true },
  // Formatted masses of the seven reservoirs followed by the fossil reserves
  masses: { type: Array, required: true },
})
</script>

<template>
  <svg class="carbon-cycle-diagram" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 604 462" role="img" aria-label="Seven-box carbon cycle with reservoir masses and fluxes">
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
                          <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">{{ fluxes.f24 }}</div>
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
                        <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><strong>{{ masses[1] }}</strong>
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
                          <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">{{ fluxes.f32 }}</div>
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
                        <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><strong>{{ masses[2] }}</strong>
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
                          <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">{{ fluxes.f43 }}</div>
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
                        <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><strong>{{ masses[3] }}</strong>
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
                        <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><strong>{{ masses[5] }}</strong>
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
                        <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><strong>{{ masses[6] }}</strong>
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
                          <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">{{ fluxes.f16 }}</div>
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
                        <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><strong>{{ masses[4] }}</strong>
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
                          <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">{{ fluxes.f45 }}</div>
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
                          <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">{{ fluxes.f71 }}</div>
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
                        <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">{{ fluxes.f23 }}</div>
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
                          <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">{{ fluxes.f67 }}</div>
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
                          <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">{{ fluxes.f34 }}</div>
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
                        <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">{{ fluxes.f12 }}</div>
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
                          <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">{{ fluxes.f51 }}</div>
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
                          <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">{{ fluxes.gamma }}</div>
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
                        <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">{{ fluxes.f21 }}</div>
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
                          <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">{{ fluxes.delta }}</div>
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
                        <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><strong>{{ masses[0] }}</strong>
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
                        <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><strong>{{ masses[7] }}</strong>
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
                          <div style="display: inline-block; font-size: 11px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; background-color: light-dark(#ffffff, var(--ge-dark-color, #121212)); white-space: nowrap; ">{{ fluxes.delta }}</div>
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
  </svg>
</template>

<style scoped>
.carbon-cycle-diagram {
  display: block;
  width: 100%;
  max-width: 720px;
  height: auto;
  margin: 0 auto;
  color-scheme: light;
}
</style>
