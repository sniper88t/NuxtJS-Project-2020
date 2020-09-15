<!--========================= IRS Form 8962 ==========================-->
<template>
  <div
    id="pdf-pages"
    style="font-size: 11px;
    font-family: QuickType, Arial, Helvetica, sans-serif"
  >
    <div id="page1-div" style="position:relative;width:918px;height:1188px;">
      <!-- <img
        width="918"
        height="1188"
        src="../../static/form-assets/irs8962001.png"
        alt="background image"
      /> -->
      <p
        style="position:absolute;top:71px;left:54px;white-space:nowrap"
        class="ft10"
      >
        Form &#160;
      </p>
      <p
        style="position:absolute;top:52px;left:84px;white-space:nowrap"
        class="ft11"
      >
        <b>8962</b>
      </p>
      <p
        style="position:absolute;top:102px;left:54px;white-space:nowrap;font-size:10px;"
        class="ft10"
      >
        Department of the Treasury&#160;
      </p>
      <p
        style="position:absolute;top:112px;left:54px;white-space:nowrap;font-size:10px;"
        class="ft10"
      >
        Internal Revenue Service
      </p>
      <p
        style="position:absolute;top:60px;left:336px;white-space:nowrap"
        class="ft12"
      >
        Premium Tax Credit (PTC)
      </p>
      <p
        style="position:absolute;top:95px;left:331px;white-space:nowrap"
        class="ft13"
      >
        ▶&#160;
      </p>
      <p
        style="position:absolute;top:93px;left:342px;white-space:nowrap"
        class="ft14"
      >
        <b>Attach to Form 1040, 1040-SR, or 1040-NR.</b>
      </p>
      <p
        style="position:absolute;top:111px;left:248px;white-space:nowrap"
        class="ft13"
      >
        ▶&#160;
      </p>
      <p
        style="position:absolute;top:108px;left:260px;white-space:nowrap"
        class="ft14"
      >
        <b>Go to&#160;<i>www.irs.gov/Form8962</i></b
        ><b>&#160;for instructions and the latest information.</b>
      </p>
      <p
        style="position:absolute;top:55px;left:750px;white-space:nowrap"
        class="ft10"
      >
        OMB No. 1545-1736
      </p>
      <p
        style="position:absolute;top:70px;left:760px;white-space:nowrap"
        class="ft16"
      >
        <strong><span class="year">20</span>19</strong>
      </p>
      <p
        style="position:absolute;top:98px;left:757px;white-space:nowrap"
        class="ft10"
      >
        Attachment&#160;
      </p>
      <p
        style="position:absolute;top:110px;left:757px;white-space:nowrap"
        class="ft10"
      >
        Sequence No.&#160;
      </p>
      <p
        style="position:absolute;top:107px;left:828px;white-space:nowrap;font-size:14px"
        class="ft17"
      >
        <b>73&#160;</b>
      </p>
      <p
        style="position:absolute;top:126px;left:54px;white-space:nowrap"
        class="ft10"
      >
        Name shown on your return
      </p>
      <div class="input-area" style="position:absolute;top:142px;left:54px">
        <input
          id="name"
          v-model="Irs8962.name"
          name="name"
          class="no-outline"
          type="text"
          style="width:517px;"
          readonly
        />
      </div>
      <p
        style="position:absolute;top:126px;left:578px;white-space:nowrap"
        class="ft10"
      >
        Your social security number
      </p>
      <div class="input-area" style="position:absolute;top:142px;left:574px">
        <input
          id="ssn"
          v-model="Irs8962.ssn"
          v-mask="'###-##-####'"
          name="ssn"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          class="no-outline"
          type="password"
          style="width:291px;"
          readonly
        />
      </div>
      <p
        style="position:absolute;top:176px;left:60px;white-space:nowrap;font-size:10px;"
        class="ft10"
      >
        You cannot take the PTC if your filing status is married filing
        separately unless you qualify for an exception (see instructions). If
        you qualify, check the box&#160;&#160;.
      </p>
      <label
        style="position:absolute;top:171px;left:839px;"
        class="checkbox-container"
      >
        <input
          id="MarriedFilingSeparatelyExcInd"
          v-model="Irs8962.MarriedFilingSeparatelyExcInd"
          name="MarriedFilingSeparatelyExcInd"
          class="no-outline checkbox"
          type="checkbox"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:176px;left:810px;white-space:nowrap"
        class="ft10"
      >
        .
      </p>
      <p
        style="position:absolute;top:178px;left:828px;white-space:nowrap"
        class="ft18"
      >
        ▶
      </p>
      <p
        style="position:absolute;top:176px;left:835px;white-space:nowrap"
        class="ft10"
      >
        &#160;
      </p>
      <p
        style="position:absolute;top:199px;left:62px;white-space:nowrap"
        class="ft19"
      >
        <b>Part I</b>
      </p>
      <p
        style="position:absolute;top:199px;left:129px;white-space:nowrap"
        class="ft17"
      >
        <b>Annual and Monthly Contribution Amount&#160;</b>
      </p>
      <p
        style="position:absolute;top:219px;left:69px;white-space:nowrap"
        class="ft14"
      >
        <b>1</b>
      </p>
      <!-- Part I: Annual and Monthly Contribution Amount -->
      <p
        style="position:absolute;top:219px;left:97px;white-space:nowrap"
        class="ft110"
      >
        Tax family size. Enter your tax family size (see instructions)&#160;.
      </p>
      <p
        style="position:absolute;top:219px;left:432px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:219px;left:450px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:219px;left:468px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:219px;left:486px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:219px;left:504px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:219px;left:522px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:219px;left:540px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:219px;left:558px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:219px;left:576px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:219px;left:594px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:219px;left:612px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:219px;left:630px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:219px;left:648px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:219px;left:666px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:219px;left:684px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:219px;left:702px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:219px;left:736px;white-space:nowrap"
        class="ft14"
      >
        <b>1</b>
      </p>
      <!--Family size -->
      <div class="input-area" style="position:absolute;top:217px;left:757px">
        <input
          id="TotalExemptionsCnt"
          v-model="Irs8962.TotalExemptionsCnt"
          maxlength="2"
          name="TotalExemptionsCnt"
          data-line-number="1"
          class="no-outline"
          type="text"
          style="width:108px; height:17px"
          @blur="onInputChange"
        />
      </div>
      <p
        style="position:absolute;top:237px;left:69px;white-space:nowrap"
        class="ft14"
      >
        <b>2a</b>
      </p>
      <p
        style="position:absolute;top:237px;left:97px;white-space:nowrap"
        class="ft110"
      >
        Modified AGI. Enter your modified AGI (see instructions)
      </p>
      <p
        style="position:absolute;top:237px;left:414px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:237px;left:432px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:237px;left:450px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:237px;left:468px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:237px;left:486px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:237px;left:504px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:237px;left:522px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:237px;left:540px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:237px;left:558px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:237px;left:593px;white-space:nowrap"
        class="ft14"
      >
        <b>2a</b>
      </p>
      <!--Modified AGI -->
      <money-input
        id="ModifiedAGIAmt"
        v-model="Irs8962.ModifiedAGIAmt"
        name="ModifiedAGIAmt"
        :line="'2a'"
        :width="107"
        :div-style="'position:absolute;top:235px;left:616px'"
        :readonly="true"
        @change.native="onInputChange"
      />
      <p
        style="position:absolute;top:255px;left:76px;white-space:nowrap"
        class="ft14"
      >
        <b>b&#160;</b>Enter the total of your dependents’ modified AGI (see
        instructions)
      </p>
      <p
        style="position:absolute;top:255px;left:468px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:255px;left:486px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:255px;left:504px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:255px;left:522px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:255px;left:540px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:255px;left:558px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:255px;left:592px;white-space:nowrap"
        class="ft14"
      >
        <b>2b</b>
      </p>
      <money-input
        v-model="Irs8962.TotalDependentsModifiedAGIAmt"
        name="TotalDependentsModifiedAGIAmt"
        :line="'2b'"
        :width="107"
        :div-style="'position:absolute;top:253px;left:616px'"
        @change.native="onInputChange"
      />
      <p
        style="position:absolute;top:273px;left:69px;white-space:nowrap"
        class="ft14"
      >
        <b>3&#160;</b>
      </p>
      <p
        style="position:absolute;top:273px;left:97px;white-space:nowrap"
        class="ft110"
      >
        Household income. Add the amounts on lines 2a and 2b (see
        instructions)&#160;&#160;.
      </p>
      <p
        style="position:absolute;top:273px;left:522px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:273px;left:540px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:273px;left:558px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:273px;left:576px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:273px;left:594px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:273px;left:612px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:273px;left:630px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:273px;left:648px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:273px;left:666px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:273px;left:684px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:273px;left:702px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:273px;left:736px;white-space:nowrap"
        class="ft14"
      >
        <b>3</b>
      </p>
      <div class="input-area" style="position:absolute;top:271px;left:757px">
        <money
          id="HouseholdIncomeAmt"
          v-model="Irs8962.HouseholdIncomeAmt"
          name="HouseholdIncomeAmt"
          data-line-number="3"
          class="no-outline"
          type="text"
          style="width:108px; height:17px"
          readonly
          @change.native="onInputChange"
        />
      </div>
      <p
        style="position:absolute;top:294px;left:69px;white-space:nowrap"
        class="ft14"
      >
        <b>4&#160;</b>
      </p>
      <p
        style="position:absolute;top:309px;left:76px;white-space:nowrap"
        class="ft14"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:294px;left:97px;white-space:nowrap"
        class="ft112"
      >
        Federal&#160;poverty&#160;line.&#160;Enter&#160;the&#160;federal&#160;poverty&#160;line&#160;amount&#160;from&#160;Table&#160;1-1,&#160;1-2,&#160;or&#160;1-3&#160;(see&#160;instructions).&#160;Check&#160;the&#160;<br />appropriate
        box for the federal poverty table used.
      </p>
      <p
        style="position:absolute;top:309px;left:380px;white-space:nowrap"
        class="ft14"
      >
        <b>a&#160;</b>
      </p>
      <!--Federal Poverty Table Locations Code -->
      <label
        style="position:absolute;top:307px;left:393px;"
        class="checkbox-container"
      >
        <input
          id="FederalPovertyTableLocCd-A"
          v-model="Irs8962.FederalPovertyTableLocCd"
          name="FederalPovertyTableLocCd"
          data-line-number="4a-4c"
          class="no-outline checkbox"
          type="radio"
          value="A"
          @change="onInputChange"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:309px;left:410px;white-space:nowrap"
        class="ft110"
      >
        Alaska&#160;
      </p>
      <p
        style="position:absolute;top:309px;left:466px;white-space:nowrap"
        class="ft14"
      >
        <b>b</b>
      </p>
      <!--Federal Poverty Table Locations Code -->
      <label
        style="position:absolute;top:307px;left:479px;"
        class="checkbox-container"
      >
        <input
          id="FederalPovertyTableLocCd-B"
          v-model="Irs8962.FederalPovertyTableLocCd"
          name="FederalPovertyTableLocCd"
          data-line-number="4a-4c"
          class="no-outline checkbox"
          type="radio"
          value="B"
          @change="onInputChange"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:309px;left:497px;white-space:nowrap"
        class="ft110"
      >
        Hawaii
      </p>
      <p
        style="position:absolute;top:309px;left:553px;white-space:nowrap"
        class="ft14"
      >
        <b>c</b>
      </p>
      <!--Federal Poverty Table Locations Code -->
      <label
        style="position:absolute;top:307px;left:567px;"
        class="checkbox-container"
      >
        <input
          id="FederalPovertyTableLocCd-C"
          v-model="Irs8962.FederalPovertyTableLocCd"
          name="FederalPovertyTableLocCd"
          data-line-number="4a-4c"
          class="no-outline checkbox"
          type="radio"
          value="C"
          @change="onInputChange"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:309px;left:583px;white-space:nowrap"
        class="ft110"
      >
        Other 48 states and DC
      </p>
      <p
        style="position:absolute;top:309px;left:736px;white-space:nowrap"
        class="ft14"
      >
        <b>4</b>
      </p>
      <!--Federal Poverty Level -->
      <money-input
        v-model="Irs8962.PovertyLevelAmt"
        name="PovertyLevelAmt"
        :line="4"
        :div-style="'position:absolute;top:307px;left:757px'"
        @change.native="onInputChange"
      />
      <p
        style="position:absolute;top:327px;left:69px;white-space:nowrap"
        class="ft14"
      >
        <b>5&#160;</b>
      </p>
      <p
        style="position:absolute;top:327px;left:97px;white-space:nowrap"
        class="ft110"
      >
        Household income as a percentage of federal poverty line (see
        instructions)&#160;
      </p>
      <p
        style="position:absolute;top:327px;left:504px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:327px;left:522px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:327px;left:540px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:327px;left:558px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:327px;left:576px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:327px;left:594px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:327px;left:612px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:327px;left:630px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:327px;left:648px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:327px;left:666px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:327px;left:684px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:327px;left:702px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:327px;left:736px;white-space:nowrap"
        class="ft14"
      >
        <b>5</b>
      </p>
      <!--Household Income as a Percentage of Federal Poverty Level -->
      <div class="input-area" style="position:absolute;top:325px;left:757px">
        <input
          id="FederalPovertyLevelPct"
          v-model="Irs8962.FederalPovertyLevelPct"
          name="FederalPovertyLevelPct"
          maxlength="3"
          data-line-number="5"
          class="no-outline"
          type="text"
          style="width:108px; height:17px;text-align:right;padding-right:20px"
        />
      </div>
      <p
        style="position:absolute;top:327px;left:847px;white-space:nowrap"
        class="ft110"
      >
        %
      </p>
      <p
        style="position:absolute;top:345px;left:69px;white-space:nowrap"
        class="ft14"
      >
        <b>6&#160;</b>
      </p>
      <p
        style="position:absolute;top:345px;left:97px;white-space:nowrap"
        class="ft110"
      >
        Did you enter 401% on line 5? (See instructions if you entered less than
        100%.)
      </p>
      <!--Did you enter 401% on line 5? -->
      <label
        style="position:absolute;top:361px;left:97px;"
        class="checkbox-container"
      >
        <input
          id="FederalPovertyLevelPct401Ind-0"
          v-model="Irs8962.FederalPovertyLevelPct401Ind"
          name="FederalPovertyLevelPct401Ind"
          data-line-number="6"
          class="no-outline checkbox"
          type="radio"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:363px;left:119px;white-space:nowrap"
        class="ft114"
      >
        <b>No.&#160;</b>Continue to line 7.<br /><b>Yes.&#160;</b
        >You&#160;are&#160;not&#160;eligible&#160;to&#160;take&#160;the&#160;PTC.&#160;If&#160;advance&#160;payment&#160;of&#160;the&#160;PTC&#160;was&#160;made,&#160;see&#160;the&#160;instructions&#160;for&#160;<br />how
        to report your excess advance PTC repayment amount.
      </p>
      <!--Did you enter 401% on line 5? -->
      <label
        style="position:absolute;top:378px;left:97px;"
        class="checkbox-container"
      >
        <input
          id="FederalPovertyLevelPct401Ind-1"
          v-model="Irs8962.FederalPovertyLevelPct401Ind"
          name="FederalPovertyLevelPct401Ind"
          data-line-number="6"
          class="no-outline checkbox"
          type="radio"
          value="1"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:417px;left:69px;white-space:nowrap"
        class="ft14"
      >
        <b>7&#160;</b>
      </p>
      <p
        style="position:absolute;top:417px;left:97px;white-space:nowrap"
        class="ft110"
      >
        Applicable Figure. Using your line 5 percentage, locate your “applicable
        figure” on the table in the instructions&#160;&#160;.
      </p>
      <p
        style="position:absolute;top:417px;left:702px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:417px;left:736px;white-space:nowrap"
        class="ft14"
      >
        <b>7</b>
      </p>
      <!--Applicable Figure -->
      <div class="input-area" style="position:absolute;top:415px;left:757px">
        <input
          id="ApplicableFigureRt"
          v-model="Irs8962.ApplicableFigureRt"
          name="ApplicableFigureRt"
          data-line-number="7"
          maxlength="6"
          class="no-outline"
          type="text"
          style="width:108px; height:17px;"
          readonly
        />
      </div>
      <p
        style="position:absolute;top:438px;left:69px;white-space:nowrap"
        class="ft14"
      >
        <b>8&#160;</b>
      </p>
      <p
        style="position:absolute;top:453px;left:76px;white-space:nowrap"
        class="ft14"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:438px;left:76px;white-space:nowrap;font-size:10px"
        class="ft14"
      >
        <b>a&#160;&#160;</b
        >Annual&#160;contribution&#160;amount.&#160;Multiply&#160;line&#160;3&#160;by&#160;
      </p>
      <p
        style="position:absolute;top:453px;left:97px;white-space:nowrap;font-size:10px"
        class="ft110"
      >
        line 7. Round to nearest whole dollar amount&#160;
      </p>
      <p
        style="position:absolute;top:453px;left:323px;white-space:nowrap"
        class="ft14"
      >
        <b>8a</b>
      </p>
      <!--Annual Contribution for Health Care -->
      <div class="input-area" style="position:absolute;top:450px;left:345px">
        <money
          id="AnnualContributionAmt"
          v-model="Irs8962.AnnualContributionAmt"
          name="AnnualContributionAmt"
          data-line-number="8a"
          class="no-outline"
          type="text"
          style="width:108px; height:17px;"
          readonly
        />
      </div>
      <p
        style="position:absolute;top:438px;left:468px;white-space:nowrap"
        class="ft14"
      >
        <b>b&#160;</b>
      </p>
      <p
        style="position:absolute;top:453px;left:475px;white-space:nowrap"
        class="ft14"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:438px;left:481px;white-space:nowrap"
        class="ft112"
      >
        Monthly&#160;&#160;contribution&#160;&#160;amount.&#160;&#160;Divide&#160;&#160;line&#160;&#160;8a&#160;<br />by
        12. Round to nearest whole dollar amount&#160;&#160;
      </p>
      <p
        style="position:absolute;top:453px;left:733px;white-space:nowrap"
        class="ft14"
      >
        <b>8b</b>
      </p>
      <!--Monthly Contribution for Health Care -->
      <div class="input-area" style="position:absolute;top:450px;left:757px">
        <money
          id="MonthlyContriHealthCareCvrAmt"
          v-model="Irs8962.MonthlyContriHealthCareCvrAmt"
          name="MonthlyContriHealthCareCvrAmt"
          data-line-number="8b"
          class="no-outline"
          type="text"
          style="width:108px; height:17px;"
          readonly
        />
      </div>
      <p
        style="position:absolute;top:469px;left:60px;white-space:nowrap"
        class="ft19"
      >
        <!-- Part II: Premium Tax Credit Claim and Reconciliation of Advance Payment of Premium Tax Credit -->
        <b>Part II</b>
      </p>
      <p
        style="position:absolute;top:470px;left:129px;white-space:nowrap"
        class="ft17"
      >
        <b
          >Premium Tax Credit Claim and Reconciliation of Advance Payment of
          Premium Tax Credit&#160;</b
        >
      </p>
      <p
        style="position:absolute;top:489px;left:69px;white-space:nowrap"
        class="ft14"
      >
        <b>9&#160;</b>
      </p>
      <p
        style="position:absolute;top:489px;left:97px;white-space:nowrap"
        class="ft110"
      >
        Are you allocating policy amounts with another taxpayer or do you want
        to use the alternative calculation for year of marriage (see
        instructions)?&#160;
      </p>
      <p
        style="position:absolute;top:507px;left:119px;white-space:nowrap;font-size:10px"
        class="ft14"
      >
        <b>Yes.&#160;</b>Skip to Part IV, Allocation of Policy Amounts, or Part
        V, Alternative Calculation for Year of Marriage.
      </p>
      <!--Share a policy with another taxpayer or get married and want to use the alternative calculation -->
      <label
        style="position:absolute;top:504px;left:97px;"
        class="checkbox-container"
      >
        <input
          id="SharePolicyMarriedAltCalcInd-0"
          v-model="Irs8962.SharePolicyMarriedAltCalcInd"
          name="SharePolicyMarriedAltCalcInd"
          data-line-number="9"
          class="no-outline checkbox"
          type="radio"
          value="1"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:507px;left:637px;white-space:nowrap"
        class="ft14"
      >
        <b>No.&#160;</b>Continue to line 10.
      </p>
      <!--Share a policy with another taxpayer or get married and want to use the alternative calculation -->
      <label
        style="position:absolute;top:504px;left:616px;"
        class="checkbox-container"
      >
        <input
          id="SharePolicyMarriedAltCalcInd-1"
          v-model="Irs8962.SharePolicyMarriedAltCalcInd"
          name="SharePolicyMarriedAltCalcInd"
          data-line-number="9"
          class="no-outline checkbox"
          type="radio"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:525px;left:62px;white-space:nowrap"
        class="ft14"
      >
        <b>10</b>
      </p>
      <p
        style="position:absolute;top:525px;left:97px;white-space:nowrap"
        class="ft110"
      >
        See the instructions to determine if you can use line 11 or must
        complete lines 12 through 23.
      </p>
      <p
        style="position:absolute;top:542px;left:119px;white-space:nowrap"
        class="ft114"
      >
        <b>Yes.&#160;</b
        >Continue&#160;to&#160;line&#160;11.&#160;Compute&#160;your&#160;annual&#160;PTC.&#160;Then&#160;skip&#160;lines&#160;12–23&#160;<br />and
        continue to line 24.
      </p>
      <!--Full Year Coverage 1095-A Indicator -->
      <label
        style="position:absolute;top:542px;left:97px;"
        class="checkbox-container"
      >
        <input
          id="FullYrCoverage1095AInd-0"
          v-model="Irs8962.FullYrCoverage1095AInd"
          name="FullYrCoverage1095AInd"
          data-line-number="10"
          class="no-outline checkbox"
          type="radio"
          value="1"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:542px;left:637px;white-space:nowrap"
        class="ft114"
      >
        <b>No.&#160;&#160;</b
        >Continue&#160;&#160;to&#160;&#160;lines&#160;&#160;12–23.&#160;&#160;Compute&#160;<br />your
        monthly PTC and continue to line 24.&#160;
      </p>
      <!--Full Year Coverage 1095-A Indicator -->
      <label
        style="position:absolute;top:542px;left:616px;"
        class="checkbox-container"
      >
        <input
          id="FullYrCoverage1095AInd-0"
          v-model="Irs8962.FullYrCoverage1095AInd"
          name="FullYrCoverage1095AInd"
          data-line-number="10"
          class="no-outline checkbox"
          type="radio"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:588px;left:88px;white-space:nowrap"
        class="ft14"
      >
        <b>Annual &#160; &#160; &#160;</b>
      </p>
      <p
        style="position:absolute;top:601px;left:76px;white-space:nowrap"
        class="ft14"
      >
        <b>Calculation</b>
      </p>
      <p
        style="position:absolute;top:582px;left:166px;white-space:nowrap;font-size:10px"
        class="ft111"
      >
        <b>(a)&#160;</b>Annual<b>&#160;</b>enrollment<b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:595px;left:172px;white-space:nowrap"
        class="ft10"
      >
        premiums (Form(s)&#160;
      </p>
      <p
        style="position:absolute;top:609px;left:176px;white-space:nowrap"
        class="ft10"
      >
        1095-A, line 33A)
      </p>
      <!--Annual Premium Amount -->
      <money-input
        id="AnnualPremiumAmt"
        v-model="Irs8962.AnnualPTCCalculationGrp.AnnualPremiumAmt"
        name="AnnualPremiumAmt"
        data-line-number='"11a"'
        :line="'11a'"
        :width="106"
        :height="16"
        :div-style="'position:absolute;top:632px;left:164px'"
        @change.native="onInputChange"
      />
      <p
        style="position:absolute;top:577px;left:280px;white-space:nowrap"
        class="ft111"
      >
        <b>(b)&#160;</b>Annual<b>&#160;</b>applicable&#160;
      </p>
      <p
        style="position:absolute;top:590px;left:290px;white-space:nowrap"
        class="ft10"
      >
        SLCSP premium&#160;
      </p>
      <p
        style="position:absolute;top:589px;left:371px;white-space:nowrap"
        class="ft111"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:602px;left:290px;white-space:nowrap"
        class="ft10"
      >
        (Form(s) 1095-A, &#160;
      </p>
      <p
        style="position:absolute;top:614px;left:309px;white-space:nowrap"
        class="ft10"
      >
        line 33B)
      </p>
      <!--Annual Premium SLCSP Amount -->
      <money-input
        id="AnnualPremiumSLCSPAmt"
        v-model="Irs8962.AnnualPTCCalculationGrp.AnnualPremiumSLCSPAmt"
        name="AnnualPremiumSLCSPAmt"
        data-line-number='"11b"'
        :line="'11b'"
        :width="'115'"
        :height="'16'"
        :div-style="'position:absolute;top:632px;left:272px'"
        @change.native="onInputChange"
      />
      <p
        style="position:absolute;top:582px;left:424px;white-space:nowrap"
        class="ft111"
      >
        <b>(c)&#160;</b>Annual&#160;<b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:595px;left:401px;white-space:nowrap"
        class="ft10"
      >
        contribution amount &#160; &#160;&#160;
      </p>
      <p
        style="position:absolute;top:609px;left:430px;white-space:nowrap"
        class="ft10"
      >
        (line 8a)
      </p>
      <!--Annual Contribution Amount -->
      <div class="input-area" style="position:absolute;top:632px;left:390px">
        <money
          id="AnnualContributionAmt11c"
          v-model="Irs8962.AnnualPTCCalculationGrp.AnnualContributionAmt"
          name="AnnualContributionAmt11c"
          data-line-number="11c"
          class="no-outline text-right"
          type="text"
          style="width:116px; height:16px"
          readonly
        />
      </div>
      <p
        style="position:absolute;top:577px;left:521px;white-space:nowrap"
        class="ft111"
      >
        <b>(d)</b>&#160;Annual maximum&#160;
      </p>
      <p
        style="position:absolute;top:590px;left:522px;white-space:nowrap"
        class="ft10"
      >
        premium assistance &#160; &#160; &#160;
      </p>
      <p
        style="position:absolute;top:602px;left:517px;white-space:nowrap;font-size:10px"
        class="ft10"
      >
        (subtract (c) from (b), if&#160;
      </p>
      <p
        style="position:absolute;top:614px;left:518px;white-space:nowrap; font-size:10px"
        class="ft10"
      >
        zero or less, enter -0-)
      </p>
      <!--Annual Maximum Premium Assistance Amount -->
      <div class="input-area" style="position:absolute;top:632px;left:509px">
        <money
          id="AnnualMaxPremiumAssistanceAmt"
          v-model="
            Irs8962.AnnualPTCCalculationGrp.AnnualMaxPremiumAssistanceAmt
          "
          name="AnnualMaxPremiumAssistanceAmt"
          data-line-number="11d"
          class="no-outline text-right"
          type="text"
          style="width:117px; height:16px"
          readonly
        />
      </div>
      <p
        style="position:absolute;top:582px;left:631px;white-space:nowrap;font-size:10px"
        class="ft111"
      >
        <b>(e)</b>&#160;Annual premium tax&#160;
      </p>
      <p
        style="position:absolute;top:595px;left:653px;white-space:nowrap"
        class="ft10"
      >
        credit allowed &#160; &#160; &#160; &#160; &#160;
      </p>
      <p
        style="position:absolute;top:609px;left:640px;white-space:nowrap;font-size:10px"
        class="ft10"
      >
        (smaller of (a) or (d))
      </p>
      <!--Annual Premium Tax Credit Allowed Amount -->
      <div class="input-area" style="position:absolute;top:632px;left:628px">
        <money
          id="AnnualPremiumTaxCreditAllwAmt"
          v-model="
            Irs8962.AnnualPTCCalculationGrp.AnnualPremiumTaxCreditAllwAmt
          "
          name="AnnualPremiumTaxCreditAllwAmt"
          data-line-number="11e"
          class="no-outline text-right"
          type="text"
          style="width:116px; height:16px"
          readonly
        />
      </div>
      <p
        style="position:absolute;top:583px;left:761px;white-space:nowrap"
        class="ft111"
      >
        <b>(f)</b>&#160;Annual advance&#160;
      </p>
      <p
        style="position:absolute;top:596px;left:747px;white-space:nowrap;font-size:10px;"
        class="ft10"
      >
        payment of PTC (Form(s)&#160;
      </p>
      <p
        style="position:absolute;top:608px;left:765px;white-space:nowrap"
        class="ft10"
      >
        1095-A, line 33C)
      </p>
      <!--Annual Advanced PTC Amount -->
      <money-input
        id="AnnualAdvancedPTCAmt"
        v-model="Irs8962.AnnualPTCCalculationGrp.AnnualAdvancedPTCAmt"
        name="AnnualAdvancedPTCAmt"
        data-line-number='"11f"'
        :width="'117'"
        :height="'16'"
        :line="'11f'"
        :div-style="'position:absolute;top:632px;left:747px'"
        @change.native="onInputChange"
      />
      <p
        style="position:absolute;top:633px;left:63px;white-space:nowrap"
        class="ft14"
      >
        <b>11 &#160; &#160;</b>Annual Totals
      </p>
      <p
        style="position:absolute;top:669px;left:85px;white-space:nowrap"
        class="ft14"
      >
        <b>Monthly &#160; &#160;&#160;</b>
      </p>
      <p
        style="position:absolute;top:682px;left:76px;white-space:nowrap"
        class="ft14"
      >
        <b>Calculation</b>
      </p>
      <p
        style="position:absolute;top:656px;left:165px;white-space:nowrap;font-size:10px"
        class="ft111"
      >
        <b>(a)&#160;</b>Monthly<b>&#160;</b>enrollment<b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:670px;left:172px;white-space:nowrap"
        class="ft10"
      >
        premiums (Form(s)&#160;
      </p>
      <p
        style="position:absolute;top:683px;left:168px;white-space:nowrap"
        class="ft10"
      >
        1095-A, lines 21–32,&#160;
      </p>
      <p
        style="position:absolute;top:697px;left:192px;white-space:nowrap"
        class="ft10"
      >
        column A)
      </p>
      <p
        style="position:absolute;top:656px;left:277px;white-space:nowrap;font-size:10px"
        class="ft111"
      >
        <b>(b)&#160;</b>Monthly<b>&#160;</b>applicable&#160;
      </p>
      <p
        style="position:absolute;top:670px;left:290px;white-space:nowrap"
        class="ft10"
      >
        SLCSP premium &#160; &#160;&#160;
      </p>
      <p
        style="position:absolute;top:683px;left:278px;white-space:nowrap;font-size:10px"
        class="ft10"
      >
        (Form(s) 1095-A, lines&#160;
      </p>
      <p
        style="position:absolute;top:697px;left:288px;white-space:nowrap"
        class="ft10"
      >
        21–32, column B)
      </p>
      <p
        style="position:absolute;top:649px;left:423px;white-space:nowrap"
        class="ft111"
      >
        <b>(c)&#160;</b>Monthly&#160;<b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:663px;left:402px;white-space:nowrap"
        class="ft10"
      >
        contribution amount &#160; &#160;&#160;
      </p>
      <p
        style="position:absolute;top:676px;left:401px;white-space:nowrap"
        class="ft10"
      >
        (amount from line 8b &#160;
      </p>
      <p
        style="position:absolute;top:690px;left:397px;white-space:nowrap;font-size:10px"
        class="ft10"
      >
        or alternative marriage&#160;
      </p>
      <p
        style="position:absolute;top:703px;left:403px;white-space:nowrap"
        class="ft10"
      >
        monthly calculation)
      </p>
      <p
        style="position:absolute;top:656px;left:516px;white-space:nowrap"
        class="ft111"
      >
        <b>(d)</b>&#160;Monthly maximum&#160;
      </p>
      <p
        style="position:absolute;top:670px;left:520px;white-space:nowrap"
        class="ft10"
      >
        premium assistance &#160; &#160;&#160;
      </p>
      <p
        style="position:absolute;top:683px;left:514px;white-space:nowrap;font-size:10px"
        class="ft10"
      >
        (subtract (c) from (b), if&#160;
      </p>
      <p
        style="position:absolute;top:697px;left:515px;white-space:nowrap;font-size:10px"
        class="ft10"
      >
        zero or less, enter -0-)
      </p>
      <p
        style="position:absolute;top:663px;left:629px;white-space:nowrap;font-size:10px"
        class="ft111"
      >
        <b>(e)</b>&#160;Monthly premium tax&#160;
      </p>
      <p
        style="position:absolute;top:676px;left:653px;white-space:nowrap"
        class="ft10"
      >
        credit allowed &#160; &#160; &#160; &#160; &#160;
      </p>
      <p
        style="position:absolute;top:690px;left:640px;white-space:nowrap;font-size:10px"
        class="ft10"
      >
        (smaller of (a) or (d))
      </p>
      <p
        style="position:absolute;top:656px;left:759px;white-space:nowrap"
        class="ft111"
      >
        <b>(f)</b>&#160;Monthly advance&#160;
      </p>
      <p
        style="position:absolute;top:670px;left:747px;white-space:nowrap;font-size:10px"
        class="ft10"
      >
        payment of PTC (Form(s)&#160;
      </p>
      <p
        style="position:absolute;top:683px;left:758px;white-space:nowrap"
        class="ft10"
      >
        1095-A, lines 21–32,&#160;
      </p>
      <p
        style="position:absolute;top:697px;left:781px;white-space:nowrap"
        class="ft10"
      >
        column C)
      </p>
      <p
        style="position:absolute;top:723px;left:63px;white-space:nowrap"
        class="ft115"
      >
        <b>12</b>&#160; &#160; &#160; January<br />
        <span style="position:absolute;top:18px;"
          ><b>13</b>&#160; &#160; &#160; February</span
        >
        <span style="position:absolute;top:36px;">
          <b>14</b>&#160; &#160; &#160; March</span
        >
        <span style="position:absolute;top:54px;">
          <b>15</b>&#160; &#160; &#160; April</span
        >
        <span style="position:absolute;top:73px;">
          <b>16</b>&#160; &#160; &#160; May
        </span>
        <span style="position:absolute;top:90px;">
          <b>17</b>&#160; &#160; &#160; June</span
        >
        <span style="position:absolute;top:108px;">
          <b>18</b>&#160; &#160; &#160; July</span
        >
        <span style="position:absolute;top:126px;">
          <b>19</b>&#160; &#160; &#160; August</span
        >
        <span style="position:absolute;top:145px;">
          <b>20&#160;</b>&#160; &#160; &#160;September</span
        >
        <span style="position:absolute;top:163px;">
          <b>21</b>&#160; &#160; &#160; October</span
        >
        <span style="position:absolute;top:182px;">
          <b>22</b>&#160; &#160; &#160; November</span
        >
        <span style="position:absolute;top:200px;">
          <b>23</b>&#160; &#160; &#160; December
        </span>
      </p>
      <!--Monthly Premium Amount Line 12a-23a-->
      <div>
        <div class="input-area" style="position:absolute;top:722px;left:164px">
          <money
            id="MonthlyPremiumAmt12a"
            v-model="Irs8962.MonthlyPremiumAmt12a"
            name="MonthlyPremiumAmt12a"
            data-line-number="12a"
            class="no-outline text-right"
            type="text"
            style="width:106px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:740px;left:164px">
          <money
            id="MonthlyPremiumAmt13a"
            v-model="Irs8962.MonthlyPremiumAmt13a"
            name="MonthlyPremiumAmt13a"
            data-line-number="13a"
            class="no-outline text-right"
            type="text"
            style="width:106px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:757px;left:164px">
          <money
            id="MonthlyPremiumAmt14a"
            v-model="Irs8962.MonthlyPremiumAmt14a"
            name="MonthlyPremiumAmt14a"
            data-line-number="14a"
            class="no-outline text-right"
            type="text"
            style="width:106px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:776px;left:164px">
          <money
            id="MonthlyPremiumAmt15a"
            v-model="Irs8962.MonthlyPremiumAmt"
            name="MonthlyPremiumAmt"
            data-line-number="15a"
            class="no-outline text-right"
            type="text"
            style="width:106px; height:15px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:793px;left:164px">
          <money
            id="MonthlyPremiumAmt16a"
            v-model="Irs8962.MonthlyPremiumAmt16a"
            name="MonthlyPremiumAmt16a"
            data-line-number="16a"
            class="no-outline text-right"
            type="text"
            style="width:106px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:812px;left:164px">
          <money
            id="MonthlyPremiumAmt17a"
            v-model="Irs8962.MonthlyPremiumAmt17a"
            name="MonthlyPremiumAmt17a"
            data-line-number="17a"
            class="no-outline text-right"
            type="text"
            style="width:106px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:830px;left:164px">
          <money
            id="MonthlyPremiumAmt18a"
            v-model="Irs8962.MonthlyPremiumAmt18a"
            name="MonthlyPremiumAmt18a"
            data-line-number="18a"
            class="no-outline text-right"
            type="text"
            style="width:106px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:848px;left:164px">
          <money
            id="MonthlyPremiumAmt19a"
            v-model="Irs8962.MonthlyPremiumAmt19a"
            name="MonthlyPremiumAmt19a"
            data-line-number="19a"
            class="no-outline text-right"
            type="text"
            style="width:106px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:866px;left:164px">
          <money
            id="MonthlyPremiumAmt20a"
            v-model="Irs8962.MonthlyPremiumAmt20a"
            name="MonthlyPremiumAmt20a"
            data-line-number="20a"
            class="no-outline text-right"
            type="text"
            style="width:106px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:884px;left:164px">
          <money
            id="MonthlyPremiumAmt21a"
            v-model="Irs8962.MonthlyPremiumAmt21a"
            name="MonthlyPremiumAmt21a"
            data-line-number="21a"
            class="no-outline text-right"
            type="text"
            style="width:106px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:902px;left:164px">
          <money
            id="MonthlyPremiumAmt22a"
            v-model="Irs8962.MonthlyPremiumAmt22a"
            name="MonthlyPremiumAmt22a"
            data-line-number="22a"
            class="no-outline text-right"
            type="text"
            style="width:106px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:920px;left:164px">
          <money
            id="MonthlyPremiumAmt23a"
            v-model="Irs8962.MonthlyPremiumAmt23a"
            name="MonthlyPremiumAmt23a"
            data-line-number="23a"
            class="no-outline text-right"
            type="text"
            style="width:106px; height:15px"
          />
        </div>
      </div>
      <!--Monthly Premium SLCSP Amount 12b-23b -->
      <div>
        <div class="input-area" style="position:absolute;top:722px;left:272px">
          <money
            id="MonthMonthlyPremiumSLCSPAmt12b"
            v-model="Irs8962.MonthMonthlyPremiumSLCSPAmt12b"
            name="MonthMonthlyPremiumSLCSPAmt12b"
            data-line-number="12b"
            class="no-outline text-right"
            type="text"
            style="width:115px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:740px;left:272px">
          <money
            id="MonthlyPremiumSLCSPAmt13b"
            v-model="Irs8962.MonthlyPremiumSLCSPAmt13b"
            name="MonthlyPremiumSLCSPAmt13b"
            data-line-number="13b"
            class="no-outline text-right"
            type="text"
            style="width:115px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:757px;left:272px">
          <money
            id="MonthlyPremiumSLCSPAmt14b"
            v-model="Irs8962.MonthlyPremiumSLCSPAmt14b"
            name="MonthlyPremiumSLCSPAmt14b"
            data-line-number="14b"
            class="no-outline text-right"
            type="text"
            style="width:115px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:776px;left:272px">
          <money
            id="MonthlyPremiumSLCSPAmt15b"
            v-model="Irs8962.MonthlyPremiumSLCSPAmt15b"
            name="MonthlyPremiumSLCSPAmt15b"
            data-line-number="15b"
            class="no-outline text-right"
            type="text"
            style="width:115px; height:15px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:793px;left:272px">
          <money
            id="MonthlyPremiumSLCSPAmt16b"
            v-model="Irs8962.MonthlyPremiumSLCSPAmt16b"
            name="MonthlyPremiumSLCSPAmt16b"
            data-line-number="16b"
            class="no-outline text-right"
            type="text"
            style="width:115px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:812px;left:272px">
          <money
            id="MonthlyPremiumSLCSPAmt17b"
            v-model="Irs8962.MonthlyPremiumSLCSPAmt17b"
            name="MonthlyPremiumSLCSPAmt17b"
            data-line-number="17b"
            class="no-outline text-right"
            type="text"
            style="width:115px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:830px;left:272px">
          <money
            id="MonthlyPremiumSLCSPAmt18b"
            v-model="Irs8962.MonthlyPremiumSLCSPAmt18b"
            name="MonthlyPremiumSLCSPAmt18b"
            data-line-number="18b"
            class="no-outline text-right"
            type="text"
            style="width:115px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:848px;left:272px">
          <money
            id="MonthlyPremiumSLCSPAmt19b"
            v-model="Irs8962.MonthlyPremiumSLCSPAmt19b"
            name="MonthlyPremiumSLCSPAmt19b"
            data-line-number="19b"
            class="no-outline text-right"
            type="text"
            style="width:115px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:866px;left:272px">
          <money
            id="MonthlyPremiumSLCSPAmt20b"
            v-model="Irs8962.MonthlyPremiumSLCSPAmt20b"
            name="MonthlyPremiumSLCSPAmt20b"
            data-line-number="20b"
            class="no-outline text-right"
            type="text"
            style="width:115px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:884px;left:272px">
          <money
            id="MonthlyPremiumSLCSPAmt21b"
            v-model="Irs8962.MonthlyPremiumSLCSPAmt21b"
            name="MonthlyPremiumSLCSPAmt21b"
            data-line-number="21b"
            class="no-outline text-right"
            type="text"
            style="width:115px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:902px;left:272px">
          <money
            id="MonthlyPremiumSLCSPAmt22b"
            v-model="Irs8962.MonthlyPremiumSLCSPAmt22b"
            name="MonthlyPremiumSLCSPAmt22b"
            data-line-number="22b"
            class="no-outline text-right"
            type="text"
            style="width:115px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:920px;left:272px">
          <money
            id="MonthlyPremiumSLCSPAmt23b"
            v-model="Irs8962.MonthlyPremiumSLCSPAmt23b"
            name="MonthlyPremiumSLCSPAmt23b"
            data-line-number="23b"
            class="no-outline text-right"
            type="text"
            style="width:115px; height:15px"
          />
        </div>
      </div>
      <!--Monthly Contribution Amount 12c-23c -->
      <div>
        <div class="input-area" style="position:absolute;top:722px;left:390px">
          <money
            id="MonthlyContributionAmt12c"
            v-model="Irs8962.MonthlyContributionAmt12c"
            name="MonthlyContributionAmt12c"
            data-line-number="12c"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:740px;left:390px">
          <money
            id="MonthlyContributionAmt13c"
            v-model="Irs8962.MonthlyContributionAmt13c"
            name="MonthlyContributionAmt13c"
            data-line-number="13c"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:757px;left:390px">
          <money
            id="MonthlyContributionAmt14c"
            v-model="Irs8962.MonthlyContributionAmt14c"
            name="MonthlyContributionAmt14c"
            data-line-number="14c"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:776px;left:390px">
          <money
            id="MonthlyContributionAmt15c"
            v-model="Irs8962.MonthlyContributionAmt15c"
            name="MonthlyContributionAmt"
            data-line-number="15c"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:15px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:793px;left:390px">
          <money
            id="MonthlyContributionAmt16c"
            v-model="Irs8962.MonthlyContributionAmt16c"
            name="MonthlyContributionAmt16c"
            data-line-number="16c"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:812px;left:390px">
          <money
            id="MonthlyContributionAmt17c"
            v-model="Irs8962.MonthlyContributionAmt17c"
            name="MonthlyContributionAmt17c"
            data-line-number="17c"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:830px;left:390px">
          <money
            id="MonthlyContributionAmt18c"
            v-model="Irs8962.MonthlyContributionAmt18c"
            name="MonthlyContributionAmt18c"
            data-line-number="18c"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:848px;left:390px">
          <money
            id="MonthlyContributionAmt19c"
            v-model="Irs8962.MonthlyContributionAmt19c"
            name="MonthlyContributionAmt19c"
            data-line-number="19c"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:866px;left:390px">
          <money
            id="MonthlyContributionAmt20c"
            v-model="Irs8962.MonthlyContributionAmt20c"
            name="MonthlyContributionAmt20c"
            data-line-number="20c"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:884px;left:390px">
          <money
            id="MonthlyContributionAmt21c"
            v-model="Irs8962.MonthlyContributionAmt21c"
            name="MonthlyContributionAmt21c"
            data-line-number="21c"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:902px;left:390px">
          <money
            id="MonthlyContributionAmt22c"
            v-model="Irs8962.MonthlyContributionAmt22c"
            name="MonthlyContributionAmt22c"
            data-line-number="22c"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:920px;left:390px">
          <money
            id="MonthlyContributionAmt23c"
            v-model="Irs8962.MonthlyContributionAmt23c"
            name="MonthlyContributionAmt23c"
            data-line-number="23c"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:15px"
          />
        </div>
      </div>
      <!--Monthly Maximum Premium Assistance Amount 12d-23d -->
      <div>
        <div class="input-area" style="position:absolute;top:722px;left:509px">
          <money
            id="MonthlyMaxPremiumAssistanceAmt12d"
            v-model="Irs8962.MonthlyMaxPremiumAssistanceAmt12d"
            name="MonthlyMaxPremiumAssistanceAmt12d"
            data-line-number="12d"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:740px;left:509px">
          <money
            id="MonthlyMaxPremiumAssistanceAmt13d"
            v-model="Irs8962.MonthlyMaxPremiumAssistanceAmt13d"
            name="MonthlyMaxPremiumAssistanceAmt13d"
            data-line-number="13d"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:757px;left:509px">
          <money
            id="MonthlyMaxPremiumAssistanceAmt14d"
            v-model="Irs8962.MonthlyMaxPremiumAssistanceAmt14d"
            name="MonthlyMaxPremiumAssistanceAmt14d"
            data-line-number="14d"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:776px;left:509px">
          <money
            id="MonthlyMaxPremiumAssistanceAmt15d"
            v-model="Irs8962.MonthlyMaxPremiumAssistanceAmt15d"
            name="MonthlyMaxPremiumAssistanceAmt"
            data-line-number="15d"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:15px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:793px;left:509px">
          <money
            id="MonthlyMaxPremiumAssistanceAmt16d"
            v-model="Irs8962.MonthlyMaxPremiumAssistanceAmt16d"
            name="MonthlyMaxPremiumAssistanceAmt16d"
            data-line-number="16d"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:812px;left:509px">
          <money
            id="MonthlyMaxPremiumAssistanceAmt17d"
            v-model="Irs8962.MonthlyMaxPremiumAssistanceAmt17d"
            name="MonthlyMaxPremiumAssistanceAmt17d"
            data-line-number="17d"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:830px;left:509px">
          <money
            id="MonthlyMaxPremiumAssistanceAmt18d"
            v-model="Irs8962.MonthlyMaxPremiumAssistanceAmt18d"
            name="MonthlyMaxPremiumAssistanceAmt18d"
            data-line-number="18d"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:848px;left:509px">
          <money
            id="MonthlyMaxPremiumAssistanceAmt19d"
            v-model="Irs8962.MonthlyMaxPremiumAssistanceAmt19d"
            name="MonthlyMaxPremiumAssistanceAmt19d"
            data-line-number="19d"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:866px;left:509px">
          <money
            id="MonthlyMaxPremiumAssistanceAmt20d"
            v-model="Irs8962.MonthlyMaxPremiumAssistanceAmt20d"
            name="MonthlyMaxPremiumAssistanceAmt20d"
            data-line-number="20d"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:884px;left:509px">
          <money
            id="MonthlyMaxPremiumAssistanceAmt21d"
            v-model="Irs8962.MonthlyMaxPremiumAssistanceAmt21d"
            name="MonthlyMaxPremiumAssistanceAmt21d"
            data-line-number="21d"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:902px;left:509px">
          <money
            id="MonthlyMaxPremiumAssistanceAmt22d"
            v-model="Irs8962.MonthlyMaxPremiumAssistanceAmt22d"
            name="MonthlyMaxPremiumAssistanceAmt22d"
            data-line-number="22d"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:920px;left:509px">
          <money
            id="MonthlyMaxPremiumAssistanceAmt23d"
            v-model="Irs8962.MonthlyMaxPremiumAssistanceAmt23d"
            name="MonthlyMaxPremiumAssistanceAmt23d"
            data-line-number="23d"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:15px"
          />
        </div>
      </div>
      <!--Monthly Premium Tax Credit Allowed Amount 12e-23e -->
      <div>
        <div class="input-area" style="position:absolute;top:722px;left:628px">
          <money
            id="MonthlyPremiumTaxCreditAllwAmt12e"
            v-model="Irs8962.MonthlyPremiumTaxCreditAllwAmt12e"
            name="MonthlyPremiumTaxCreditAllwAmt12e"
            data-line-number="12e"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:740px;left:628px">
          <money
            id="MonthlyPremiumTaxCreditAllwAmt13e"
            v-model="Irs8962.MonthlyPremiumTaxCreditAllwAmt13e"
            name="MonthlyPremiumTaxCreditAllwAmt13e"
            data-line-number="13e"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:757px;left:628px">
          <money
            id="MonthlyPremiumTaxCreditAllwAmt14e"
            v-model="Irs8962.MonthlyPremiumTaxCreditAllwAmt14e"
            name="MonthlyPremiumTaxCreditAllwAmt14e"
            data-line-number="14e"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:776px;left:628px">
          <money
            id="MonthlyPremiumTaxCreditAllwAmt15e"
            v-model="Irs8962.MonthlyPremiumTaxCreditAllwAmt15e"
            name="MonthlyMaxPremiumAssistanceAmt15e"
            data-line-number="15e"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:15px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:793px;left:628px">
          <money
            id="MonthlyPremiumTaxCreditAllwAmt16e"
            v-model="Irs8962.MonthlyPremiumTaxCreditAllwAmt16e"
            name="MonthlyPremiumTaxCreditAllwAmt16e"
            data-line-number="16e"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:812px;left:628px">
          <money
            id="MonthlyPremiumTaxCreditAllwAmt17e"
            v-model="Irs8962.MonthlyPremiumTaxCreditAllwAmt17e"
            name="MonthlyPremiumTaxCreditAllwAmt17e"
            data-line-number="17e"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:830px;left:628px">
          <money
            id="MonthlyPremiumTaxCreditAllwAmt18e"
            v-model="Irs8962.MonthlyPremiumTaxCreditAllwAmt18e"
            name="MonthlyPremiumTaxCreditAllwAmt18e"
            data-line-number="18e"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:848px;left:628px">
          <money
            id="MonthlyPremiumTaxCreditAllwAmt19e"
            v-model="Irs8962.MonthlyPremiumTaxCreditAllwAmt19e"
            name="MonthlyPremiumTaxCreditAllwAmt19e"
            data-line-number="19e"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:866px;left:628px">
          <money
            id="MonthlyPremiumTaxCreditAllwAmt20e"
            v-model="Irs8962.MonthlyPremiumTaxCreditAllwAmt20e"
            name="MonthlyPremiumTaxCreditAllwAmt20e"
            data-line-number="20e"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:884px;left:628px">
          <money
            id="MonthlyPremiumTaxCreditAllwAmt21e"
            v-model="Irs8962.MonthlyPremiumTaxCreditAllwAmt21e"
            name="MonthlyPremiumTaxCreditAllwAmt21e"
            data-line-number="21e"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:902px;left:628px">
          <money
            id="MonthlyPremiumTaxCreditAllwAmt22e"
            v-model="Irs8962.MonthlyPremiumTaxCreditAllwAmt22e"
            name="MonthlyPremiumTaxCreditAllwAmt22e"
            data-line-number="22e"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:920px;left:628px">
          <money
            id="MonthlyPremiumTaxCreditAllwAmt23e"
            v-model="Irs8962.MonthlyPremiumTaxCreditAllwAmt23e"
            name="MonthlyPremiumTaxCreditAllwAmt23e"
            data-line-number="23e"
            class="no-outline text-right"
            type="text"
            style="width:116px; height:15px"
          />
        </div>
      </div>
      <!--Monthly Advanced PTC Amount 12f-23f -->
      <div>
        <div class="input-area" style="position:absolute;top:722px;left:747px">
          <money
            id="MonthlyAdvancedPTCAmt12f"
            v-model="Irs8962.MonthlyAdvancedPTCAmt12f"
            name="MonthlyAdvancedPTCAmt12f"
            data-line-number="12f"
            class="no-outline text-right"
            type="text"
            style="width:117px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:740px;left:747px">
          <money
            id="MonthlyAdvancedPTCAmt13f"
            v-model="Irs8962.MonthlyAdvancedPTCAmt13f"
            name="MonthlyAdvancedPTCAmt13f"
            data-line-number="13f"
            class="no-outline text-right"
            type="text"
            style="width:117px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:757px;left:747px">
          <money
            id="MonthlyAdvancedPTCAmt14f"
            v-model="Irs8962.MonthlyAdvancedPTCAmt14f"
            name="MonthlyAdvancedPTCAmt14f"
            data-line-number="14f"
            class="no-outline text-right"
            type="text"
            style="width:117px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:776px;left:747px">
          <money
            id="MonthlyAdvancedPTCAmt15f"
            v-model="Irs8962.MonthlyAdvancedPTCAmt15f"
            name="MonthlyAdvancedPTCAmt15f"
            data-line-number="15f"
            class="no-outline text-right"
            type="text"
            style="width:117px; height:15px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:793px;left:747px">
          <money
            id="MonthlyAdvancedPTCAmt16f"
            v-model="Irs8962.MonthlyAdvancedPTCAmt16f"
            name="MonthlyAdvancedPTCAmt16f"
            data-line-number="16f"
            class="no-outline text-right"
            type="text"
            style="width:117px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:812px;left:747px">
          <money
            id="MonthlyAdvancedPTCAmt17f"
            v-model="Irs8962.MonthlyAdvancedPTCAmt17f"
            name="MonthlyAdvancedPTCAmt17f"
            data-line-number="17f"
            class="no-outline text-right"
            type="text"
            style="width:117px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:830px;left:747px">
          <money
            id="MonthlyAdvancedPTCAmt18f"
            v-model="Irs8962.MonthlyAdvancedPTCAmt18f"
            name="MonthlyAdvancedPTCAmt18f"
            data-line-number="18f"
            class="no-outline text-right"
            type="text"
            style="width:117px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:848px;left:747px">
          <money
            id="MonthlyAdvancedPTCAmt19f"
            v-model="Irs8962.MonthlyAdvancedPTCAmt19f"
            name="MonthlyAdvancedPTCAmt19f"
            data-line-number="19f"
            class="no-outline text-right"
            type="text"
            style="width:117px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:866px;left:747px">
          <money
            id="MonthlyAdvancedPTCAmt20f"
            v-model="Irs8962.MonthlyAdvancedPTCAmt20f"
            name="MonthlyAdvancedPTCAmt20f"
            data-line-number="20f"
            class="no-outline text-right"
            type="text"
            style="width:117px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:884px;left:747px">
          <money
            id="MonthlyAdvancedPTCAmt21f"
            v-model="Irs8962.MonthlyAdvancedPTCAmt21f"
            name="MonthlyAdvancedPTCAmt21f"
            data-line-number="21f"
            class="no-outline text-right"
            type="text"
            style="width:117px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:902px;left:747px">
          <money
            id="MonthlyAdvancedPTCAmt22f"
            v-model="Irs8962.MonthlyAdvancedPTCAmt22f"
            name="MonthlyAdvancedPTCAmt22f"
            data-line-number="22f"
            class="no-outline text-right"
            type="text"
            style="width:117px; height:16px"
          />
        </div>
        <div class="input-area" style="position:absolute;top:920px;left:747px">
          <money
            id="MonthlyAdvancedPTCAmt23f"
            v-model="Irs8962.MonthlyAdvancedPTCAmt23f"
            name="MonthlyAdvancedPTCAmt23f"
            data-line-number="23f"
            class="no-outline text-right"
            type="text"
            style="width:117px; height:15px"
          />
        </div>
      </div>
      <p
        style="position:absolute;top:939px;left:62px;white-space:nowrap"
        class="ft14"
      >
        <b>24</b>
      </p>
      <p
        style="position:absolute;top:939px;left:97px;white-space:nowrap"
        class="ft110"
      >
        Total premium tax credit. Enter the amount from line 11(e) or add lines
        12(e) through 23(e) and enter the total here&#160;&#160;
      </p>
      <p
        style="position:absolute;top:939px;left:733px;white-space:nowrap"
        class="ft14"
      >
        <b>24</b>
      </p>
      <!--Total Premium Tax Credit -->
      <div class="input-area" style="position:absolute;top:939px;left:758px">
        <money
          id="TotalPremiumTaxCreditAmt"
          v-model="Irs8962.TotalPremiumTaxCreditAmt"
          name="TotalPremiumTaxCreditAmt"
          data-line-number="24"
          class="no-outline"
          type="text"
          style="width:107px; height:15px"
          readonly
        />
      </div>
      <p
        style="position:absolute;top:957px;left:62px;white-space:nowrap"
        class="ft14"
      >
        <b>25</b>
      </p>
      <p
        style="position:absolute;top:957px;left:97px;white-space:nowrap"
        class="ft110"
      >
        Advance payment of PTC. Enter the amount from line 11(f) or add lines
        12(f) through 23(f) and enter the total here&#160;&#160;
      </p>
      <p
        style="position:absolute;top:957px;left:733px;white-space:nowrap"
        class="ft14"
      >
        <b>25</b>
      </p>
      <!--Advance Payment of PTC -->
      <div class="input-area" style="position:absolute;top:956px;left:758px">
        <money
          id="TotalAdvancedPTCAmt"
          v-model="Irs8962.TotalAdvancedPTCAmt"
          name="TotalAdvancedPTCAmt"
          data-line-number="25"
          class="no-outline"
          type="text"
          style="width:107px; height:15px"
          readonly
        />
      </div>
      <p
        style="position:absolute;top:982px;left:62px;white-space:nowrap"
        class="ft14"
      >
        <b>26&#160;</b>
      </p>
      <p
        style="position:absolute;top:996px;left:76px;white-space:nowrap"
        class="ft116"
      >
        <b>&#160;<br />&#160;</b>
      </p>
      <p
        style="position:absolute;top:981px;left:97px;white-space:nowrap"
        class="ft114"
      >
        Net&#160;premium&#160;tax&#160;credit.&#160;If&#160;line&#160;24&#160;is&#160;greater&#160;than&#160;line&#160;25,&#160;subtract&#160;line&#160;25&#160;from&#160;line&#160;24.&#160;Enter&#160;the&#160;difference&#160;here&#160;and&#160;<br />on&#160;Schedule&#160;3&#160;(Form&#160;1040&#160;or&#160;1040-SR),&#160;line&#160;9,&#160;or&#160;Form&#160;1040-NR,&#160;line&#160;65.&#160;If&#160;line&#160;24&#160;equals&#160;line&#160;25,&#160;enter&#160;-0-.&#160;Stop&#160;<br />here.
        If line 25 is greater than line 24, leave this line blank and continue
        to line 27&#160;&#160;.
      </p>
      <!--Premium Tax Credit -->
      <div class="input-area" style="position:absolute;top:1010px;left:758px">
        <money
          id="ReconciledPremiumTaxCreditAmt"
          v-model="Irs8962.ReconciledPremiumTaxCreditAmt"
          name="ReconciledPremiumTaxCreditAmt"
          data-line-number="26"
          class="no-outline"
          type="text"
          style="width:107px; height:16px"
          @blur.native="Irs8962Updated"
        />
      </div>
      <p
        style="position:absolute;top:1010px;left:558px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:576px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:594px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:612px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:630px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:648px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:666px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:684px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:702px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1011px;left:733px;white-space:nowrap"
        class="ft14"
      >
        <b>26</b>
      </p>
      <p
        style="position:absolute;top:1027px;left:57px;white-space:nowrap"
        class="ft19"
      >
        <b>Part III</b>
      </p>
      <p
        style="position:absolute;top:1029px;left:129px;white-space:nowrap"
        class="ft17"
      >
        <b>Repayment of Excess Advance Payment of the Premium Tax Credit</b>
      </p>
      <p
        style="position:absolute;top:1047px;left:62px;white-space:nowrap"
        class="ft14"
      >
        <b>27</b>
      </p>
      <p
        style="position:absolute;top:1047px;left:97px;white-space:nowrap"
        class="ft110"
      >
        Excess advance payment of PTC. If line 25 is greater than line 24,
        subtract line 24 from line 25. Enter the difference here&#160;&#160;
      </p>
      <p
        style="position:absolute;top:1047px;left:733px;white-space:nowrap"
        class="ft14"
      >
        <b>27</b>
      </p>
      <!-- Part III: Repayment of Excess Advance Payment of the Premium Tax Credit -->
      <!--Excess Advance Payment of PTC -->
      <div class="input-area" style="position:absolute;top:1046px;left:758px">
        <money
          id="ExcessAdvncPaymentAmt"
          v-model="Irs8962.ExcessAdvncPaymentAmt"
          name="ExcessAdvncPaymentAmt"
          data-line-number="27"
          class="no-outline"
          type="text"
          style="width:107px; height:16px"
          readonly
        />
      </div>
      <p
        style="position:absolute;top:1065px;left:62px;white-space:nowrap"
        class="ft14"
      >
        <b>28&#160;</b>
      </p>
      <!--Repayment Limitation -->
      <money-input
        id="AdditionalTaxLimitationAmt"
        v-model="Irs8962.AdditionalTaxLimitationAmt"
        name="AdditionalTaxLimitationAmt"
        :line="28"
        :width="'107'"
        :height="'16'"
        :div-style="'position:absolute;top:1064px;left:758px'"
        @change.native="onInputChange"
      />
      <p
        style="position:absolute;top:1065px;left:97px;white-space:nowrap"
        class="ft110"
      >
        Repayment limitation (see instructions) &#160;&#160;.
      </p>
      <p
        style="position:absolute;top:1065px;left:342px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:360px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:378px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:396px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:414px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:432px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:450px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:468px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:486px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:504px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:522px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:540px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:558px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:576px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:594px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:612px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:630px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:648px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:666px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:684px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:702px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1065px;left:733px;white-space:nowrap"
        class="ft14"
      >
        <b>28</b>
      </p>
      <p
        style="position:absolute;top:1086px;left:62px;white-space:nowrap"
        class="ft14"
      >
        <b>29&#160;</b>
      </p>
      <!--Excess Advance Premium Tax Credit Repayment -->
      <div class="input-area" style="position:absolute;top:1099px;left:758px">
        <money
          id="PremiumTaxCreditTaxLiabAmt"
          v-model="Irs8962.PremiumTaxCreditTaxLiabAmt"
          name="PremiumTaxCreditTaxLiabAmt"
          data-line-number="29"
          class="no-outline"
          type="text"
          style="width:107px; height:16px"
          @change.native="Irs8962Updated"
        />
      </div>
      <p
        style="position:absolute;top:1101px;left:76px;white-space:nowrap"
        class="ft14"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:1086px;left:97px;white-space:nowrap"
        class="ft112"
      >
        Excess&#160;&#160;advance&#160;&#160;premium&#160;&#160;tax&#160;&#160;credit&#160;&#160;repayment.&#160;&#160;Enter&#160;&#160;the&#160;&#160;smaller&#160;&#160;of&#160;&#160;line&#160;&#160;27&#160;&#160;or
        line 28 here and on Schedule 2&#160;<br />(Form 1040 or 1040-SR), line
        2, or Form 1040-NR, line 44&#160;&#160;.
      </p>
      <p
        style="position:absolute;top:1101px;left:432px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1101px;left:450px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1101px;left:468px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1101px;left:486px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1101px;left:504px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1101px;left:522px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1101px;left:540px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1101px;left:558px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1101px;left:576px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1101px;left:594px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1101px;left:612px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1101px;left:630px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1101px;left:648px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1101px;left:666px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1101px;left:684px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1101px;left:702px;white-space:nowrap"
        class="ft110"
      >
        .
      </p>
      <p
        style="position:absolute;top:1101px;left:733px;white-space:nowrap"
        class="ft14"
      >
        <b>29</b>
      </p>
      <p
        style="position:absolute;top:1119px;left:54px;white-space:nowrap"
        class="ft14"
      >
        <b
          >XOB For Paperwork Reduction Act Notice, see your tax return
          instructions.</b
        >
      </p>
      <p
        style="position:absolute;top:1121px;left:566px;white-space:nowrap"
        class="ft10"
      >
        Cat. No. 0000/1736
      </p>
      <p
        style="position:absolute;top:1120px;left:770px;white-space:nowrap"
        class="ft10"
      >
        Form&#160;
      </p>
      <p
        style="position:absolute;top:1119px;left:798px;white-space:nowrap"
        class="ft17"
      >
        <b style="font-size:14px">8962&#160;</b>(2019)&#160;
      </p>
    </div>
    <hr />
    <div id="page2-div" style="position:relative;width:918px;height:970px;">
      <!-- <img
        width="918"
        height="1188"
        src="../../static/form-assets/irs8962002.png"
        alt="background image"
      /> -->
      <p
        style="position:absolute;top:55px;left:54px;white-space:nowrap"
        class="ft20"
      >
        Form 8962 (2019)&#160;
      </p>
      <p
        style="position:absolute;top:56px;left:826px;white-space:nowrap"
        class="ft20"
      >
        Page &#160;
      </p>
      <p
        style="position:absolute;top:54px;left:856px;white-space:nowrap;font-size:14px"
        class="ft21"
      >
        <b>2&#160;</b>
      </p>
      <p
        style="position:absolute;top:73px;left:57px;white-space:nowrap"
        class="ft22"
      >
        <b>Part IV</b>
      </p>
      <p
        style="position:absolute;top:73px;left:129px;white-space:nowrap"
        class="ft21"
      >
        <b>Allocation of Policy Amounts</b>
      </p>
      <p
        style="position:absolute;top:93px;left:54px;white-space:nowrap"
        class="ft26"
      >
        Complete the following information for up to four policy amount
        allocations. See instructions for allocation details.
      </p>
      <p style="position:absolute;top:110px;left:54px;font-size:12px">
        <b>Allocation 1</b>
      </p>
      <p
        style="position:absolute;top:127px;left:62px;white-space:nowrap"
        class="ft25"
      >
        <b>30</b>
      </p>
      <p
        style="position:absolute;top:126px;left:97px;white-space:nowrap"
        class="ft25"
      >
        <b>(a)</b>&#160; &#160;Policy Number (Form 1095-A, line 2)
      </p>
      <div class="input-area" style="position:absolute;top:143px;left:97px">
        <input
          id="PolicyNum1"
          v-model="Irs8962.PolicyNum"
          name="PolicyNum1"
          data-line-number="30a"
          class="no-outline"
          type="text"
          style="width:226px; height:19px"
        />
      </div>
      <p
        style="position:absolute;top:126px;left:330px;white-space:nowrap"
        class="ft25"
      >
        <b>(b)</b>&#160; &#160;SSN of other taxpayer&#160;
      </p>
      <div class="input-area" style="position:absolute;top:143px;left:325px">
        <input
          id="SSN"
          v-model="Irs8962.SSN"
          v-mask="'###-##-####'"
          name="SSN"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          data-line-number="30b"
          class="no-outline"
          type="text"
          style="width:214px; height:19px"
        />
      </div>
      <p
        style="position:absolute;top:124px;left:546px;white-space:nowrap"
        class="ft25"
      >
        <b>(c)</b>&#160; &#160;Allocation start month
      </p>
      <div class="input-area" style="position:absolute;top:143px;left:542px">
        <select
          v-model="Irs8962.tartMonthNumberCd"
          v-uppercase
          name="state"
          title="Select State"
          style="width:160px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
          data-line-number="30c"
        >
          <option value=" "></option>
          <option v-for="month in months" :key="month" :value="month">{{
            month
          }}</option>
        </select>
      </div>
      <p
        style="position:absolute;top:126px;left:708px;white-space:nowrap"
        class="ft25"
      >
        <b>(d)</b>&#160; &#160;Allocation stop month
      </p>
      <div class="input-area" style="position:absolute;top:143px;left:704px">
        <select
          v-model="Irs8962.EndMonthNumberCd"
          v-uppercase
          name="state"
          title="Select State"
          style="width:160px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
          data-line-number="30d"
        >
          <option value=" "></option>
          <option v-for="month in months" :key="month" :value="month">{{
            month
          }}</option>
        </select>
      </div>
      <p
        style="position:absolute;top:174px;left:97px;white-space:nowrap"
        class="ft27"
      >
        <b
          >Allocation percentage&#160;<br />applied to monthly&#160;<br />amounts</b
        >
      </p>
      <p
        style="position:absolute;top:180px;left:286px;white-space:nowrap"
        class="ft25"
      >
        <b>(e)&#160;</b>Premium Percentage &#160; &#160; &#160; &#160; &#160;
        &#160;
      </p>
      <div class="input-area" style="position:absolute;top:217px;left:249px">
        <input
          id="MonthlyPremiumPct"
          v-model="Irs8962.MonthlyPremiumPct"
          v-mask="'##########'"
          name="MonthlyPremiumPct"
          data-line-number="30e"
          class="no-outline"
          type="text"
          style="width:204px; height:15px"
        />
      </div>
      <p
        style="position:absolute;top:180px;left:497px;white-space:nowrap"
        class="ft25"
      >
        <b>(f)&#160;</b>SLCSP Percentage &#160; &#160; &#160; &#160; &#160;
        &#160; &#160;
      </p>
      <div class="input-area" style="position:absolute;top:217px;left:454px">
        <input
          id="MonthlyPremiumSLCSPPct"
          v-model="Irs8962.MonthlyPremiumSLCSPPct"
          v-mask="'##########'"
          name="MonthlyPremiumSLCSPPct"
          data-line-number="30f"
          class="no-outline"
          type="text"
          style="width:203px; height:15px"
        />
      </div>
      <p
        style="position:absolute;top:172px;left:673px;white-space:nowrap"
        class="ft25"
      >
        <b>(g)&#160;</b>Advance Payment of the PTC&#160;
      </p>
      <div class="input-area" style="position:absolute;top:217px;left:659px">
        <input
          id="MonthlyAdvancedPTCPct"
          v-model="Irs8962.MonthlyAdvancedPTCPct"
          v-mask="'##########'"
          name="MonthlyAdvancedPTCPct"
          data-line-number="30g"
          class="no-outline"
          type="text"
          style="width:205px; height:15px"
        />
      </div>
      <p
        style="position:absolute;top:188px;left:731px;white-space:nowrap"
        class="ft23"
      >
        Percentage&#160;
      </p>
      <p
        style="position:absolute;top:235px;left:54px;white-space:nowrap"
        class="ft24"
      >
        <b>Allocation 2</b>
      </p>
      <p
        style="position:absolute;top:253px;left:62px;white-space:nowrap"
        class="ft25"
      >
        <b>31</b>
      </p>
      <p
        style="position:absolute;top:252px;left:97px;white-space:nowrap"
        class="ft25"
      >
        <b>(a)</b>&#160; &#160;Policy Number (Form 1095-A, line 2)
      </p>
      <div class="input-area" style="position:absolute;top:268px;left:97px">
        <input
          id="PolicyNum2"
          v-model="Irs8962.PolicyNum2"
          name="PolicyNum1"
          data-line-number="31a"
          class="no-outline"
          type="text"
          style="width:226px; height:19px"
        />
      </div>
      <p
        style="position:absolute;top:252px;left:330px;white-space:nowrap"
        class="ft25"
      >
        <b>(b)</b>&#160; &#160;SSN of other taxpayer&#160;
      </p>
      <div class="input-area" style="position:absolute;top:268px;left:325px">
        <input
          id="SSN2"
          v-model="Irs8962.SSN2"
          v-mask="'###-##-####'"
          name="SSN"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          data-line-number="31b"
          class="no-outline"
          type="text"
          style="width:214px; height:19px"
        />
      </div>
      <p
        style="position:absolute;top:252px;left:546px;white-space:nowrap"
        class="ft25"
      >
        <b>(c)</b>&#160; &#160;Allocation start month
      </p>
      <div class="input-area" style="position:absolute;top:268px;left:542px">
        <select
          v-model="Irs8962.tartMonthNumberCd2"
          v-uppercase
          name="state"
          title="Select State"
          style="width:160px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
          data-line-number="31c"
        >
          <option value=" "></option>
          <option v-for="month in months" :key="month" :value="month">{{
            month
          }}</option>
        </select>
      </div>
      <p
        style="position:absolute;top:252px;left:708px;white-space:nowrap"
        class="ft25"
      >
        <b>(d)</b>&#160; &#160;Allocation stop month
      </p>
      <div class="input-area" style="position:absolute;top:268px;left:704px">
        <select
          v-model="Irs8962.EndMonthNumberCd2"
          v-uppercase
          name="state"
          title="Select State"
          style="width:160px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
          data-line-number="31d"
        >
          <option value=" "></option>
          <option v-for="month in months" :key="month" :value="month">{{
            month
          }}</option>
        </select>
      </div>
      <p
        style="position:absolute;top:300px;left:97px;white-space:nowrap"
        class="ft27"
      >
        <b
          >Allocation percentage&#160;<br />applied to monthly&#160;<br />amounts</b
        >
      </p>
      <p
        style="position:absolute;top:306px;left:286px;white-space:nowrap"
        class="ft25"
      >
        <b>(e)&#160;</b>Premium Percentage &#160; &#160; &#160; &#160; &#160;
        &#160;
      </p>
      <div class="input-area" style="position:absolute;top:343px;left:249px">
        <input
          id="MonthlyPremiumPct2"
          v-model="Irs8962.MonthlyPremiumPct2"
          v-mask="'##########'"
          name="MonthlyPremiumPct"
          data-line-number="31e"
          class="no-outline"
          type="text"
          style="width:204px; height:15px"
        />
      </div>
      <p
        style="position:absolute;top:306px;left:497px;white-space:nowrap"
        class="ft25"
      >
        <b>(f)&#160;</b>SLCSP Percentage &#160; &#160; &#160; &#160; &#160;
        &#160; &#160;
      </p>
      <div class="input-area" style="position:absolute;top:343px;left:454px">
        <input
          id="MonthlyPremiumSLCSPPct2"
          v-model="Irs8962.MonthlyPremiumSLCSPPct2"
          v-mask="'##########'"
          name="MonthlyPremiumSLCSPPct2"
          data-line-number="31f"
          class="no-outline"
          type="text"
          style="width:203px; height:15px"
        />
      </div>
      <p
        style="position:absolute;top:298px;left:673px;white-space:nowrap"
        class="ft25"
      >
        <b>(g)&#160;</b>Advance Payment of the PTC&#160;
      </p>
      <div class="input-area" style="position:absolute;top:343px;left:659px">
        <input
          id="MonthlyAdvancedPTCPct2"
          v-model="Irs8962.MonthlyAdvancedPTCPct2"
          v-mask="'##########'"
          name="MonthlyAdvancedPTCPct2"
          data-line-number="31g"
          class="no-outline"
          type="text"
          style="width:205px; height:15px"
        />
      </div>
      <p
        style="position:absolute;top:314px;left:731px;white-space:nowrap"
        class="ft23"
      >
        Percentage&#160;
      </p>
      <p
        style="position:absolute;top:361px;left:54px;white-space:nowrap"
        class="ft24"
      >
        <b>Allocation 3</b>
      </p>
      <p
        style="position:absolute;top:379px;left:62px;white-space:nowrap"
        class="ft25"
      >
        <b>32</b>
      </p>
      <p
        style="position:absolute;top:378px;left:97px;white-space:nowrap"
        class="ft25"
      >
        <b>(a)</b>&#160; &#160;Policy Number (Form 1095-A, line 2)
      </p>
      <div class="input-area" style="position:absolute;top:394px;left:97px">
        <input
          id="PolicyNum3"
          v-model="Irs8962.PolicyNum3"
          name="PolicyNum1"
          data-line-number="32a"
          class="no-outline"
          type="text"
          style="width:226px; height:19px"
        />
      </div>
      <p
        style="position:absolute;top:378px;left:330px;white-space:nowrap"
        class="ft25"
      >
        <b>(b)</b>&#160; &#160;SSN of other taxpayer&#160;
      </p>
      <div class="input-area" style="position:absolute;top:394px;left:325px">
        <input
          id="SSN3"
          v-model="Irs8962.SSN3"
          v-mask="'###-##-####'"
          name="SSN3"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          data-line-number="32b"
          class="no-outline"
          type="text"
          style="width:214px; height:19px"
        />
      </div>
      <p
        style="position:absolute;top:378px;left:546px;white-space:nowrap"
        class="ft25"
      >
        <b>(c)</b>&#160; &#160;Allocation start month
      </p>
      <div class="input-area" style="position:absolute;top:394px;left:542px">
        <select
          v-model="Irs8962.tartMonthNumberCd3"
          v-uppercase
          name="state"
          title="Select State"
          style="width:160px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
          data-line-number="32c"
        >
          <option value=" "></option>
          <option v-for="month in months" :key="month" :value="month">{{
            month
          }}</option>
        </select>
      </div>
      <p
        style="position:absolute;top:378px;left:708px;white-space:nowrap"
        class="ft25"
      >
        <b>(d)</b>&#160; &#160;Allocation stop month
      </p>
      <div class="input-area" style="position:absolute;top:394px;left:704px">
        <select
          v-model="Irs8962.EndMonthNumberCd3"
          v-uppercase
          name="state"
          title="Select State"
          style="width:160px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
          data-line-number="32d"
        >
          <option value=" "></option>
          <option v-for="month in months" :key="month" :value="month">{{
            month
          }}</option>
        </select>
      </div>
      <p
        style="position:absolute;top:426px;left:97px;white-space:nowrap"
        class="ft27"
      >
        <b
          >Allocation percentage&#160;<br />applied to monthly&#160;<br />amounts</b
        >
      </p>
      <p
        style="position:absolute;top:432px;left:286px;white-space:nowrap"
        class="ft25"
      >
        <b>(e)&#160;</b>Premium Percentage &#160; &#160; &#160; &#160; &#160;
        &#160;
      </p>
      <div class="input-area" style="position:absolute;top:469px;left:249px">
        <input
          id="MonthlyPremiumPct"
          v-model="Irs8962.MonthlyPremiumPct3"
          v-mask="'##########'"
          name="MonthlyPremiumPct"
          data-line-number="32e"
          class="no-outline"
          type="text"
          style="width:204px; height:15px"
        />
      </div>
      <p
        style="position:absolute;top:432px;left:497px;white-space:nowrap"
        class="ft25"
      >
        <b>(f)&#160;</b>SLCSP Percentage &#160; &#160; &#160; &#160; &#160;
        &#160; &#160;
      </p>
      <div class="input-area" style="position:absolute;top:469px;left:454px">
        <input
          id="MonthlyPremiumSLCSPPct"
          v-model="Irs8962.MonthlyPremiumSLCSPPct3"
          v-mask="'##########'"
          name="MonthlyPremiumSLCSPPct"
          data-line-number="32f"
          class="no-outline"
          type="text"
          style="width:203px; height:15px"
        />
      </div>
      <p
        style="position:absolute;top:424px;left:673px;white-space:nowrap"
        class="ft25"
      >
        <b>(g)&#160;</b>Advance Payment of the PTC&#160;
      </p>
      <div class="input-area" style="position:absolute;top:469px;left:659px">
        <input
          id="MonthlyAdvancedPTCPct3"
          v-model="Irs8962.MonthlyAdvancedPTCPct3"
          v-mask="'##########'"
          name="MonthlyAdvancedPTCPct"
          data-line-number="32g"
          class="no-outline"
          type="text"
          style="width:205px; height:15px"
        />
      </div>
      <p
        style="position:absolute;top:440px;left:731px;white-space:nowrap"
        class="ft23"
      >
        Percentage&#160;
      </p>
      <p
        style="position:absolute;top:487px;left:54px;white-space:nowrap"
        class="ft24"
      >
        <b>Allocation 4</b>
      </p>
      <p
        style="position:absolute;top:505px;left:62px;white-space:nowrap"
        class="ft25"
      >
        <b>33</b>
      </p>
      <p
        style="position:absolute;top:504px;left:97px;white-space:nowrap"
        class="ft25"
      >
        <b>(a)</b>&#160; &#160;Policy Number (Form 1095-A, line 2)
      </p>
      <div class="input-area" style="position:absolute;top:520px;left:97px">
        <input
          id="PolicyNum4"
          v-model="Irs8962.PolicyNum4"
          name="PolicyNum4"
          data-line-number="33a"
          class="no-outline"
          type="text"
          style="width:226px; height:19px"
        />
      </div>
      <p
        style="position:absolute;top:504px;left:330px;white-space:nowrap"
        class="ft25"
      >
        <b>(b)</b>&#160; &#160;SSN of other taxpayer&#160;
      </p>
      <div class="input-area" style="position:absolute;top:520px;left:325px">
        <input
          id="SSN4"
          v-model="Irs8962.SSN4"
          v-mask="'###-##-####'"
          name="SSN4"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          data-line-number="33b"
          class="no-outline"
          type="text"
          style="width:214px; height:19px"
        />
      </div>
      <p
        style="position:absolute;top:504px;left:546px;white-space:nowrap"
        class="ft25"
      >
        <b>(c)</b>&#160; &#160;Allocation start month
      </p>
      <div class="input-area" style="position:absolute;top:520px;left:542px">
        <select
          v-model="Irs8962.tartMonthNumberCd4"
          v-uppercase
          name="state"
          title="Select State"
          style="width:160px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
          data-line-number="33c"
        >
          <option value=" "></option>
          <option v-for="month in months" :key="month" :value="month">{{
            month
          }}</option>
        </select>
      </div>
      <p
        style="position:absolute;top:504px;left:708px;white-space:nowrap"
        class="ft25"
      >
        <b>(d)</b>&#160; &#160;Allocation stop month
      </p>
      <div class="input-area" style="position:absolute;top:520px;left:704px">
        <select
          v-model="Irs8962.EndMonthNumberCd4"
          v-uppercase
          name="state"
          title="Select State"
          style="width:160px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
          data-line-number="33d"
        >
          <option value=" "></option>
          <option v-for="month in months" :key="month" :value="month">{{
            month
          }}</option>
        </select>
      </div>
      <p
        style="position:absolute;top:552px;left:97px;white-space:nowrap"
        class="ft27"
      >
        <b
          >Allocation percentage&#160;<br />applied to monthly&#160;<br />amounts</b
        >
      </p>
      <p
        style="position:absolute;top:558px;left:286px;white-space:nowrap"
        class="ft25"
      >
        <b>(e)&#160;</b>Premium Percentage &#160; &#160; &#160; &#160; &#160;
        &#160;
      </p>
      <div class="input-area" style="position:absolute;top:596px;left:249px">
        <input
          id="MonthlyPremiumPct4"
          v-model="Irs8962.MonthlyPremiumPct4"
          v-mask="'##########'"
          name="MonthlyPremiumPct"
          data-line-number="33e"
          class="no-outline"
          type="text"
          style="width:204px; height:15px"
        />
      </div>
      <p
        style="position:absolute;top:558px;left:497px;white-space:nowrap"
        class="ft25"
      >
        <b>(f)&#160;</b>SLCSP Percentage &#160; &#160; &#160; &#160; &#160;
        &#160; &#160;
      </p>
      <div class="input-area" style="position:absolute;top:596px;left:454px">
        <input
          id="MonthlyPremiumSLCSPPct4"
          v-model="Irs8962.MonthlyPremiumSLCSPPct4"
          v-mask="'##########'"
          name="MonthlyPremiumSLCSPPct4"
          data-line-number="33f"
          class="no-outline"
          type="text"
          style="width:203px; height:15px"
        />
      </div>
      <p
        style="position:absolute;top:550px;left:673px;white-space:nowrap"
        class="ft25"
      >
        <b>(g)&#160;</b>Advance Payment of the PTC&#160;
      </p>
      <div class="input-area" style="position:absolute;top:596px;left:659px">
        <input
          id="MonthlyAdvancedPTCPct4"
          v-model="Irs8962.MonthlyAdvancedPTCPct4"
          v-mask="'##########'"
          name="MonthlyAdvancedPTCPct4"
          data-line-number="32g"
          class="no-outline"
          type="text"
          style="width:205px; height:15px"
        />
      </div>
      <p
        style="position:absolute;top:566px;left:731px;white-space:nowrap"
        class="ft23"
      >
        Percentage&#160;
      </p>
      <p
        style="position:absolute;top:615px;left:62px;white-space:nowrap"
        class="ft25"
      >
        <b>34</b>
      </p>
      <p
        style="position:absolute;top:615px;left:97px;white-space:nowrap"
        class="ft23"
      >
        Have you completed all policy amount allocations?
      </p>
      <p
        style="position:absolute;top:633px;left:119px;white-space:nowrap"
        class="ft25"
      >
        <b>Yes.&#160;</b
        >Multiply&#160;the&#160;amounts&#160;on&#160;Form&#160;1095-A&#160;by&#160;the&#160;allocation&#160;percentages&#160;entered&#160;by&#160;policy.&#160;Add&#160;all&#160;allocated&#160;policy&#160;amounts&#160;and&#160;non-
      </p>
      <p
        style="position:absolute;top:648px;left:97px;white-space:nowrap"
        class="ft28"
      >
        allocated&#160;policy&#160;amounts&#160;from&#160;Forms&#160;1095-A,&#160;if&#160;any,&#160;to&#160;compute&#160;a&#160;combined&#160;total&#160;for&#160;each&#160;month.&#160;Enter&#160;the&#160;combined&#160;total&#160;for&#160;each&#160;month&#160;on&#160;<br />lines
        12–23, columns (a), (b), and (f). Compute the amounts for lines 12–23,
        columns (c)–(e), and continue to line 24.
      </p>
      <label
        style="position:absolute;top:630px;left:98px;"
        class="checkbox-container"
      >
        <input
          id="SharedPolicyAllocationInfoInd"
          v-model="Irs8962.SharedPolicyAllocationInfoInd"
          name="SharedPolicyAllocationInfoInd"
          class="no-outline checkbox"
          type="radio"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:687px;left:119px;white-space:nowrap"
        class="ft25"
      >
        <b>No.&#160;</b>See the instructions to report additional policy amount
        allocations.
      </p>
      <label
        style="position:absolute;top:686px;left:98px;"
        class="checkbox-container"
      >
        <input
          id="SharedPolicyAllocationInfoInd"
          v-model="Irs8962.SharedPolicyAllocationInfoInd"
          name="SharedPolicyAllocationInfoInd"
          class="no-outline checkbox"
          type="radio"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:721px;left:59px;white-space:nowrap"
        class="ft22"
      >
        <b>Part V</b>
      </p>
      <p
        style="position:absolute;top:721px;left:129px;white-space:nowrap"
        class="ft21"
      >
        <b>Alternative Calculation for Year of Marriage</b>
      </p>
      <p
        style="position:absolute;top:740px;left:54px;white-space:nowrap"
        class="ft28"
      >
        Complete&#160;line(s)&#160;35&#160;and/or&#160;36&#160;to&#160;elect&#160;the&#160;alternative&#160;calculation&#160;for&#160;year&#160;of&#160;marriage.&#160;For&#160;eligibility&#160;to&#160;make&#160;the&#160;election,&#160;see&#160;the&#160;instructions&#160;for&#160;line&#160;9.&#160;<br />To
        complete line(s) 35 and/or 36 and compute the amounts for lines 12–23,
        see the instructions for this Part V.
      </p>
      <p
        style="position:absolute;top:785px;left:62px;white-space:nowrap"
        class="ft25"
      >
        <b>35&#160;</b>
      </p>
      <p
        style="position:absolute;top:799px;left:76px;white-space:nowrap"
        class="ft25"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:784px;left:97px;white-space:nowrap"
        class="ft27"
      >
        <b>Alternative entries&#160;<br />for your SSN</b>
      </p>
      <p
        style="position:absolute;top:774px;left:222px;white-space:nowrap"
        class="ft25"
      >
        <b>(a)</b>&#160; &#160;Alternative family
        size&#160;&#160;&#160;&#160;<b>(b)</b>&#160; &#160;Alternative
        monthly&#160;
      </p>
      <money-input
        id="AltCalcForMarriagePrimaryGrp"
        v-model="Irs8962.AltCalcForMarriagePrimaryGrp.familySizeCnt"
        name="AltCalcForMarriagePrimaryGrp"
        :line="'35a'"
        :width="150"
        :div-style="'position:absolute;top:810px;left:217px'"
      />
      <p
        style="position:absolute;top:789px;left:373px;white-space:nowrap"
        class="ft23"
      >
        contribution amount
      </p>
      <money-input
        id="monthlyContributionAmt"
        v-model="Irs8962.AltCalcForMarriagePrimaryGrp.monthlyContributionAmt"
        name="monthlyContributionAmt"
        :line="'35b'"
        :width="150"
        :div-style="'position:absolute;top:810px;left:368px'"
      />
      <p
        style="position:absolute;top:774px;left:524px;white-space:nowrap"
        class="ft25"
      >
        <b>(c)</b>&#160; &#160;Alternative start month
      </p>
      <div class="input-area" style="position:absolute;top:809px;left:520px">
        <select
          v-model="Irs8962.AltCalcForMarriagePrimaryGrp.startMonthNumberCd"
          v-uppercase
          name="startMonthNumberCd"
          title="Select State"
          style="width:172px;height:19px;border:none;background-color: #f1f4ff;"
          class="no-outline"
          data-line-number="35c"
        >
          <option value=" "></option>
          <option v-for="month in months" :key="month" :value="month">{{
            month
          }}</option>
        </select>
      </div>
      <p
        style="position:absolute;top:774px;left:697px;white-space:nowrap"
        class="ft25"
      >
        <b>(d)</b>&#160; &#160;Alternative stop month
      </p>
      <div class="input-area" style="position:absolute;top:809px;left:694px">
        <select
          v-model="Irs8962.AltCalcForMarriagePrimaryGrp.endMonthNumberCd"
          v-uppercase
          name="endMonthNumberCd"
          title="Select Month"
          style="width:172px;height:19px;border:none;background-color: #f1f4ff;"
          class="no-outline"
          data-line-number="35d"
        >
          <option value=" "></option>
          <option v-for="month in months" :key="month" :value="month">{{
            month
          }}</option>
        </select>
      </div>
      <p
        style="position:absolute;top:838px;left:62px;white-space:nowrap"
        class="ft25"
      >
        <b>36&#160;</b>
      </p>
      <money-input
        id="familySizeCnt1"
        v-model="Irs8962.AltCalcForMarriageSpouseGrp.familySizeCnt"
        name="familySizeCnt1"
        :line="'36a'"
        :width="150"
        :div-style="'position:absolute;top:865px;left:217px'"
      />
      <p
        style="position:absolute;top:852px;left:76px;white-space:nowrap"
        class="ft29"
      >
        <b>&#160;&#160;<br />&#160;</b>
      </p>
      <p
        style="position:absolute;top:837px;left:97px;white-space:nowrap"
        class="ft27"
      >
        <b>Alternative entries&#160;<br />for your spouse’s&#160;<br />SSN</b>
      </p>
      <p
        style="position:absolute;top:831px;left:222px;white-space:nowrap"
        class="ft25"
      >
        <b>(a)</b>&#160; &#160;Alternative family
        size&#160;&#160;&#160;&#160;<b>(b)</b>&#160; &#160;Alternative
        monthly&#160;
      </p>
      <money-input
        id="monthlyContributionAmt"
        v-model="Irs8962.AltCalcForMarriageSpouseGrp.monthlyContributionAmt"
        name="monthlyContributionAmt"
        :line="'36b'"
        :width="150"
        :div-style="'position:absolute;top:865px;left:368px'"
      />
      <p
        style="position:absolute;top:843px;left:373px;white-space:nowrap"
        class="ft23"
      >
        contribution amount
      </p>
      <p
        style="position:absolute;top:831px;left:524px;white-space:nowrap"
        class="ft25"
      >
        <b>(c)</b>&#160; &#160;Alternative start month
      </p>
      <div class="input-area" style="position:absolute;top:863px;left:520px">
        <select
          v-model="Irs8962.AltCalcForMarriageSpouseGrp.startMonthNumberCd"
          v-uppercase
          name="startMonthNumberCd"
          title="Select Month"
          style="width:172px;height:19px;border:none;background-color: #f1f4ff;"
          class="no-outline"
          data-line-number="36c"
        >
          <option value=" "></option>
          <option v-for="month in months" :key="month" :value="month">{{
            month
          }}</option>
        </select>
      </div>
      <p
        style="position:absolute;top:831px;left:697px;white-space:nowrap"
        class="ft25"
      >
        <b>(d)</b>&#160; &#160;Alternative stop month
      </p>
      <div class="input-area" style="position:absolute;top:863px;left:694px">
        <select
          v-model="Irs8962.AltCalcForMarriageSpouseGrp.endMonthNumberCd"
          v-uppercase
          name="endMonthNumberCd"
          title="Select Month"
          style="width:172px;height:19px;border:none;background-color: #f1f4ff;"
          class="no-outline"
          data-line-number="36d"
        >
          <option value=" "></option>
          <option v-for="month in months" :key="month" :value="month">{{
            month
          }}</option>
        </select>
      </div>
      <p
        style="position:absolute;top:886px;left:770px;white-space:nowrap"
        class="ft20"
      >
        Form&#160;
      </p>
      <p
        style="position:absolute;top:881px;left:798px;white-space:nowrap"
        class="ft21"
      >
        <b>8962&#160;</b>(2019)&#160;
      </p>
    </div>
  </div>
