<template>
  <!-- ==================== IRS W2 ====================== -->
  <div
    id="pdf-pages"
    style="font-size: 11px;
    font-family: QuickType, Arial, Helvetica, sans-serif"
  >
    <div id="page1-div" style="position:relative;width:918px;height:600px;">
      <!-- <img width="918" height="1188" src="../../static/form-assets/irsw2.png" /> -->
      <p
        style="position:absolute;top:39px;left:54px;white-space:nowrap"
        class="ft40"
      >
        &#160; &#160; &#160;
      </p>
      <p
        style="position:absolute;top:56px;left:236px;white-space:nowrap;font-size:10.5px"
        class="ft41"
      >
        <b>a &#160;</b>Employee’s social security number
      </p>
      <div class="input-area" style="position:absolute;top:69px;left:228px">
        <input
          id="EmployeeSSN"
          v-model="Irsw2.EmployeeSSN"
          v-mask="'###-##-####'"
          name="EmployeeSSN"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          class="no-outline"
          data-line-number="a"
          type="password"
          style="width:192px;"
          @blur="updateW2"
        />
      </div>
      <p
        style="position:absolute;top:73px;left:430px;white-space:nowrap"
        class="ft42"
      >
        OMB No. 1545-1736
      </p>
      <p
        style="position:absolute;top:56px;left:540px;white-space:nowrap"
        class="ft410"
      >
        <b>Safe, accurate,&#160;<br />FAST! Use</b>
      </p>
      <p
        style="position:absolute;top:56px;left:751px;white-space:nowrap;font-size:10px"
        class="ft411"
      >
        Visit the IRS website at&#160;<br /><i>www.irs.gov/efile</i>&#160;
      </p>
      <p
        style="position:absolute;top:92px;left:63px;white-space:nowrap"
        class="ft41"
      >
        <b>b &#160;</b>Employer identification number (EIN)
      </p>
      <div style="position:absolute;top:107px;left:55px;">
        <input
          id="EmployerEIN"
          v-model="Irsw2.EmployerEIN"
          v-mask="'##-#######'"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          name="EmployerEIN"
          data-line-number="b"
          class="no-outline"
          style="width:439px;height:19px"
          type="text"
          @blur="updateW2"
        />
      </div>
      <!-- <p style="position:absolute;top:92px;left:275px;">
        Business Name
      </p>
      <div style="position:absolute;top:107px;left:275px;">
        <input
          id="BusinessNameLine1Txt"
          v-model="Irsw2.EmployerName.BusinessNameLine1Txt"
          v-uppercase
          name="BusinessNameLine1Txt"
          data-line-number="b"
          class="no-outline"
          style="width:220px;height:19px"
          type="text"
          @blur="updateW2"
        />
      </div> -->
      <p
        style="position:absolute;top:128px;left:63px;white-space:nowrap"
        class="ft41"
      >
        <b>c &#160;</b>Employer’s name, address, and ZIP code
      </p>
      <div class="input-area" style="position:absolute;top:142px;left:60px">
        Name
        <input
          id="EmployerNameControlTxt"
          v-model="Irsw2.EmployerNameControlTxt"
          v-uppercase
          name="EmployerNameControlTxt"
          class="no-outline"
          type="text"
          data-line-number="c"
          style="width:403px; height:19px"
          @blur="updateW2"
        />
      </div>
      <div
        class="input-area city-town"
        style="position:absolute;top:165px;white-space:nowrap;"
      >
        <p style="position:absolute;left:62px;">Address</p>
        <p style="position:absolute;left:235px;">City</p>
        <p style="position:absolute;left:348px;">State</p>
        <p style="position:absolute;left:423px;">ZIP code</p>
      </div>
      <div
        class="input-area city-town"
        style="position:absolute;top:179px;left:55px;white-space:nowrap;"
      >
        <input
          v-model="Irsw2.EmployerUSAddress.AddressLine1Txt"
          v-uppercase
          class="no-outline"
          type="text"
          title="Stree address"
          data-line-number="f"
          style="text-align:left;width:170px; height:18px"
        />
        <input
          v-model="Irsw2.EmployerUSAddress.CityNm"
          v-uppercase
          class="no-outline"
          type="text"
          title="Employee's City"
          data-line-number="f"
          style="text-align:left;width:110px; height:18px"
        />
        <select
          v-model="Irsw2.EmployerUSAddress.StateAbbreviationCd"
          v-uppercase
          name="state"
          title="Select State"
          style="width:70px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
        >
          <option value=" "></option>
          <option v-for="state in stateList" :key="state" :value="state">{{
            state
          }}</option>
        </select>
        <input
          v-model="Irsw2.EmployerUSAddress.ZIPCd"
          v-mask="'#####'"
          class="no-outline"
          name="ZIPCd"
          type="number"
          title="Employee's ZIP Code"
          data-line-number="f"
          style="text-align:left;width:78px; height:18px"
        />
      </div>

      <div
        class="input-area city-town"
        style="position:absolute;top:200px;white-space:nowrap;"
      >
        <p style="position:absolute;left:60px;">Foreign Address</p>
        <p style="position:absolute;left:235px;">Foreign Province</p>
        <p style="position:absolute;left:346px;">Country</p>
        <p style="position:absolute;left:423px;">Postal code</p>
      </div>
      <div
        class="input-area city-town"
        style="position:absolute;top:215px;left:55px;white-space:nowrap;"
      >
        <input
          v-model="Irsw2.EmployerForeignAddress.AddressLine1Txt1"
          v-uppercase
          class="no-outline"
          type="text"
          title="Foreign address"
          data-line-number="f"
          style="text-align:left;width:170px; height:18px"
        />
        <input
          v-model="Irsw2.EmployerForeignAddress.CityNm"
          v-uppercase
          class="no-outline"
          type="text"
          title="Foreign City"
          data-line-number="f"
          style="text-align:left;width:110px; height:18px"
        />
        <select
          v-model="Irsw2.EmployerForeignAddress.CountryCd"
          v-uppercase
          name="state"
          title="Foreign Country"
          style="width:70px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
        >
          <option value=" "></option>
          <option
            v-for="country in countries"
            :key="country.code"
            :value="country.code"
            >{{ country.name.toUpperCase() }}</option
          >
        </select>
        <input
          v-model.number="Irsw2.EmployerForeignAddress.ForeignPostalCd"
          class="no-outline"
          name="ZIPCd"
          type="number"
          title="Foreign Postal Code"
          data-line-number="f"
          style="text-align:left;width:78px; height:18px"
          @blur="updateW2"
        />
      </div>
      <p
        style="position:absolute;top:236px;left:63px;white-space:nowrap"
        class="ft41"
      >
        <b>d &#160;</b>Control number
      </p>
      <div style="position:absolute;top:251px;left:55px;">
        <input
          id="ControlNum"
          v-model="Irsw2.ControlNum"
          v-uppercase
          name="ControlNum"
          data-line-number="d"
          class="no-outline"
          style="width:440px;height:19px"
          type="text"
          @blur="updateW2"
        />
      </div>
      <p
        style="position:absolute;top:272px;left:63px;white-space:nowrap"
        class="ft41"
      >
        <!-- <b>e &#160;</b>Employee’s first name and initial -->
        <b>e &#160;</b>Employee’s First name, Last name and initial
      </p>
      <div style="position:absolute;top:288px;left:55px;">
        <input
          id="Firstname"
          v-model="Irsw2.EmployeeNm"
          v-uppercase
          name="Firstname"
          data-line-number="e"
          class="no-outline"
          style="width:439px;height:19px"
          type="text"
          title="Employee's First Name"
          @change="updateW2"
        />
        <!-- <input
          id="Lastname"
          v-model="Irsw2.lastName"
          v-uppercase
          name="Lastname"
          data-line-number="e"
          class="no-outline"
          style="width:200px;height:19px"
          type="text"
          title="Employee's Last Name"
          @change="updateW2"
        />
        <input
          id="Suffix"
          v-model="Irsw2.Employee.suffix"
          v-uppercase
          name="Suffix"
          data-line-number="e"
          class="no-outline"
          style="width:32px;height:19px"
          type="text"
          title="Employee's Suffix"
          @blur.native="updateW2"
        /> -->
      </div>
      <!-- <p
        style="position:absolute;top:272px;left:265px;white-space:nowrap"
        class="ft42"
      >
        Last name
      </p>
      <p
        style="position:absolute;top:272px;left:470px;white-space:nowrap"
        class="ft42"
      >
        Suff.
      </p> -->
      <p
        style="position:absolute;top:315px;left:63px;white-space:nowrap"
        class="ft41"
      >
        <b>f &#160;</b>Employee’s address, city, state and ZIP code
      </p>
      <div
        class="input-area city-town"
        style="position:absolute;top:332px;left:55px;white-space:nowrap;"
      >
        <input
          v-model="Irsw2.EmployeeUSAddress.AddressLine1Txt"
          v-uppercase
          class="no-outline"
          type="text"
          title="Stree address"
          data-line-number="f"
          style="text-align:left;width:170px; height:18px"
          @blur="updateW2"
        />
        <input
          v-model="Irsw2.EmployeeUSAddress.CityNm"
          v-uppercase
          class="no-outline"
          type="text"
          title="Employee's City"
          data-line-number="f"
          style="text-align:left;width:110px; height:18px"
          @blur="updateW2"
        />
        <select
          v-model="Irsw2.EmployeeUSAddress.StateAbbreviationCd"
          v-uppercase
          name="state"
          title="Select State"
          style="width:70px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
          @blur="updateW2"
        >
          <option value=" "></option>
          <option v-for="state in stateList" :key="state" :value="state">{{
            state
          }}</option>
        </select>
        <input
          v-model="Irsw2.EmployeeUSAddress.ZIPCd"
          v-mask="'#####'"
          class="no-outline"
          name="ZIPCd"
          type="number"
          title="Employee's ZIP Code"
          data-line-number="f"
          style="text-align:left;width:78px; height:18px"
          @blur="updateW2"
        />
      </div>
      <div
        class="input-area"
        style="position:absolute;top:360px;left:58px;white-space:nowrap;"
      >
        Foreign Province
        <input
          v-model="Irsw2.EmployeeForeignAddress.AddressLine1Txt"
          v-uppercase
          name="AddressLine1Txt"
          class="no-outline"
          type="text"
          title="Stree address"
          data-line-number="f"
          style="text-align:left;width:349px; height:18px"
          @blur="updateW2"
        />
      </div>
      <div
        class="input-area"
        style="position:absolute;top:383px;left:58px;white-space:nowrap;"
      >
        Foreign Postal Code
        <input
          id="ForeignPostalCd"
          v-model="Irsw2.EmployeeForeignAddress.ForeignPostalCd"
          v-uppercase
          name="ForeignPostalCd"
          class="no-outline"
          type="text"
          title="Stree address"
          data-line-number="f"
          style="text-align:left;width:332px; height:18px"
          @blur="updateW2"
        />
      </div>
      <div
        class="input-area"
        style="position:absolute;top:407px;left:58px;white-space:nowrap;"
      >
        Foreign Country
        <select
          v-model="Irsw2.EmployeeForeignAddress.CountryCd"
          class="no-outline"
          style="text-align:left;border: none;
            background-color: #f1f4ff;
            height: 19px; width:354px"
          @blur="updateW2"
        >
          <option value=""></option>
          <option
            v-for="country in countries"
            :key="country.code"
            :value="country.code"
            >{{ country.name.toUpperCase() }}</option
          >
        </select>
      </div>
      <p
        style="position:absolute;top:92px;left:508px;white-space:nowrap;font-size:10.5px"
        class="ft41"
      >
        <b>1 &#160;</b>Wages, tips, other compensation
      </p>
      <money-input
        v-model="Irsw2.WagesAmt"
        name="WagesAmt"
        :div-style="'position:absolute;top:105px;left:499px'"
        :width="180"
        :height="18"
        :line="'1'"
        @input="updateW2"
      />
      <p
        style="position:absolute;top:92px;left:692px;white-space:nowrap"
        class="ft41"
      >
        <b>2 &#160;</b>Federal income tax withheld
      </p>
      <money-input
        v-model="Irsw2.WithholdingAmt"
        name="WithholdingAmt"
        :div-style="'position:absolute;top:105px;left:683px'"
        :width="180"
        :height="18"
        :line="'2'"
        @input="updateW2"
      />
      <p
        style="position:absolute;top:128px;left:508px;white-space:nowrap"
        class="ft41"
      >
        <b>3 &#160;</b>Social security wages
      </p>
      <money-input
        v-model="Irsw2.SocialSecurityWagesAmt"
        name="SocialSecurityWagesAmt"
        :div-style="'position:absolute;top:144px;left:497px'"
        :width="183"
        :height="18"
        :line="'3'"
      />
      <p
        style="position:absolute;top:128px;left:692px;white-space:nowrap"
        class="ft41"
      >
        <b>4 &#160;</b>Social security tax withheld
      </p>
      <money-input
        v-model="Irsw2.SocialSecurityTaxAmt"
        name="SocialSecurityTaxAmt"
        :div-style="'position:absolute;top:144px;left:681px'"
        :width="182"
        :height="18"
        :line="'4'"
        @change.native="updateW2"
      />
      <p
        style="position:absolute;top:164px;left:508px;white-space:nowrap"
        class="ft41"
      >
        <b>5 &#160;</b>Medicare wages and tips
      </p>
      <money-input
        v-model="Irsw2.MedicareWagesAndTipsAmt"
        name="MedicareWagesAndTipsAmt"
        :div-style="'position:absolute;top:179px;left:497px'"
        :width="183"
        :height="18"
        :line="'5'"
        @change.native="updateW2"
      />
      <p
        style="position:absolute;top:164px;left:692px;white-space:nowrap"
        class="ft41"
      >
        <b>6 &#160;</b>Medicare tax withheld
      </p>
      <money-input
        v-model="Irsw2.MedicareTaxWithheldAmt"
        name="MedicareTaxWithheldAmt"
        :div-style="'position:absolute;top:179px;left:681px'"
        :width="182"
        :height="18"
        :line="'6'"
        @change.native="updateW2"
      />
      <p
        style="position:absolute;top:200px;left:508px;white-space:nowrap"
        class="ft41"
      >
        <b>7 &#160;</b>Social security tips
      </p>
      <money-input
        v-model="Irsw2.SocialSecurityTipsAmt"
        name="SocialSecurityTipsAmt"
        :div-style="'position:absolute;top:215px;left:497px'"
        :width="183"
        :height="18"
        :line="'7'"
        @change.native="updateW2"
      />
      <p
        style="position:absolute;top:200px;left:692px;white-space:nowrap"
        class="ft41"
      >
        <b>8 &#160;</b>Allocated tips
      </p>
      <money-input
        v-model="Irsw2.AllocatedTipsAmt"
        name="AllocatedTipsAmt"
        :div-style="'position:absolute;top:215px;left:681px'"
        :width="182"
        :height="18"
        :line="'8'"
        @change.native="updateW2"
      />
      <p
        style="position:absolute;top:236px;left:508px;white-space:nowrap"
        class="ft41"
      >
        <b>9 &#160;</b>
      </p>
      <p
        style="position:absolute;top:236px;left:686px;white-space:nowrap"
        class="ft41"
      >
        <b>10 &#160;</b>Dependent care benefits
      </p>
      <money-input
        v-model="Irsw2.DependentCareBenefitsAmt"
        name="DependentCareBenefitsAmt"
        :div-style="'position:absolute;top:252px;left:681px'"
        :width="182"
        :height="18"
        :line="'10'"
        @change.native="updateW2"
      />
      <p
        style="position:absolute;top:272px;left:503px;white-space:nowrap"
        class="ft41"
      >
        <b>11 &#160;</b>Nonqualified plans
      </p>
      <money-input
        v-model="Irsw2.NonqualifiedPlansAmt"
        name="NonqualifiedPlansAmt"
        :div-style="'position:absolute;top:288px;left:497px'"
        :width="182"
        :height="18"
        :line="'11'"
        @change.native="updateW2"
      />
      <p
        style="position:absolute;top:272px;left:686px;white-space:nowrap"
        class="ft41"
      >
        <b>12a &#160;</b>See instructions for box 12
      </p>
      <div style="position:absolute;top:287px;left:694px;">
        <input
          id="EmployersUseCd"
          v-model="EmployersUseGrp1.EmployersUseCd"
          v-uppercase
          name="ControlNum"
          data-line-number="12a"
          class="no-outline"
          style="width:40px;height:19px"
          type="text"
          @blur="addNewEmployersUse"
        />
      </div>
      <money-input
        v-model="EmployersUseGrp1.EmployersUseAmt"
        name="EmployersUseAmt"
        :div-style="'position:absolute;top:287px;left:735px'"
        :width="128"
        :height="18"
        :line="'12'"
        @change.native="addNewEmployersUse"
      />
      <p
        style="position:absolute;top:282px;left:687px;white-space:nowrap;font-size:9px"
        class="ft44"
      >
        C
      </p>
      <p
        style="position:absolute;top:287px;left:687px;white-space:nowrap;font-size:9px"
        class="ft44"
      >
        o
      </p>
      <p
        style="position:absolute;top:293px;left:687px;white-space:nowrap;font-size:9px"
        class="ft44"
      >
        d
      </p>
      <p
        style="position:absolute;top:298px;left:688px;white-space:nowrap;font-size:9px"
        class="ft44"
      >
        e
      </p>
      <p
        style="position:absolute;top:308px;left:686px;white-space:nowrap;font-size:9px"
        class="ft41"
      >
        <b>12b</b>
      </p>
      <div style="position:absolute;top:323px;left:694px;">
        <input
          id="EmployersUseCd2"
          v-model="EmployersUseGrp2.EmployersUseCd"
          v-uppercase
          name="ControlNum"
          data-line-number="12a"
          class="no-outline"
          style="width:40px;height:19px"
          type="text"
          @blur="addNewEmployersUse"
        />
      </div>
      <money-input
        v-model="EmployersUseGrp2.EmployersUseAmt"
        name="EmployersUseAmt"
        :div-style="'position:absolute;top:323px;left:735px'"
        :width="128"
        :height="18"
        :line="'12'"
        @change.native="addNewEmployersUse"
      />
      <p
        style="position:absolute;top:318px;left:687px;white-space:nowrap;font-size:9px"
        class="ft44"
      >
        C
      </p>
      <p
        style="position:absolute;top:323px;left:687px;white-space:nowrap;font-size:9px"
        class="ft44"
      >
        o&#160;
      </p>
      <p
        style="position:absolute;top:329px;left:687px;white-space:nowrap;font-size:9px"
        class="ft44"
      >
        d&#160;
      </p>
      <p
        style="position:absolute;top:334px;left:688px;white-space:nowrap;font-size:9px"
        class="ft44"
      >
        e
      </p>
      <p
        style="position:absolute;top:344px;left:686px;white-space:nowrap"
        class="ft41"
      >
        <b>12c</b>
      </p>
      <div style="position:absolute;top:359px;left:694px;">
        <input
          id="EmployersUseCd3"
          v-model="EmployersUseGrp3.EmployersUseCd"
          v-uppercase
          name="ControlNum"
          data-line-number="12a"
          class="no-outline"
          style="width:40px;height:19px"
          type="text"
          @blur="addNewEmployersUse"
        />
      </div>
      <money-input
        v-model="EmployersUseGrp3.EmployersUseAmt"
        name="EmployersUseAmt3"
        :div-style="'position:absolute;top:360px;left:735px'"
        :width="128"
        :height="18"
        :line="'12'"
        @change.native="addNewEmployersUse"
      />
      <p
        style="position:absolute;top:354px;left:687px;white-space:nowrap;font-size:9px"
        class="ft44"
      >
        C
      </p>
      <p
        style="position:absolute;top:359px;left:687px;white-space:nowrap;font-size:9px"
        class="ft44"
      >
        o&#160;
      </p>
      <p
        style="position:absolute;top:365px;left:687px;white-space:nowrap;font-size:9px"
        class="ft44"
      >
        d&#160;
      </p>
      <p
        style="position:absolute;top:370px;left:688px;white-space:nowrap;font-size:9px"
        class="ft44"
      >
        e
      </p>
      <p
        style="position:absolute;top:380px;left:686px;white-space:nowrap"
        class="ft41"
      >
        <b>12d</b>
      </p>
      <div style="position:absolute;top:395px;left:694px;">
        <input
          id="EmployersUseCd4"
          v-model="EmployersUseGrp4.EmployersUseCd"
          v-uppercase
          name="ControlNum"
          data-line-number="12a"
          class="no-outline"
          style="width:40px;height:19px"
          type="text"
          @blur="addNewEmployersUse"
        />
      </div>
      <money-input
        v-model="EmployersUseGrp4.EmployersUseAmt"
        name="EmployersUseAmt4"
        :div-style="'position:absolute;top:395px;left:735px'"
        :width="128"
        :height="18"
        :line="'12'"
        @change.native="addNewEmployersUse"
      />
      <p
        style="position:absolute;top:390px;left:687px;white-space:nowrap;font-size:9px"
        class="ft44"
      >
        C
      </p>
      <p
        style="position:absolute;top:395px;left:687px;white-space:nowrap;font-size:9px"
        class="ft44"
      >
        o&#160;
      </p>
      <p
        style="position:absolute;top:401px;left:687px;white-space:nowrap;font-size:9px"
        class="ft44"
      >
        d&#160;
      </p>
      <p
        style="position:absolute;top:406px;left:688px;white-space:nowrap;font-size:9px"
        class="ft44"
      >
        e
      </p>
      <p
        style="position:absolute;top:308px;left:503px;white-space:nowrap"
        class="ft41"
      >
        <b>13&#160;</b>Statutory&#160;
      </p>
      <label
        style="position:absolute;top:324px;left:525px;"
        class="checkbox-container"
      >
        <input
          id="StatutoryEmployeeInd"
          v-model="Irsw2.StatutoryEmployeeInd"
          name="StatutoryEmployeeInd"
          data-line-number="13"
          class="no-outline checkbox"
          type="checkbox"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:324px;left:579px;"
        class="checkbox-container"
      >
        <input
          id="RetirementPlanInd"
          v-model="Irsw2.RetirementPlanInd"
          name="RetirementPlanInd"
          data-line-number="13"
          class="no-outline checkbox"
          type="checkbox"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:324px;left:633px;"
        class="checkbox-container"
      >
        <input
          id="ThirdPartySickPayInd"
          v-model="Irsw2.ThirdPartySickPayInd"
          name="ThirdPartySickPayInd"
          data-line-number="13"
          class="no-outline checkbox"
          type="checkbox"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:315px;left:523px;white-space:nowrap;font-size:10px"
        class="ft45"
      >
        employee
      </p>
      <p
        style="position:absolute;top:307px;left:577px;white-space:nowrap;font-size:10px"
        class="ft45"
      >
        Retirement&#160;
      </p>
      <p
        style="position:absolute;top:315px;left:577px;white-space:nowrap;font-size:10px"
        class="ft45"
      >
        plan
      </p>
      <p
        style="position:absolute;top:307px;left:631px;white-space:nowrap;font-size:10px"
        class="ft45"
      >
        Third-party&#160;
      </p>
      <p
        style="position:absolute;top:315px;left:631px;white-space:nowrap;font-size:10px"
        class="ft45"
      >
        sick pay
      </p>
      <p
        style="position:absolute;top:344px;left:503px;white-space:nowrap"
        class="ft41"
      >
        <b>14 &#160;</b>Other
      </p>
      <div style="position:absolute;top:359px;left:497px;">
        <input
          id="OtherDeductionsBenefitsGrp"
          v-model="Irsw2.OtherDeductionsBenefitsGrp"
          v-uppercase
          name="OtherDeductionsBenefitsGrp"
          data-line-number="12a"
          class="no-outline"
          style="width:182px;height:19px"
          type="text"
        />
      </div>
      <p
        style="position:absolute;top:434px;left:57px;white-space:nowrap"
        class="ft41"
      >
        <b>15 &#160;</b>State&#160;Employer’s state ID number
      </p>
      <div style="position:absolute;top:448px;left:55px;">
        <select
          v-model="W2StateTaxGrp.StateAbbreviationCd"
          class="no-outline"
          style="text-align:left;border: none;
            background-color: #f1f4ff;
            height: 19px; width:42px"
        >
          <option value=""></option>
          <option v-for="state in stateList" :key="state" :value="state">{{
            state
          }}</option>
        </select>
      </div>
      <div style="position:absolute;top:448px;left:99px;">
        <input
          id="EmployerStateIdNum"
          v-model="W2StateTaxGrp.EmployerStateIdNum"
          v-uppercase
          name="EmployerStateIdNum"
          data-line-number="15"
          class="no-outline"
          maxlength="16"
          style="width:192px;"
          type="text"
        />
      </div>
      <div style="position:absolute;top:485px;left:55px;">
        <select
          v-model="W2StateTaxGrp.StateAbbreviationCd1"
          class="no-outline"
          style="text-align:left;border: none;
            background-color: #f1f4ff;
            height: 19px; width:42px"
        >
          <option value=""></option>
          <option v-for="state in stateList" :key="state" :value="state">{{
            state
          }}</option>
        </select>
      </div>
      <div style="position:absolute;top:485px;left:99px;">
        <input
          id="EmployerStateIdNum1"
          v-model="W2StateTaxGrp.EmployerStateIdNum1"
          v-uppercase
          name="EmployerStateIdNum"
          data-line-number="15"
          class="no-outline"
          maxlength="16"
          style="width:192px;"
          type="text"
        />
      </div>
      <p
        style="position:absolute;top:434px;left:296px;white-space:nowrap;font-size:10.5px"
        class="ft41"
      >
        <b>16 &#160;</b>State wages, tips, etc.&#160;<b>17 &#160;</b>State
        income tax
      </p>
      <money-input
        v-model="W2StateTaxGrp.StateWagesAmt"
        name="StateWagesAmt"
        :div-style="'position:absolute;top:448px;left:293px'"
        :width="128"
        :height="19"
        :line="'16'"
      />
      <money-input
        v-model="W2StateTaxGrp.StateWagesAmt1"
        name="StateWagesAmt"
        :div-style="'position:absolute;top:485px;left:293px'"
        :width="128"
        :height="19"
        :line="'16'"
      />
      <money-input
        v-model="W2StateTaxGrp.StateIncomeTaxAmt"
        name="StateIncomeTaxAmt"
        :div-style="'position:absolute;top:448px;left:422px'"
        :width="118"
        :height="19"
        :line="'17'"
      />
      <money-input
        v-model="W2StateTaxGrp.W2LocalTaxGrp.StateIncomeTaxAmt1"
        name="StateIncomeTaxAmt"
        :div-style="'position:absolute;top:485px;left:422px'"
        :width="118"
        :height="19"
        :line="'17'"
      />
      <money-input
        v-model="W2StateTaxGrp.W2LocalTaxGrp.LocalWagesAndTipsAmt"
        name="LocalWagesAndTipsAmt"
        :div-style="'position:absolute;top:448px;left:541px'"
        :width="128"
        :height="19"
        :line="'18'"
      />
      <money-input
        v-model="W2StateTaxGrp.W2LocalTaxGrp.LocalWagesAndTipsAmt1"
        name="LocalWagesAndTipsAmt"
        :div-style="'position:absolute;top:485px;left:541px'"
        :width="128"
        :height="19"
        :line="'18'"
      />
      <money-input
        v-model="W2StateTaxGrp.W2LocalTaxGrp.LocalIncomeTaxAmt"
        name="LocalIncomeTaxAmt"
        :div-style="'position:absolute;top:448px;left:670px'"
        :width="118"
        :height="19"
        :line="'19'"
      />
      <money-input
        v-model="W2StateTaxGrp.W2LocalTaxGrp.LocalIncomeTaxAmt1"
        name="LocalIncomeTaxAmt"
        :div-style="'position:absolute;top:485px;left:670px'"
        :width="118"
        :height="19"
        :line="'19'"
      />
      <div style="position:absolute;top:448px;left:790px;">
        <input
          id="LocalityNm"
          v-model="W2StateTaxGrp.W2LocalTaxGrp.LocalityNm"
          v-uppercase
          name="LocalityNm"
          data-line-number="20"
          class="no-outline"
          maxlength="16"
          style="width:73px;"
          type="text"
        />
      </div>
      <div style="position:absolute;top:485px;left:790px;">
        <input
          id="LocalityNm1"
          v-model="W2StateTaxGrp.W2LocalTaxGrp.LocalityNm1"
          v-uppercase
          name="LocalityNm"
          data-line-number="20"
          class="no-outline"
          maxlength="16"
          style="width:73px;"
          type="text"
        />
      </div>
      <p
        style="position:absolute;top:434px;left:545px;white-space:nowrap;font-size:10px;"
        class="ft41"
      >
        <b>18 &#160;</b>Local wages, tips, etc.&#160;<b>19 &#160;</b>Local
        income tax
      </p>
      <p
        style="position:absolute;top:434px;left:790px;white-space:nowrap;font-size:9.5px;"
        class="ft41"
      >
        <b>20 </b>Locality name
      </p>
      <p
        style="position:absolute;top:528px;left:54px;white-space:nowrap"
        class="ft41"
      >
        <b>Form</b>
      </p>
      <p
        style="position:absolute;top:504px;left:86px;white-space:nowrap"
        class="ft46"
      >
        <b>W-2&#160;</b>Wage and Tax Statement
      </p>
      <p
        style="position:absolute;top:505px;left:434px;white-space:nowrap"
        class="ft48"
      >
        2020
      </p>
      <p
        style="position:absolute;top:513px;left:608px;white-space:nowrap;font-size:10px;"
        class="ft42"
      >
        Department of the Treasury—Internal Revenue Service
      </p>
    </div>
  </div>
