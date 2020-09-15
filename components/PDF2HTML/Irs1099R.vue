<template>
  <!-- ==================== IRS 1099R ====================== -->
  <div
    id="pdf-pages"
    style="font-size: 11px;
    font-family: QuickType, Arial, Helvetica, sans-serif"
  >
    <div id="page1-div" style="position:relative;width:918px;height:620px;">
      <!-- <img
        width="918"
        height="1188"
        src="../../static/form-assets/irs1099r.png"
        alt="background image"
      /> -->
      <p
        style="position:absolute;top:32px;left:76px;white-space:nowrap"
        class="ft30"
      >
        &#160; &#160; &#160;
      </p>
      <p
        style="position:absolute;top:146px;left:608px;white-space:nowrap"
        class="ft31"
      >
        Form &#160;
      </p>
      <p
        style="position:absolute;top:142px;left:638px;white-space:nowrap;font-size:12px"
        class="ft32"
      >
        <b>1099-R</b>
      </p>
      <p
        style="position:absolute;top:88px;left:609px;white-space:nowrap;font-size: 30px"
        class="ft33"
      >
        <b><span class="year">20</span>19</b>
      </p>
      <p
        style="position:absolute;top:52px;left:744px;white-space:nowrap;font-size:11.5px"
        class="ft34"
      >
        <b>Distributions From&#160;</b>
      </p>
      <p
        style="position:absolute;top:68px;left:734px;white-space:nowrap;font-size:11.5px"
        class="ft34"
      >
        <b>Pensions, Annuities,</b>
      </p>
      <p
        style="position:absolute;top:84px;left:775px;white-space:nowrap;font-size:11.5px"
        class="ft34"
      >
        <b>Retirement or&#160;</b>
      </p>
      <p
        style="position:absolute;top:101px;left:731px;white-space:nowrap;font-size:11.5px"
        class="ft34"
      >
        <b>Profit-Sharing Plans,&#160;</b>
      </p>
      <p
        style="position:absolute;top:117px;left:763px;white-space:nowrap;font-size:11.5px"
        class="ft34"
      >
        <b>IRAs, Insurance&#160;</b>
      </p>
      <p
        style="position:absolute;top:133px;left:769px;white-space:nowrap;font-size:11.5px"
        class="ft34"
      >
        <b>Contracts, etc.</b>
      </p>
      <p
        style="position:absolute;top:546px;left:609px;white-space:nowrap"
        class="ft31"
      >
        Department of the Treasury - Internal Revenue Service
      </p>
      <p
        style="position:absolute;top:236px;left:864px;white-space:nowrap"
        class="ft32"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:252px;left:864px;white-space:nowrap"
        class="ft32"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:56px;left:596px;white-space:nowrap"
        class="ft31"
      >
        OMB No. 1545-1736
      </p>
      <p
        style="position:absolute;top:35px;left:302px;white-space:nowrap"
        class="ft30"
      >
        VOID
      </p>
      <p
        style="position:absolute;top:164px;left:753px;white-space:nowrap;font-size:13px; font-weight:bold;text-align:right;"
      >
        Copy 1 <br />For <br />State, City,<br />
        or Local <br />Tax Department
      </p>
      <label
        style="position:absolute;top:36px;left:284px;"
        class="checkbox-container"
      >
        <input
          id="StatutoryEmployeeInd"
          v-model="Irs1099r.void"
          name="StatutoryEmployeeInd"
          data-line-number="13"
          class="no-outline checkbox"
          type="checkbox"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:35px;left:389px;white-space:nowrap"
        class="ft30"
      >
        CORRECTED
      </p>
      <label
        style="position:absolute;top:36px;left:370px;"
        class="checkbox-container"
      >
        <input
          id="StatutoryEmployeeInd"
          v-model="Irs1099r.CorrectedInd"
          name="StatutoryEmployeeInd"
          data-line-number="13"
          class="no-outline checkbox"
          type="checkbox"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:56px;left:82px;white-space:nowrap;font-size:10px"
        class="ft310"
      >
        PAYER’S name, street address, city or town, state or province,&#160;<br />country,
        ZIP or foreign postal code, and phone no.
      </p>
      <div
        class="input-area"
        style="position:absolute;top:77px;left:80px;font-size:10.5px"
      >
        Payer's Name
      </div>
      <div class="input-area" style="position:absolute;top:90px;left:76px">
        <input
          id="EmployerName"
          v-model="Irs1099r.PayerName"
          v-uppercase
          name="EmployerName"
          class="no-outline"
          type="text"
          style="width:200px; height:18px"
        />
      </div>
      <div
        class="input-area"
        style="position:absolute;top:77px;left:282px;font-size:10.5px"
      >
        Payer's Phone Number
      </div>
      <div class="input-area" style="position:absolute;top:90px;left:281px">
        <input
          id="EmployerName"
          v-model="Irs1099r.Phone"
          v-mask="'###-###-####'"
          name="EmployerName"
          class="no-outline"
          type="text"
          style="width:161px; height:18px"
        />
      </div>
      <div
        class="input-area"
        style="position:absolute;top:109px;left:78px;font-size:10.5px"
      >
        Street address ( including apt. no.)
      </div>
      <div class="input-area" style="position:absolute;top:121px;left:76px">
        <input
          id="addressLine1Txt"
          v-model="Irs1099r.PayerUSAddress.addressLine1Txt"
          v-uppercase
          name="addressLine1Txt"
          class="no-outline"
          type="text"
          style="width:365px;height:18px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:139px;left:78px">
        City
      </div>
      <div class="input-area" style="position:absolute;top:152px;left:76px">
        <input
          id="cityNm"
          v-model="Irs1099r.PayerUSAddress.cityNm"
          v-uppercase
          name="cityNm"
          class="no-outline"
          type="text"
          style="width:150px;height:18px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:139px;left:230px">
        State
      </div>
      <div class="input-area" style="position:absolute;top:152px;left:230px">
        <select
          v-model="Irs1099r.PayerUSAddress.stateAbbreviationCd"
          v-uppercase
          name="state"
          title="Select State"
          style="width:100px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
        >
          <option value=" "></option>
          <option v-for="state in stateList" :key="state" :value="state">{{
            state
          }}</option>
        </select>
      </div>
      <div class="input-area" style="position:absolute;top:139px;left:335px">
        ZIP code
      </div>
      <div class="input-area" style="position:absolute;top:152px;left:335px">
        <input
          v-model="Irs1099r.PayerUSAddress.ZIPCd"
          v-mask="'#####'"
          class="no-outline"
          name="ZIPCd"
          type="text"
          title="Employee's ZIP Code"
          data-line-number="f"
          style="text-align:left;width:107px; height:18px"
        />
      </div>
      <div
        class="input-area"
        style="position:absolute;top:169px;left:78px;font-size:10px"
      >
        Payer's foreign country
      </div>
      <div class="input-area" style="position:absolute;top:180px;left:76px">
        <select
          v-model="Irs1099r.PayerForeignAddress.countryCd"
          class="no-outline"
          style="text-align:left;border: none;
            background-color: #f1f4ff;
            height: 18px; width:130px"
        >
          <option value=""></option>
          <option
            v-for="country in countryList"
            :key="country.code"
            :value="country.code"
            >{{ country.name.toUpperCase() }}</option
          >
        </select>
      </div>
      <div
        class="input-area"
        style="position:absolute;top:169px;left:215px;font-size:10px"
      >
        Foreign Province
      </div>
      <div class="input-area" style="position:absolute;top:180px;left:210px">
        <input
          id="provinceOrStateNm"
          v-model="Irs1099r.PayerForeignAddress.provinceOrStateNm"
          v-uppercase
          name="provinceOrStateNm"
          class="no-outline"
          type="text"
          style="width:120px;height:18px"
        />
      </div>
      <div
        class="input-area"
        style="position:absolute;top:169px;left:335px;font-size:10px"
      >
        Foreign Postal Code
      </div>
      <div class="input-area" style="position:absolute;top:180px;left:335px">
        <input
          id="provinceOrStateNm"
          v-model="Irs1099r.PayerForeignAddress.foreignPostalCd"
          v-uppercase
          name="provinceOrStateNm"
          class="no-outline"
          type="text"
          style="width:107px;height:18px"
        />
      </div>
      <p
        style="position:absolute;top:200px;left:82px;white-space:nowrap"
        class="ft36"
      >
        PAYER’S TIN
      </p>
      <div class="input-area" style="position:absolute;top:251px;left:76px">
        <input
          id="PayerEIN"
          v-model="Irs1099r.PayerEIN"
          v-mask="'##-#######'"
          name="PayerEIN"
          class="no-outline"
          type="text"
          style="width:183px; height:19px"
        />
      </div>
      <p
        style="position:absolute;top:200px;left:265px;white-space:nowrap"
        class="ft36"
      >
        RECIPIENT’S TIN
      </p>
      <div class="input-area" style="position:absolute;top:251px;left:260px">
        <input
          id="RecipientEIN"
          v-model="Irs1099r.RecipientEIN"
          v-mask="'###-##-####'"
          name="RecipientEIN"
          class="no-outline"
          type="text"
          style="width:182px; height:19px"
        />
      </div>
      <p
        style="position:absolute;top:272px;left:82px;white-space:nowrap"
        class="ft36"
      >
        RECIPIENT’S name
      </p>
      <div class="input-area" style="position:absolute;top:286px;left:76px">
        <input
          id="RecipientEIN"
          v-model="Irs1099r.RecipientNm"
          name="RecipientEIN"
          class="no-outline"
          type="text"
          style="width:366px; height:19px"
        />
      </div>
      <p
        style="position:absolute;top:310px;left:82px;white-space:nowrap"
        class="ft36"
      >
        Street address (including apt. no.)
      </p>
      <div class="input-area" style="position:absolute;top:323px;left:76px">
        <input
          id="addressLine1Txt"
          v-model="Irs1099r.RecipientUSAddress.addressLine1Txt"
          name="addressLine1Txt"
          class="no-outline"
          type="text"
          style="width:366px; height:19px"
        />
      </div>

      <div class="input-area" style="position:absolute;top:342px;left:78px">
        City
      </div>
      <div class="input-area" style="position:absolute;top:356px;left:76px">
        <input
          id="cityNm"
          v-model="Irs1099r.RecipientUSAddress.cityNm"
          v-uppercase
          name="cityNm"
          class="no-outline"
          type="text"
          style="width:150px;height:18px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:342px;left:230px">
        State
      </div>
      <div class="input-area" style="position:absolute;top:356px;left:230px">
        <select
          v-model="Irs1099r.RecipientUSAddress.stateAbbreviationCd"
          v-uppercase
          name="state"
          title="Select State"
          style="width:100px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
        >
          <option value=" "></option>
          <option v-for="state in stateList" :key="state" :value="state">{{
            state
          }}</option>
        </select>
      </div>
      <div class="input-area" style="position:absolute;top:342px;left:335px">
        ZIP code
      </div>
      <div class="input-area" style="position:absolute;top:356px;left:335px">
        <input
          v-model="Irs1099r.RecipientUSAddress.ZIPCd"
          v-mask="'#####'"
          class="no-outline"
          name="ZIPCd"
          type="text"
          title="Employee's ZIP Code"
          data-line-number="f"
          style="text-align:left;width:107px; height:18px"
        />
      </div>
      <div
        class="input-area"
        style="position:absolute;top:380px;left:78px;font-size:10px"
      >
        Recipient's foreign country
      </div>
      <div class="input-area" style="position:absolute;top:395px;left:76px">
        <select
          v-model="Irs1099r.RecipientUSAddress.countryCd"
          class="no-outline"
          style="text-align:left;border: none;
            background-color: #f1f4ff;
            height: 18px; width:130px"
        >
          <option value=""></option>
          <option
            v-for="country in countryList"
            :key="country.code"
            :value="country.code"
            >{{ country.name.toUpperCase() }}</option
          >
        </select>
      </div>
      <div
        class="input-area"
        style="position:absolute;top:380px;left:215px;font-size:10px"
      >
        Foreign Province
      </div>
      <div class="input-area" style="position:absolute;top:395px;left:210px">
        <input
          id="provinceOrStateNm"
          v-model="Irs1099r.RecipientUSAddress.provinceOrStateNm"
          v-uppercase
          name="provinceOrStateNm"
          class="no-outline"
          type="text"
          style="width:120px;height:18px"
        />
      </div>
      <div
        class="input-area"
        style="position:absolute;top:380px;left:335px;font-size:10px"
      >
        Foreign Postal Code
      </div>
      <div class="input-area" style="position:absolute;top:395px;left:335px">
        <input
          id="provinceOrStateNm"
          v-model="Irs1099r.RecipientUSAddress.foreignPostalCd"
          v-uppercase
          name="provinceOrStateNm"
          class="no-outline"
          type="text"
          style="width:107px;height:18px"
        />
      </div>

      <!-- <p
        style="position:absolute;top:398px;left:82px;white-space:nowrap"
        class="ft36"
      >
        City or town, state or province, country, and ZIP or foreign postal code
      </p> -->
      <p
        style="position:absolute;top:433px;left:82px;white-space:nowrap"
        class="ft37"
      >
        <b>10 &#160;</b>Amount allocable to IRR&#160;
      </p>
      <money-input
        v-model="Irs1099r.IRRAllocatedAmt"
        name="IRRAllocatedAmt"
        :div-style="'position:absolute;top:465px;left:83px'"
        :width="165"
        :height="19"
        :line="'10'"
      />
      <p
        style="position:absolute;top:448px;left:102px;white-space:nowrap"
        class="ft38"
      >
        within 5 years
      </p>
      <p
        style="position:absolute;top:467px;left:77px;white-space:nowrap;font-size:12.5px"
        class="ft30"
      >
        $
      </p>
      <p
        style="position:absolute;top:434px;left:252px;white-space:nowrap"
        class="ft37"
      >
        <b>11</b>&#160;&#160;1st year of desig.&#160;
      </p>
      <div class="input-area" style="position:absolute;top:465px;left:249px">
        <input
          id="DesignatedROTHAcctFirstYr"
          v-model="Irs1099r.DesignatedROTHAcctFirstYr"
          v-mask="'####'"
          name="DesignatedROTHAcctFirstYr"
          class="no-outline"
          data-line-number="11"
          type="text"
          style="width:107px;height:19px"
        />
      </div>
      <p
        style="position:absolute;top:448px;left:272px;white-space:nowrap"
        class="ft36"
      >
        Roth contrib.
      </p>
      <p
        style="position:absolute;top:434px;left:360px;white-space:nowrap"
        class="ft37"
      >
        <b>12 &#160;</b>FATCA filing&#160;
      </p>
      <label
        style="position:absolute;top:464px;left:395px;"
        class="checkbox-container"
      >
        <input
          id="FATCAFilingRequirementInd"
          v-model="Irs1099r.FATCAFilingRequirementInd"
          name="FATCAFilingRequirementInd"
          data-line-number="13"
          class="no-outline checkbox"
          type="checkbox"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:448px;left:380px;white-space:nowrap"
        class="ft31"
      >
        requirement
      </p>
      <p
        style="position:absolute;top:488px;left:82px;white-space:nowrap"
        class="ft36"
      >
        Account number (see instructions)
      </p>
      <div class="input-area" style="position:absolute;top:520px;left:76px">
        <input
          id="PayerRecipientAccountNum"
          v-model="Irs1099r.PayerRecipientAccountNum"
          name="PayerRecipientAccountNum"
          class="no-outline"
          type="text"
          style="width:280px;height:19px"
        />
      </div>
      <p
        style="position:absolute;top:487px;left:362px;white-space:nowrap"
        class="ft310"
      >
        <b>13 &#160;</b>Date of&#160;<br />payment&#160;
      </p>
      <div class="input-area" style="position:absolute;top:520px;left:357px">
        <input
          id="PaymentDt"
          v-model="Irs1099r.PaymentDt"
          name="PaymentDt"
          class="no-outline"
          data-line-number="13"
          type="date"
          style="width:84px;height:19px"
        />
      </div>
      <p
        style="position:absolute;top:55px;left:453px;white-space:nowrap"
        class="ft37"
      >
        <b>1 &#160;</b>Gross distribution
      </p>
      <p
        style="position:absolute;top:89px;left:444px;white-space:nowrap;font-size:12.5px"
        class="ft30"
      >
        $
      </p>
      <money-input
        v-model="Irs1099r.GrossDistributionAmt"
        name="GrossDistributionAmt"
        :div-style="'position:absolute;top:88px;left:453px'"
        :width="140"
        :height="19"
        :line="'1'"
      />
      <p
        style="position:absolute;top:109px;left:447px;white-space:nowrap"
        class="ft37"
      >
        <b>2a &#160;</b>Taxable amount
      </p>
      <money-input
        v-model="Irs1099r.TaxableAmt"
        name="TaxableAmt"
        :div-style="'position:absolute;top:142px;left:453px'"
        :width="140"
        :height="19"
        :line="'2a'"
      />
      <p
        style="position:absolute;top:143px;left:444px;white-space:nowrap;font-size:12.5px"
        class="ft30"
      >
        $
      </p>
      <p
        style="position:absolute;top:163px;left:447px;white-space:nowrap"
        class="ft37"
      >
        <b>2b &#160;</b>Taxable amount<b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:178px;left:467px;white-space:nowrap"
        class="ft36"
      >
        not determined
      </p>
      <label
        style="position:absolute;top:176px;left:564px;"
        class="checkbox-container"
      >
        <input
          id="TxblAmountNotDeterminedInd"
          v-model="Irs1099r.TxblAmountNotDeterminedInd"
          name="TxblAmountNotDeterminedInd"
          class="no-outline checkbox"
          type="checkbox"
          data-line-number="2b"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:164px;left:619px;white-space:nowrap"
        class="ft310"
      >
        Total&#160;<br />distribution
      </p>
      <label
        style="position:absolute;top:176px;left:693px;"
        class="checkbox-container"
      >
        <input
          id="TotalDistributionInd"
          v-model="Irs1099r.TotalDistributionInd"
          name="TotalDistributionInd"
          class="no-outline checkbox"
          type="checkbox"
          data-line-number="2b"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:199px;left:453px;white-space:nowrap"
        class="ft37"
      >
        <b>3 &#160;</b>Capital gain (included<b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:214px;left:467px;white-space:nowrap"
        class="ft36"
      >
        in box 2a)
      </p>
      <money-input
        v-model="Irs1099r.CapitalGainAmt"
        name="CapitalGainAmt"
        :div-style="'position:absolute;top:250px;left:453px'"
        :width="140"
        :height="19"
        :line="'3'"
      />
      <p
        style="position:absolute;top:251px;left:444px;white-space:nowrap;font-size:12.5px"
        class="ft30"
      >
        $
      </p>
      <p
        style="position:absolute;top:199px;left:605px;white-space:nowrap"
        class="ft37"
      >
        <b>4 &#160;</b>Federal income tax&#160;
      </p>
      <p
        style="position:absolute;top:214px;left:618px;white-space:nowrap"
        class="ft38"
      >
        withheld
      </p>
      <money-input
        v-model="Irs1099r.FederalIncomeTaxWithheldAmt"
        name="FederalIncomeTaxWithheldAmt"
        :div-style="'position:absolute;top:250px;left:604px'"
        :width="141"
        :height="19"
        :line="'4'"
        @change.native="update1099R"
      />
      <p
        style="position:absolute;top:251px;left:595px;white-space:nowrap;font-size:12.5px"
        class="ft30"
      >
        $
      </p>
      <p
        style="position:absolute;top:271px;left:453px;white-space:nowrap"
        class="ft37"
      >
        <b>5 &#160;</b>Employee contributions/<b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:284px;left:467px;white-space:nowrap"
        class="ft36"
      >
        Designated Roth
      </p>
      <p
        style="position:absolute;top:284px;left:552px;white-space:nowrap"
        class="ft37"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:296px;left:467px;white-space:nowrap"
        class="ft36"
      >
        contributions or&#160;
      </p>
      <p
        style="position:absolute;top:309px;left:467px;white-space:nowrap"
        class="ft36"
      >
        insurance premiums
      </p>
      <money-input
        v-model="Irs1099r.EmployeeContributionsAmt"
        name="EmployeeContributionsAmt"
        :div-style="'position:absolute;top:323px;left:453px'"
        :width="140"
        :height="19"
        :line="'5'"
      />
      <p
        style="position:absolute;top:323px;left:444px;white-space:nowrap;font-size:12.5px"
        class="ft30"
      >
        $
      </p>
      <p
        style="position:absolute;top:271px;left:605px;white-space:nowrap"
        class="ft37"
      >
        <b>6 &#160;</b>Net unrealized<b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:284px;left:618px;white-space:nowrap"
        class="ft36"
      >
        appreciation in
      </p>
      <p
        style="position:absolute;top:284px;left:697px;white-space:nowrap"
        class="ft37"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:296px;left:618px;white-space:nowrap"
        class="ft36"
      >
        employer’s securities
      </p>
      <money-input
        v-model="Irs1099r.NetUnrlzdSecuritiesApprcnAmt"
        name="NetUnrlzdSecuritiesApprcnAmt"
        :div-style="'position:absolute;top:323px;left:604px'"
        :width="141"
        :height="19"
        :line="'6'"
      />
      <p
        style="position:absolute;top:323px;left:595px;white-space:nowrap;font-size:12.5px"
        class="ft30"
      >
        $
      </p>
      <p
        style="position:absolute;top:343px;left:453px;white-space:nowrap"
        class="ft37"
      >
        <b>7 &#160;</b>Distribution&#160;
      </p>
      <p
        style="position:absolute;top:358px;left:467px;white-space:nowrap"
        class="ft36"
      >
        code(s)
      </p>
      <div class="input-area" style="position:absolute;top:376px;left:443px">
        <input
          id="F1099RDistributionCd"
          v-model="Irs1099r.F1099RDistributionCd"
          v-uppercase
          name="F1099RDistributionCd"
          class="no-outline"
          data-line-number="7"
          maxlength="2"
          type="text"
          style="width:107px;height:19px"
        />
      </div>
      <p
        style="position:absolute;top:342px;left:558px;white-space:nowrap;font-size:9px"
        class="ft38"
      >
        IRA/
      </p>
      <p
        style="position:absolute;top:353px;left:558px;white-space:nowrap;font-size:9px"
        class="ft38"
      >
        SEP/
      </p>
      <p
        style="position:absolute;top:365px;left:558px;white-space:nowrap;font-size:9px"
        class="ft38"
      >
        SIMPLE
      </p>
      <label
        style="position:absolute;top:378px;left:568px;"
        class="checkbox-container"
      >
        <input
          id="IRASEPSIMPLEInd"
          v-model="Irs1099r.IRASEPSIMPLEInd"
          name="IRASEPSIMPLEInd"
          class="no-outline checkbox"
          type="checkbox"
          data-line-number="2b"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:343px;left:598px;white-space:nowrap"
        class="ft37"
      >
        <b>8 &#160;</b>Other
      </p>
      <p
        style="position:absolute;top:377px;left:596px;white-space:nowrap;font-size:12.5px"
        class="ft30"
      >
        $
      </p>
      <money-input
        v-model="Irs1099r.OtherDistributionAmt"
        name="OtherDistributionAmt"
        :div-style="'position:absolute;top:376px;left:604px'"
        :width="75"
        :height="19"
        :line="'8'"
      />
      <p
        style="position:absolute;top:381px;left:730px;white-space:nowrap"
        class="ft36"
      >
        %
      </p>
      <div style="position:absolute;top:376px;left:682px;">
        <input
          id="RcpntOthDistributionPct"
          v-model="Irs1099r.RcpntOthDistributionPct"
          v-mask="'###'"
          name="RcpntOthDistributionPct"
          class="no-outline"
          type="text"
          data-line-number="8"
          style="width:45px;height:19px"
        />
      </div>
      <p
        style="position:absolute;top:397px;left:447px;white-space:nowrap"
        class="ft37"
      >
        <b>9a &#160;</b>Your percentage of total<b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:412px;left:467px;white-space:nowrap"
        class="ft36"
      >
        distribution
      </p>
      <p
        style="position:absolute;top:417px;left:579px;white-space:nowrap;font-size:12.5px"
        class="ft36"
      >
        %
      </p>
      <div style="position:absolute;top:412px;left:524px;">
        <input
          id="RcpntTotalDistributionPct"
          v-model="Irs1099r.RcpntTotalDistributionPct"
          v-mask="'###'"
          name="RcpntTotalDistributionPct"
          class="no-outline"
          type="text"
          data-line-number="9a"
          style="width:54px;height:19px"
        />
      </div>
      <p
        style="position:absolute;top:397px;left:598px;white-space:nowrap;font-size:10px;"
        class="ft37"
      >
        <b>9b </b>Total employee contributions
      </p>
      <p
        style="position:absolute;top:413px;left:595px;white-space:nowrap;font-size:12.5px"
        class="ft30"
      >
        $
      </p>
      <money-input
        v-model="Irs1099r.TotalEmployeeContributionsAmt"
        name="TotalEmployeeContributionsAmt"
        :div-style="'position:absolute;top:412px;left:604px'"
        :width="141"
        :height="19"
        :line="'9b'"
      />
      <p
        style="position:absolute;top:433px;left:447px;white-space:nowrap"
        class="ft37"
      >
        <b>14 &#160;</b>State tax withheld
      </p>
      <p
        style="position:absolute;top:449px;left:444px;white-space:nowrap;font-size:12.5px"
        class="ft311"
      >
        $
      </p>
      <money-input
        v-model="Irs1099r.StateDistributionAmt"
        name="StateDistributionAmt"
        :div-style="'position:absolute;top:448px;left:452px'"
        :width="141"
        :height="18"
        :line="'14'"
      />
      <p
        style="position:absolute;top:470px;left:444px;white-space:nowrap;font-size:12.5px"
        class="ft311"
      >
        $
      </p>
      <money-input
        v-model="Irs1099r.StateDistributionAmt"
        name="StateDistributionAmt"
        :div-style="'position:absolute;top:469px;left:452px'"
        :width="141"
        :height="17"
        :line="'14'"
      />
      <p
        style="position:absolute;top:433px;left:598px;white-space:nowrap"
        class="ft37"
      >
        <b>15 &#160;</b>State/Payer’s state no.&#160;<b>16 &#160;</b>State
        distribution
      </p>
      <div class="input-area" style="position:absolute;top:449px;left:595px">
        <select
          v-model="Irs1099r.stateAbbreviationCd"
          v-uppercase
          name="state"
          title="Select State"
          style="width:45px;height:19px;border:none;background-color: #f1f4ff;"
          class="no-outline"
        >
          <option value=" "></option>
          <option v-for="state in stateList" :key="state" :value="state">{{
            state
          }}</option>
        </select>
      </div>
      <div style="position:absolute;top:449px;left:644px;">
        <input
          id="RcpntTotalDistributionPct"
          v-model="Irs1099r.payerStateIdNum"
          v-mask="'###'"
          name="RcpntTotalDistributionPct"
          class="no-outline"
          type="text"
          data-line-number="15"
          style="width:101px;height:18px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:469px;left:595px">
        <select
          v-model="Irs1099r.stateAbbreviationCd2"
          v-uppercase
          name="state"
          title="Select State"
          style="width:45px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
        >
          <option value=" "></option>
          <option v-for="state in stateList" :key="state" :value="state">{{
            state
          }}</option>
        </select>
      </div>
      <div style="position:absolute;top:469px;left:644px;">
        <input
          id="RcpntTotalDistributionPct"
          v-model="Irs1099r.payerStateIdNum2"
          v-mask="'###'"
          name="RcpntTotalDistributionPct"
          class="no-outline"
          type="text"
          data-line-number="15"
          style="width:101px;height:18px"
        />
      </div>
      <p
        style="position:absolute;top:449px;left:746px;white-space:nowrap;font-size:12.5px"
        class="ft311"
      >
        $
      </p>
      <money-input
        v-model="Irs1099r.LocalTaxWithheldAmt"
        name="LocalTaxWithheldAmt"
        :div-style="'position:absolute;top:448px;left:753px'"
        :width="112"
        :height="18"
        :line="'16'"
      />
      <p
        style="position:absolute;top:470px;left:746px;white-space:nowrap;font-size:12.5px"
        class="ft311"
      >
        $
      </p>
      <money-input
        v-model="Irs1099r.StateDistributionAmt"
        name="StateDistributionAmt"
        :div-style="'position:absolute;top:469px;left:753px'"
        :width="112"
        :height="17"
        :line="'16'"
      />
      <p
        style="position:absolute;top:487px;left:447px;white-space:nowrap"
        class="ft37"
      >
        <b>17 &#160;</b>Local tax withheld
      </p>
      <p
        style="position:absolute;top:503px;left:444px;white-space:nowrap;font-size:12.5px"
        class="ft311"
      >
        $
      </p>
      <money-input
        v-model="Irs1099r.localTaxWithheldAmt"
        name="localTaxWithheldAmt"
        :div-style="'position:absolute;top:503px;left:452px'"
        :width="141"
        :height="17"
        :line="'17'"
      />
      <p
        style="position:absolute;top:523px;left:444px;white-space:nowrap;font-size:12.5px"
        class="ft311"
      >
        $
      </p>
      <money-input
        v-model="Irs1099r.localTaxWithheldAmt2"
        name="localTaxWithheldAmt2"
        :div-style="'position:absolute;top:523px;left:452px'"
        :width="141"
        :height="16"
        :line="'17'"
      />
      <p
        style="position:absolute;top:487px;left:598px;white-space:nowrap"
        class="ft37"
      >
        <b>18 &#160;</b>Name of locality
      </p>
      <div style="position:absolute;top:503px;left:595px;">
        <input
          id="RcpntTotalDistributionPct"
          v-model="Irs1099r.localityNm"
          v-uppercase
          name="RcpntTotalDistributionPct"
          class="no-outline"
          type="text"
          data-line-number="18"
          style="width:150px;height:18px"
        />
      </div>
      <div style="position:absolute;top:523px;left:595px;">
        <input
          id="RcpntTotalDistributionPct"
          v-model="Irs1099r.localityNm2"
          v-uppercase
          name="RcpntTotalDistributionPct"
          class="no-outline"
          type="text"
          data-line-number="18"
          style="width:150px;height:17px"
        />
      </div>
      <p
        style="position:absolute;top:487px;left:749px;white-space:nowrap"
        class="ft37"
      >
        <b>19 &#160;</b>Local distribution
      </p>
      <p
        style="position:absolute;top:503px;left:746px;white-space:nowrap;font-size:12.5px"
        class="ft311"
      >
        $
      </p>
      <money-input
        v-model="Irs1099r.localDistributionAmt"
        name="localDistributionAmt"
        :div-style="'position:absolute;top:503px;left:753px'"
        :width="112"
        :height="17"
        :line="'19'"
      />
      <p
        style="position:absolute;top:523px;left:746px;white-space:nowrap;font-size:12.5px"
        class="ft311"
      >
        $
      </p>
      <money-input
        v-model="Irs1099r.localDistributionAmt2"
        name="localDistributionAmt2"
        :div-style="'position:absolute;top:523px;left:753px'"
        :width="112"
        :height="16"
        :line="'19'"
      />
      <p
        style="position:absolute;top:545px;left:76px;white-space:nowrap"
        class="ft31"
      >
        Form &#160;
      </p>
      <p
        style="position:absolute;top:541px;left:106px;white-space:nowrap"
        class="ft32"
      >
        <b>1099-R</b>
      </p>
      <p
        style="position:absolute;top:546px;left:325px;white-space:nowrap"
        class="ft31"
      >
        www.irs.gov/Form1099R
      </p>
    </div>
  </div>
</template>
<script>
import { formService } from '~/services/form-service'
import { IRS1099R_UPDATED } from '~/events/event'
import { countryList } from '~/services/countries'
import { stateList } from '~/services/states.js'
import MoneyInput from '~/components/Currency/MoneyInput'
export default {
  name: 'Irs1099r',
  components: { MoneyInput },
  data() {
    return {
      stateList,
      countryList,
      Irs1099r: {
        PayerUSAddress: {},
        PayerForeignAddress: {},
        RecipientUSAddress: {}
      }
    }
  },
  methods: {
    update1099R() {
      formService.$emit(IRS1099R_UPDATED, this.Irs1099r)
    }
  }
}
</script>
<style scoped>
@import '@/assets/styles/form.css';
#page1-div {
  background-image: url('../../static/form-assets/irs1099r.png');
}
.year {
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
</style>