</template>
<script>
import { formService } from '~/services/form-service'
import MoneyInput from '~/components/Currency/MoneyInput'
import { months } from '~/services/months'
import { IRS8962_UPDATED, IRS1040_UPDATED } from '~/events/event'
export default {
  components: { MoneyInput },
  data() {
    return {
      Irs8962: {
        QSEHRAInd: false,
        AnnualPTCCalculationGrp: {},
        AltCalcForMarriagePrimaryGrp: {},
        AltCalcForMarriageGrpType: {},
        AltCalcForMarriageSpouseGrp: {},
        SharedPolicyAllocationGrp: []
      },
      applicableFigureRates: [
        { amount: 133, rate: 0.0208 },
        { amount: 133, rate: 0.0311 },
        { amount: 134, rate: 0.0317 },
        { amount: 135, rate: 0.0323 },
        { amount: 136, rate: 0.0329 },
        { amount: 137, rate: 0.0335 },
        { amount: 138, rate: 0.0342 },
        { amount: 139, rate: 0.0348 },
        { amount: 140, rate: 0.0354 },
        { amount: 141, rate: 0.036 },
        { amount: 142, rate: 0.0366 },
        { amount: 143, rate: 0.0372 },
        { amount: 144, rate: 0.0378 },
        { amount: 145, rate: 0.0384 },
        { amount: 146, rate: 0.0391 },
        { amount: 147, rate: 0.0397 },
        { amount: 148, rate: 0.0403 },
        { amount: 149, rate: 0.0409 },
        { amount: 150, rate: 0.0415 },
        { amount: 151, rate: 0.042 },
        { amount: 152, rate: 0.0425 },
        { amount: 153, rate: 0.0429 },
        { amount: 154, rate: 0.0434 },
        { amount: 155, rate: 0.0439 },
        { amount: 156, rate: 0.0444 },
        { amount: 157, rate: 0.0448 },
        { amount: 158, rate: 0.0453 },
        { amount: 159, rate: 0.0458 },
        { amount: 160, rate: 0.0463 },
        { amount: 161, rate: 0.0468 },
        { amount: 162, rate: 0.0472 },
        { amount: 163, rate: 0.0477 },
        { amount: 164, rate: 0.0482 },
        { amount: 165, rate: 0.0487 },
        { amount: 166, rate: 0.0491 },
        { amount: 167, rate: 0.0496 },
        { amount: 168, rate: 0.0501 },
        { amount: 169, rate: 0.0506 },
        { amount: 170, rate: 0.0511 },
        { amount: 171, rate: 0.0515 },
        { amount: 172, rate: 0.052 },
        { amount: 173, rate: 0.0525 },
        { amount: 174, rate: 0.053 },
        { amount: 175, rate: 0.0535 },
        { amount: 176, rate: 0.0539 },
        { amount: 177, rate: 0.0544 },
        { amount: 178, rate: 0.0549 },
        { amount: 179, rate: 0.0554 },
        { amount: 180, rate: 0.0558 },
        { amount: 181, rate: 0.0563 },
        { amount: 182, rate: 0.0568 },
        { amount: 183, rate: 0.0573 },
        { amount: 184, rate: 0.0578 },
        { amount: 185, rate: 0.0582 },
        { amount: 186, rate: 0.0587 },
        { amount: 187, rate: 0.0592 },
        { amount: 188, rate: 0.0597 },
        { amount: 189, rate: 0.0601 },
        { amount: 190, rate: 0.0606 },
        { amount: 191, rate: 0.0611 },
        { amount: 192, rate: 0.0616 },
        { amount: 193, rate: 0.0621 },
        { amount: 194, rate: 0.0625 },
        { amount: 195, rate: 0.063 },
        { amount: 196, rate: 0.0635 },
        { amount: 197, rate: 0.064 },
        { amount: 198, rate: 0.0644 },
        { amount: 199, rate: 0.0649 },
        { amount: 200, rate: 0.0654 },
        { amount: 201, rate: 0.0658 },
        { amount: 202, rate: 0.0661 },
        { amount: 203, rate: 0.0665 },
        { amount: 204, rate: 0.0669 },
        { amount: 205, rate: 0.0672 },
        { amount: 206, rate: 0.0676 },
        { amount: 207, rate: 0.0679 },
        { amount: 208, rate: 0.0683 },
        { amount: 209, rate: 0.0687 },
        { amount: 210, rate: 0.069 },
        { amount: 211, rate: 0.0694 },
        { amount: 212, rate: 0.0698 },
        { amount: 213, rate: 0.0701 },
        { amount: 214, rate: 0.0705 },
        { amount: 215, rate: 0.0709 },
        { amount: 216, rate: 0.0712 },
        { amount: 217, rate: 0.0716 },
        { amount: 218, rate: 0.072 },
        { amount: 219, rate: 0.0723 },
        { amount: 220, rate: 0.0727 },
        { amount: 221, rate: 0.073 },
        { amount: 222, rate: 0.0734 },
        { amount: 223, rate: 0.0738 },
        { amount: 224, rate: 0.0741 },
        { amount: 225, rate: 0.0745 },
        { amount: 226, rate: 0.0749 },
        { amount: 227, rate: 0.0752 },
        { amount: 228, rate: 0.0756 },
        { amount: 229, rate: 0.076 },
        { amount: 230, rate: 0.0763 },
        { amount: 231, rate: 0.0767 },
        { amount: 232, rate: 0.077 },
        { amount: 233, rate: 0.0774 },
        { amount: 234, rate: 0.0778 },
        { amount: 235, rate: 0.0781 },
        { amount: 236, rate: 0.0785 },
        { amount: 237, rate: 0.0789 },
        { amount: 238, rate: 0.0792 },
        { amount: 239, rate: 0.0796 },
        { amount: 240, rate: 0.08 },
        { amount: 241, rate: 0.0803 },
        { amount: 242, rate: 0.0807 },
        { amount: 243, rate: 0.0811 },
        { amount: 244, rate: 0.0814 },
        { amount: 245, rate: 0.0818 },
        { amount: 246, rate: 0.0821 },
        { amount: 247, rate: 0.0825 },
        { amount: 248, rate: 0.0829 },
        { amount: 249, rate: 0.0832 },
        { amount: 250, rate: 0.0836 },
        { amount: 251, rate: 0.0839 },
        { amount: 252, rate: 0.0842 },
        { amount: 253, rate: 0.0845 },
        { amount: 254, rate: 0.0848 },
        { amount: 255, rate: 0.0851 },
        { amount: 256, rate: 0.0854 },
        { amount: 257, rate: 0.0857 },
        { amount: 258, rate: 0.086 },
        { amount: 259, rate: 0.0863 },
        { amount: 260, rate: 0.0866 },
        { amount: 261, rate: 0.0869 },
        { amount: 262, rate: 0.0872 },
        { amount: 263, rate: 0.0875 },
        { amount: 264, rate: 0.0878 },
        { amount: 265, rate: 0.0881 },
        { amount: 266, rate: 0.0884 },
        { amount: 267, rate: 0.0887 },
        { amount: 268, rate: 0.089 },
        { amount: 269, rate: 0.0893 },
        { amount: 270, rate: 0.0896 },
        { amount: 271, rate: 0.0899 },
        { amount: 272, rate: 0.0902 },
        { amount: 273, rate: 0.0905 },
        { amount: 274, rate: 0.0908 },
        { amount: 275, rate: 0.0911 },
        { amount: 276, rate: 0.0914 },
        { amount: 277, rate: 0.0917 },
        { amount: 278, rate: 0.092 },
        { amount: 279, rate: 0.0923 },
        { amount: 280, rate: 0.0926 },
        { amount: 281, rate: 0.0929 },
        { amount: 282, rate: 0.0932 },
        { amount: 283, rate: 0.0935 },
        { amount: 284, rate: 0.0938 },
        { amount: 285, rate: 0.0941 },
        { amount: 286, rate: 0.0944 },
        { amount: 287, rate: 0.0947 },
        { amount: 288, rate: 0.095 },
        { amount: 289, rate: 0.0953 },
        { amount: 290, rate: 0.0956 },
        { amount: 291, rate: 0.0959 },
        { amount: 292, rate: 0.0962 },
        { amount: 293, rate: 0.0965 },
        { amount: 294, rate: 0.0968 },
        { amount: 295, rate: 0.0971 },
        { amount: 296, rate: 0.0974 },
        { amount: 297, rate: 0.0977 },
        { amount: 298, rate: 0.098 },
        { amount: 299, rate: 0.0983 },
        { amount: 300, rate: 0.0986 }
      ],
      months
    }
  },
  mounted() {
    this.Irs8962.name =
      this.$store.state.attachments.Irs1040.firstName +
      ' ' +
      this.$store.state.attachments.Irs1040.lastName
    this.Irs8962.ssn = this.$store.state.attachments.Irs1040.ssn
    this.Irs8962.ModifiedAGIAmt = this.$store.state.attachments.Irs1040.AdjustedGrossIncomeAmt
    formService.$on(IRS1040_UPDATED, (data) => {
      if (data) {
        this.Irs8962.ModifiedAGIAmt = data.AdjustedGrossIncomeAmt
        this.Irs8962.name = data.firstName + ' ' + data.lastName
        this.Irs8962.ssn = this.$store.state.attachments.Irs1040.ssn
      }
    })
  },
  methods: {
    Irs8962Updated() {
      formService.$emit(IRS8962_UPDATED, this.Irs8962)
    },
    line3Calculation() {
      const line2a = this.Irs8962.ModifiedAGIAmt ?? 0
      const line2b = this.Irs8962.TotalDependentsModifiedAGIAmt ?? 0
      this.Irs8962.HouseholdIncomeAmt = line2a + line2b
    },
    // Federal poverty line 4 function
    federalPovertyCalculation() {
      // Alaska = A, Hawaii = B and Other 48 states and DC = C
      let PovertyLevelAmt = 0
      // PovertyLevelAmt for Alaska = B
      if (this.Irs8962.FederalPovertyTableLocCd === 'A') {
        switch (this.Irs8962.TotalExemptionsCnt) {
          case '1':
            PovertyLevelAmt = 15180
            break
          case '2':
            PovertyLevelAmt = 20580
            break
          case '3':
            PovertyLevelAmt = 25980
            break
          case '4':
            PovertyLevelAmt = 31380
            break
          case '5':
            PovertyLevelAmt = 36780
            break
          case '6':
            PovertyLevelAmt = 42180
            break
          case '7':
            PovertyLevelAmt = 47580
            break
          case '8':
            PovertyLevelAmt = 52980
            break
          default:
            if (parseInt(this.Irs8962.TotalExemptionsCnt) > 8) {
              const additional = parseInt(this.Irs8962.TotalExemptionsCnt) - 8
              const result = additional * 5400
              PovertyLevelAmt = result + 52980
            }
        }
      }
      // PovertyLevelAmt for Hawaii = B
      if (this.Irs8962.FederalPovertyTableLocCd === 'B') {
        switch (this.Irs8962.TotalExemptionsCnt) {
          case '1':
            PovertyLevelAmt = 13960
            break
          case '2':
            PovertyLevelAmt = 18930
            break
          case '3':
            PovertyLevelAmt = 23900
            break
          case '4':
            PovertyLevelAmt = 28870
            break
          case '5':
            PovertyLevelAmt = 33840
            break
          case '6':
            PovertyLevelAmt = 38810
            break
          case '7':
            PovertyLevelAmt = 43780
            break
          case '8':
            PovertyLevelAmt = 48750
            break
          default:
            if (parseInt(this.Irs8962.TotalExemptionsCnt) > 8) {
              const additional = parseInt(this.Irs8962.TotalExemptionsCnt) - 8
              const result = additional * 4970
              PovertyLevelAmt = result + 48750
            }
        }
      }
      // PovertyLevelAmt for Other 48 states and DC
      if (this.Irs8962.FederalPovertyTableLocCd === 'C') {
        switch (this.Irs8962.TotalExemptionsCnt) {
          case '1':
            PovertyLevelAmt = 12140
            break
          case '2':
            PovertyLevelAmt = 16460
            break
          case '3':
            PovertyLevelAmt = 20780
            break
          case '4':
            PovertyLevelAmt = 25100
            break
          case '5':
            PovertyLevelAmt = 29420
            break
          case '6':
            PovertyLevelAmt = 33740
            break
          case '7':
            PovertyLevelAmt = 38060
            break
          case '8':
            PovertyLevelAmt = 42380
            break
          default:
            if (parseInt(this.Irs8962.TotalExemptionsCnt) > 8) {
              const additional = parseInt(this.Irs8962.TotalExemptionsCnt) - 8
              const result = additional * 4320
              PovertyLevelAmt = result + 42380
            }
        }
      }
      this.Irs8962.PovertyLevelAmt = PovertyLevelAmt
    },
    line8Calculation() {
      const line3 = this.Irs8962.HouseholdIncomeAmt ?? 0
      const line7 = this.Irs8962.ApplicableFigureRt ?? 0
      const result = line3 * line7
      this.Irs8962.AnnualContributionAmt = result.toFixed()
      this.Irs8962.AnnualPTCCalculationGrp.AnnualContributionAmt = result.toFixed()
    },
    line8BCalculation() {
      const line8a = this.Irs8962.AnnualContributionAmt ?? 0
      const result = line8a / 12
      this.Irs8962.MonthlyContriHealthCareCvrAmt = result.toFixed()
    },
    line11dCalculation() {
      const line11c =
        this.Irs8962.AnnualPTCCalculationGrp.AnnualContributionAmt ?? 0
      const line11b =
        this.Irs8962.AnnualPTCCalculationGrp.AnnualPremiumSLCSPAmt ?? 0
      const result = line11b - line11c
      if (result > 0) {
        this.Irs8962.AnnualPTCCalculationGrp.AnnualMaxPremiumAssistanceAmt = result
      } else {
        this.Irs8962.AnnualPTCCalculationGrp.AnnualMaxPremiumAssistanceAmt = 0
      }
    },
    line11eCalculation() {
      let result
      const line11a = this.Irs8962.AnnualPTCCalculationGrp.AnnualPremiumAmt ?? 0
      const line11d =
        this.Irs8962.AnnualPTCCalculationGrp.AnnualMaxPremiumAssistanceAmt ?? 0
      if (parseInt(line11a) < parseInt(line11d)) result = line11a
      if (parseInt(line11d) < parseInt(line11a)) result = line11d
      this.Irs8962.AnnualPTCCalculationGrp.AnnualPremiumTaxCreditAllwAmt = result
    },
    line24Calculation() {
      const line11e =
        this.Irs8962.AnnualPTCCalculationGrp.AnnualPremiumTaxCreditAllwAmt ?? 0
      this.Irs8962.TotalPremiumTaxCreditAmt = line11e
    },
    line25Calculation() {
      const line11f =
        this.Irs8962.AnnualPTCCalculationGrp.AnnualAdvancedPTCAmt ?? 0
      this.Irs8962.TotalAdvancedPTCAmt = line11f
    },
    line26Calculation() {
      this.Irs8962.ReconciledPremiumTaxCreditAmt = 0
      this.Irs8962.ExcessAdvncPaymentAmt = 0
      const line24 = this.Irs8962.TotalPremiumTaxCreditAmt ?? 0
      const line25 = this.Irs8962.TotalAdvancedPTCAmt ?? 0
      let result = 0
      if (line24 > line25) {
        result = line24 - line25
        this.Irs8962.ReconciledPremiumTaxCreditAmt = result
      } else {
        result = line25 - line24
        this.Irs8962.ExcessAdvncPaymentAmt = result
      }
    },
    line29Calculation() {
      this.Irs8962.PremiumTaxCreditTaxLiabAmt = 0
      const line27 = this.Irs8962.ExcessAdvncPaymentAmt ?? 0
      const line28 = this.Irs8962.AdditionalTaxLimitationAmt ?? 0
      const result = line27 > line28 ? line28 : line27
      this.Irs8962.PremiumTaxCreditTaxLiabAmt = result
    },
    // line 5 function
    line5Calculation() {
      // line 5 = (line 3 / line 4) * 100
      this.Irs8962.FederalPovertyLevelPct = 0
      const line3 = this.Irs8962.HouseholdIncomeAmt ?? 0
      const line4 = this.Irs8962.PovertyLevelAmt ?? 0
      let result = (line3 / line4) * 100
      result = parseInt(result)
      if (!isNaN(result) && isFinite(result)) {
        this.Irs8962.FederalPovertyLevelPct = result
      }
    },
    line7Calculation() {
      let result = 0
      const line5 = parseInt(this.Irs8962.FederalPovertyLevelPct)

      if (line5 === 0) {
        this.Irs8962.ApplicableFigureRt = result
        return
      }

      if (line5 < 133) result = this.applicableFigureRates[0].rate
      else if (line5 >= 300 && line5 < 400)
        result = this.applicableFigureRates[
          this.applicableFigureRates.length - 1
        ].rate
      else {
        const searchArray = this.applicableFigureRates
        const q = searchArray.filter((item) => {
          return item.amount === line5
        })[0]
        result = q.rate
      }

      this.Irs8962.ApplicableFigureRt = result
    },
    calculate() {
      this.federalPovertyCalculation()
      this.line3Calculation()
      this.line5Calculation()
      this.line7Calculation()
      this.line8Calculation()
      this.line8BCalculation()
      this.line11dCalculation()
      this.line11eCalculation()
      this.line24Calculation()
      this.line25Calculation()
      this.line26Calculation()
      this.line29Calculation()
    },
    onInputChange(evt) {
      this.calculate()
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
  background-image: url('../../static/form-assets/irs8962001.png');
}
#page2-div {
  background-image: url('../../static/form-assets/irs8962002.png');
}
.ft12 {
  font-size: 20px;
  font-weight: bold;
}
.ft11,
.ft16 {
  font-size: 30px;
}
.year {
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
.ft19,
.ft22 {
  margin-top: 2px;
  color: white;
}
</style>