</template>
<script>
import { formService } from '~/services/form-service'
import { IRSW2_UPDATED } from '~/events/event'
import { stateList } from '~/services/states.js'
import MoneyInput from '~/components/Currency/MoneyInput'
import { countryList } from '~/services/countries'
export default {
  name: 'Irsw2',
  components: { MoneyInput },
  data() {
    return {
      Irsw2: {
        EmployerName: {},
        EmployerUSAddress: {},
        EmployerForeignAddress: {},
        EmployeeUSAddress: {},
        EmployeeForeignAddress: {},
        W2StateLocalTaxGrp: [],
        EmployersUseGrp: [],
        AgentForEmployerInd: 'X',
        StandardOrNonStandardCd: 'N',
        W2SecurityInformation: {
          W2DownloadCd: '0',
          W2DownloadResultCd: '0',
          W2DownloadFailedAttemptCnt: '500'
        }
      },
      W2StateTaxGrp: {
        W2LocalTaxGrp: {}
      },
      EmployersUseGrp1: {},
      EmployersUseGrp2: {},
      EmployersUseGrp3: {},
      EmployersUseGrp4: {},
      countries: countryList,
      stateList
    }
  },
  mounted() {},
  methods: {
    updateW2() {
      this.$store.commit('UPDATE_W2_DATA', this.Irsw2)
      formService.$emit(IRSW2_UPDATED, this.Irsw2)
    },
    addNewEmployersUse() {
      this.Irsw2.EmployersUseGrp = []
      if (
        this.EmployersUseGrp1.EmployersUseCd &&
        this.EmployersUseGrp1.EmployersUseAmt
      ) {
        this.Irsw2.EmployersUseGrp.push(this.EmployersUseGrp1)
      }
      if (
        this.EmployersUseGrp2.EmployersUseCd &&
        this.EmployersUseGrp2.EmployersUseAmt
      ) {
        this.Irsw2.EmployersUseGrp.push(this.EmployersUseGrp2)
      }
      if (
        this.EmployersUseGrp3.EmployersUseCd &&
        this.EmployersUseGrp3.EmployersUseAmt
      ) {
        this.Irsw2.EmployersUseGrp.push(this.EmployersUseGrp3)
      }
      if (
        this.EmployersUseGrp4.EmployersUseCd &&
        this.EmployersUseGrp4.EmployersUseAmt
      ) {
        this.Irsw2.EmployersUseGrp.push(this.EmployersUseGrp4)
      }
    }
  }
}
</script>
<style scoped>
@import '@/assets/styles/form.css';
#pdf-pages {
  color: #000000;
}

#page1-div {
  background-image: url('../../static/form-assets/irsw2.png');
}
</style>
