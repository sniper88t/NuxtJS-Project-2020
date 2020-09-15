<template>
  <!-- ==================== IRS Form 1040 Schedule 3 ==================== -->
  <div
    id="pdf-pages"
    style="font-size: 11px;
    font-family: QuickType, Arial, Helvetica, sans-serif"
  >
    <div id="page1-div" style="position:relative;width:918px;height:550px;">
      <!-- <img
        width="918"
        height="1188"
        src="../../static/form-assets/schedule3.png"
      /> -->
      <p
        style="position:absolute;top:52px;left:54px;white-space:nowrap"
        class="ft113"
      >
        <b
          ><span style="font-size:15px; font-weight:600">SCHEDULE 3</span
          >&#160;<br /><span style="font-size:11px;"
            >(Form 1040 or 1040-SR)</span
          >&#160;</b
        >
      </p>
      <p
        style="position:absolute;top:97px;left:54px;white-space:nowrap;font-size:10px;"
        class="ft114"
      >
        Department of the Treasury &#160;<br />Internal Revenue Service &#160;
      </p>
      <p
        style="position:absolute;top:58px;left:305px;white-space:nowrap"
        class="ft13"
      >
        Additional Credits and Payments
      </p>
      <p
        style="position:absolute;top:94px;left:361px;white-space:nowrap"
        class="ft14"
      >
        ▶&#160;
      </p>
      <p
        style="position:absolute;top:92px;left:372px;white-space:nowrap"
        class="ft11"
      >
        <b>Attach to Form 1040 or 1040-SR.</b>&#160;
      </p>
      <p
        style="position:absolute;top:110px;left:246px;white-space:nowrap"
        class="ft14"
      >
        &#160;▶
      </p>
      <p
        style="position:absolute;top:107px;left:258px;white-space:nowrap"
        class="ft11"
      >
        <b>&#160;Go to&#160;<i>www.irs.gov/Form1040</i></b
        ><b>&#160;for instructions and the latest information.</b>
      </p>
      <p
        style="position:absolute;top:55px;left:750px;white-space:nowrap"
        class="ft12"
      >
        OMB No. 1545-1736
      </p>
      <p
        style="position:absolute;top:70px;left:760px;white-space:nowrap"
        class="ft17"
      >
        <strong><span class="year">20</span>19</strong>
      </p>
      <p
        style="position:absolute;top:101px;left:752px;white-space:nowrap"
        class="ft12"
      >
        Attachment &#160;&#160;
      </p>
      <p
        style="position:absolute;top:112px;left:752px;white-space:nowrap"
        class="ft12"
      >
        Sequence No.&#160;
      </p>
      <p
        style="position:absolute;top:111px;left:822px;white-space:nowrap;font-size:13px"
        class="ft10"
      >
        <b>03</b>&#160;
      </p>
      <p
        style="position:absolute;top:129px;left:54px;white-space:nowrap"
        class="ft12"
      >
        Name(s) shown on Form 1040 or 1040-SR
      </p>
      <div class="input-area" style="position:absolute;top:142px;left:54px">
        <input
          id="name"
          v-model="Irs1040Schedule3.name"
          v-uppercase
          name="name"
          class="no-outline"
          type="text"
          readonly
          style="width:647px;"
        />
      </div>
      <p
        style="position:absolute;top:128px;left:708px;white-space:nowrap"
        class="ft19"
      >
        <b>Your social security number</b>
      </p>
      <div class="input-area" style="position:absolute;top:142px;left:704px">
        <input
          id="ssn"
          v-model="Irs1040Schedule3.ssn"
          v-mask="'###-##-####'"
          name="ssn"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          class="no-outline"
          type="password"
          readonly
          style="width:161px;"
        />
      </div>
      <p
        style="position:absolute;top:164px;left:62px;white-space:nowrap;color:white"
        class="ft110"
      >
        <b>Part I&#160;</b>
      </p>
      <p
        style="position:absolute;top:165px;left:129px;white-space:nowrap"
        class="ft10"
      >
        <b>Nonrefundable Credits</b>
      </p>
      <p
        style="position:absolute;top:181px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>1</b>
      </p>
      <!-- Foreign Tax Credit Amount -->
      <!-- <div class="input-area" style="position:absolute;top:181px;left:757px"> -->
      <money-input
        v-model="Irs1040Schedule3.ForeignTaxCreditAmt"
        name="ForeignTaxCreditAmt"
        :div-style="'position:absolute;top:181px;left:757px'"
        :line="'1'"
        @change.native="line7Calculation"
      />
      <!-- </div> -->
      <div class="input-area" style="position:absolute;top:181px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 1. Add Form 1116."
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addForm1116()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:181px;left:97px;white-space:nowrap"
        class="ft112"
      >
        Foreign tax credit. Attach Form 1116 if
        required&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:181px;left:736px;white-space:nowrap"
        class="ft111"
      >
        <b>1</b>
      </p>
      <p
        style="position:absolute;top:199px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>2</b>
      </p>
      <!-- Credit For Child And Dependent Care Amount -->
      <money-input
        v-model="Irs1040Schedule3.CreditForChildAndDepdCareAmt"
        name="CreditForChildAndDepdCareAmt"
        :div-style="'position:absolute;top:199px;left:757px'"
        :line="'2'"
        @change.native="line7Calculation"
      />
      <p
        style="position:absolute;top:199px;left:97px;white-space:nowrap"
        class="ft112"
      >
        Credit for child and dependent care expenses. Attach Form
        2441&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:199px;left:736px;white-space:nowrap"
        class="ft111"
      >
        <b>2</b>
      </p>
      <div class="input-area" style="position:absolute;top:199px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 2. Add Form 2441."
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addForm2441()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:217px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>3</b>
      </p>
      <p
        style="position:absolute;top:217px;left:97px;white-space:nowrap"
        class="ft112"
      >
        Education credits from Form 8863, line
        19&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:217px;left:736px;white-space:nowrap"
        class="ft111"
      >
        <b>3</b>
      </p>
      <!-- Education Credit Amount -->
      <money-input
        v-model="Irs1040Schedule3.EducationCreditAmt"
        name="EducationCreditAmt"
        :div-style="'position:absolute;top:217px;left:757px'"
        :line="'3'"
        style="width:108px; height:17px"
        @change.native="line7Calculation"
      />
      <p
        style="position:absolute;top:235px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>4</b>
      </p>
      <p
        style="position:absolute;top:235px;left:97px;white-space:nowrap"
        class="ft112"
      >
        Retirement savings contributions credit. Attach Form
        8880&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:235px;left:736px;white-space:nowrap"
        class="ft111"
      >
        <b>4</b>
      </p>
      <!-- Retirement Savings Contributions Credit Amount -->
      <money-input
        v-model="Irs1040Schedule3.RtrSavingsContributionsCrAmt"
        name="RtrSavingsContributionsCrAmt"
        :div-style="'position:absolute;top:235px;left:757px'"
        :line="'4'"
        @change.native="line7Calculation"
      />
      <div class="input-area" style="position:absolute;top:234px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 4. Add Form 8880."
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addForm8880()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:253px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>5</b>
      </p>
      <p
        style="position:absolute;top:253px;left:97px;white-space:nowrap"
        class="ft112"
      >
        Residential energy credits. Attach Form
        5695&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:253px;left:736px;white-space:nowrap"
        class="ft111"
      >
        <b>5</b>
      </p>
      <!-- Residential Energy Credit Amount -->
      <money-input
        id="ResidentialEnergyCreditAmt"
        v-model="Irs1040Schedule3.ResidentialEnergyCreditAmt"
        name="ResidentialEnergyCreditAmt"
        :div-style="'position:absolute;top:253px;left:757px'"
        :line="'5'"
        @change.native="line7Calculation"
      />
      <div class="input-area" style="position:absolute;top:253px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 5. Add Form 5695."
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addForm5695()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:271px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>6</b>
      </p>
      <p
        style="position:absolute;top:271px;left:97px;white-space:nowrap"
        class="ft112"
      >
        Other credits from Form:&#160;
      </p>
      <p
        style="position:absolute;top:271px;left:259px;white-space:nowrap"
        class="ft111"
      >
        <b>a</b>&#160;
      </p>
      <!-- Form 3800 Indicator -->
      <label
        style="position:absolute;top:271px;left:276px;"
        class="checkbox-container"
      >
        <input
          id="Form3800Ind"
          v-model="Irs1040Schedule3.Form3800Ind"
          name="Form3800Ind"
          data-line-number="6a"
          class="no-outline checkbox"
          type="checkbox"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:271px;left:294px;white-space:nowrap"
        class="ft112"
      >
        3800 &#160;&#160;
      </p>
      <p
        style="position:absolute;top:271px;left:356px;white-space:nowrap"
        class="ft111"
      >
        <b>b</b>
      </p>
      <!-- Form 8801 Indicator -->
      <label
        style="position:absolute;top:271px;left:374px;"
        class="checkbox-container"
      >
        <input
          id="Form8801Ind"
          v-model="Irs1040Schedule3.Form8801Ind"
          name="Form8801Ind"
          data-line-number="6b"
          class="no-outline checkbox"
          type="checkbox"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:271px;left:392px;white-space:nowrap"
        class="ft112"
      >
        8801
      </p>
      <p
        style="position:absolute;top:271px;left:454px;white-space:nowrap"
        class="ft111"
      >
        <b>c</b>
      </p>
      <!-- Specific Other Credits Indicator -->
      <label
        style="position:absolute;top:271px;left:470px;"
        class="checkbox-container"
      >
        <input
          id="SpecificOtherCreditsInd"
          v-model="Irs1040Schedule3.SpecificOtherCreditsInd"
          name="SpecificOtherCreditsInd"
          data-line-number="6c"
          class="no-outline checkbox"
          type="checkbox"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <div class="input-area" style="position:absolute;top:272px;left:490px">
        <input
          id="OtherCredit"
          v-model="Irs1040Schedule3.OtherCredit"
          v-uppercase
          name="OtherCredit"
          class="no-outline"
          type="text"
          style="width:223px;height:15px"
        />
      </div>
      <p
        style="position:absolute;top:271px;left:736px;white-space:nowrap"
        class="ft111"
      >
        <b>6</b>
      </p>
      <!-- Other Credits Amount -->
      <money-input
        v-model="Irs1040Schedule3.OtherCreditsAmt"
        name="OtherCreditsAmt"
        :div-style="'position:absolute;top:271px;left:757px'"
        :line="'6'"
        :height="16"
        @change.native="line7Calculation"
      />
      <p
        style="position:absolute;top:288px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>7</b>
      </p>
      <!-- Total Nonrefundable Credits Amount -->
      <div class="input-area" style="position:absolute;top:288px;left:757px">
        <money
          id="TotalNonrefundableCreditsAmt"
          v-model="Irs1040Schedule3.TotalNonrefundableCreditsAmt"
          name="TotalNonrefundableCreditsAmt"
          data-line-number="7"
          class="no-outline"
          type="text"
          readonly
          style="width:108px; height:17px"
        />
      </div>
      <p
        style="position:absolute;top:289px;left:97px;white-space:nowrap"
        class="ft112"
      >
        Add lines 1 through 6. Enter here and include on Form 1040 or 1040-SR,
        line
        13b&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:289px;left:736px;white-space:nowrap"
        class="ft111"
      >
        <b>7</b>
      </p>
      <p
        style="position:absolute;top:309px;left:60px;white-space:nowrap;color:white"
        class="ft110"
      >
        <b>Part II</b>
      </p>
      <!-- Part II  Other Payments and Refundable Credits -->
      <p
        style="position:absolute;top:309px;left:129px;white-space:nowrap"
        class="ft10"
      >
        <b>Other Payments and Refundable Credits</b>
      </p>
      <p
        style="position:absolute;top:325px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>8</b>
      </p>
      <!-- Estimated Tax Payments Amount -->
      <money-input
        v-model="Irs1040Schedule3.EstimatedTaxPaymentsAmt"
        name="EstimatedTaxPaymentsAmt"
        :div-style="'position:absolute;top:325px;left:757px'"
        :line="'8'"
        @change.native="line14Calculation"
      />
      <p
        style="position:absolute;top:325px;left:97px;white-space:nowrap"
        class="ft112"
      >
        2019 estimated tax payments and amount applied from 2018
        return&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:325px;left:736px;white-space:nowrap"
        class="ft111"
      >
        <b>8</b>
      </p>
      <p
        style="position:absolute;top:343px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>9</b>
      </p>
      <!-- Reconciled Premium Tax Credit Amount -->
      <div style="position:absolute;top:343px;left:757px">
        <money
          v-model="Irs1040Schedule3.ReconciledPremiumTaxCreditAmt"
          name="ReconciledPremiumTaxCreditAmt"
          data-line-number="9"
          style="width:108px;height:17px"
          readonly
          @change.native="line14Calculation"
        />
      </div>
      <div class="input-area" style="position:absolute;top:343px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 9. Add Form 8962."
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addForm8962()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:343px;left:97px;white-space:nowrap"
        class="ft112"
      >
        Net premium tax credit. Attach Form
        8962&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:343px;left:736px;white-space:nowrap"
        class="ft111"
      >
        <b>9</b>
      </p>
      <p
        style="position:absolute;top:361px;left:61px;white-space:nowrap"
        class="ft111"
      >
        <b>10</b>
      </p>
      <p
        style="position:absolute;top:361px;left:97px;white-space:nowrap"
        class="ft112"
      >
        Amount paid with request for extension to file (see
        instructions)&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:361px;left:732px;white-space:nowrap"
        class="ft111"
      >
        <b>10</b>
      </p>
      <!-- Request For Extension Amount -->
      <money-input
        id="RequestForExtensionAmt"
        v-model="Irs1040Schedule3.RequestForExtensionAmt"
        name="RequestForExtensionAmt"
        :div-style="'position:absolute;top:361px;left:757px'"
        :line="'10'"
        @change.native="line14Calculation"
      />
      <p
        style="position:absolute;top:379px;left:61px;white-space:nowrap"
        class="ft111"
      >
        <b>11</b>
      </p>
      <p
        style="position:absolute;top:379px;left:97px;white-space:nowrap"
        class="ft112"
      >
        Excess social security and tier 1 RRTA tax
        withheld&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:379px;left:732px;white-space:nowrap"
        class="ft111"
      >
        <b>11</b>
      </p>
      <!-- Excess Social Security And Tier 1 RRTA Tax Amount -->
      <money-input
        v-model="Irs1040Schedule3.ExcessSocSecAndTier1RRTATaxAmt"
        name="ExcessSocSecAndTier1RRTATaxAmt"
        :div-style="'position:absolute;top:379px;left:757px'"
        :line="'11'"
        @change.native="line14Calculation"
      />
      <p
        style="position:absolute;top:397px;left:61px;white-space:nowrap"
        class="ft111"
      >
        <b>12</b>
      </p>
      <p
        style="position:absolute;top:397px;left:97px;white-space:nowrap"
        class="ft112"
      >
        Credit for federal tax on fuels. Attach Form
        4136&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:397px;left:732px;white-space:nowrap"
        class="ft111"
      >
        <b>12</b>
      </p>
      <!-- Total Fuel Tax Credit Amount -->
      <money-input
        id="TotalFuelTaxCreditAmt"
        v-model="Irs1040Schedule3.TotalFuelTaxCreditAmt"
        name="TotalFuelTaxCreditAmt"
        :div-style="'position:absolute;top:397px;left:757px'"
        :line="'12'"
        @change.native="line14Calculation"
      />
      <div class="input-area" style="position:absolute;top:397px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 12. Add Form 4136."
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addForm4136()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:415px;left:61px;white-space:nowrap"
        class="ft111"
      >
        <b>13</b>
      </p>
      <p
        style="position:absolute;top:415px;left:97px;white-space:nowrap"
        class="ft112"
      >
        Credits from Form:
      </p>
      <p
        style="position:absolute;top:415px;left:227px;white-space:nowrap"
        class="ft111"
      >
        <b>a</b>
      </p>
      <p
        style="position:absolute;top:415px;left:262px;white-space:nowrap"
        class="ft112"
      >
        2439
      </p>
      <!-- Total Fuel Tax Credit Amount -->
      <label
        style="position:absolute;top:415px;left:244px;"
        class="checkbox-container"
      >
        <input
          id="Form2439Ind"
          v-model="Irs1040Schedule3.Form2439Ind"
          name="Form2439Ind"
          data-line-number="13a"
          class="no-outline checkbox"
          type="checkbox"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:415px;left:324px;white-space:nowrap"
        class="ft111"
      >
        <b>b</b>
      </p>
      <!-- Line 13b - Reserved -->
      <p
        style="position:absolute;top:415px;left:359px;white-space:nowrap"
        class="ft112"
      >
        Reserved
      </p>
      <p
        style="position:absolute;top:415px;left:443px;white-space:nowrap"
        class="ft111"
      >
        <b>c</b>
      </p>
      <p
        style="position:absolute;top:415px;left:478px;white-space:nowrap"
        class="ft112"
      >
        8885
      </p>
      <!-- Form 8885 Indicator -->
      <label
        style="position:absolute;top:415px;left:460px;"
        class="checkbox-container"
      >
        <input
          id="Form8885Ind"
          v-model="Irs1040Schedule3.Form8885Ind"
          name="Form8885Ind"
          data-line-number="13c"
          class="no-outline checkbox"
          type="checkbox"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:415px;left:540px;white-space:nowrap"
        class="ft111"
      >
        <b>d</b>
      </p>
      <label
        style="position:absolute;top:415px;left:557px;"
        class="checkbox-container"
      >
        <input
          id="OtherPaymentsInd"
          v-model="Irs1040Schedule3.OtherPaymentsInd"
          name="OtherPaymentsInd"
          data-line-number="13d"
          class="no-outline checkbox"
          type="checkbox"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <!-- Credit For Repayment Code -->
      <div class="input-area" style="position:absolute;top:415px;left:574px">
        <input
          id="CreditForRepaymentCd"
          v-model="Irs1040Schedule3.CreditForRepaymentCd"
          v-uppercase
          name="CreditForRepaymentCd"
          data-line-number="13d"
          class="no-outline"
          type="text"
          style="width:140px;height:16px"
        />
      </div>
      <p
        style="position:absolute;top:415px;left:732px;white-space:nowrap"
        class="ft111"
      >
        <b>13</b>
      </p>
      <money-input
        v-model="Irs1040Schedule3.OtherPaymentsAmt"
        name="OtherPaymentsAmt"
        :div-style="'position:absolute;top:415px;left:757px'"
        :line="'13'"
        @change.native="line14Calculation"
      />
      <p
        style="position:absolute;top:432px;left:61px;white-space:nowrap"
        class="ft111"
      >
        <b>14</b>
      </p>
      <p
        style="position:absolute;top:433px;left:97px;white-space:nowrap"
        class="ft112"
      >
        Add lines 8 through 13. Enter here and on Form 1040 or 1040-SR, line
        18d&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:433px;left:732px;white-space:nowrap"
        class="ft111"
      >
        <b>14</b>
      </p>
      <!-- Total Other Payments And Refundable Credit Amount -->
      <div class="input-area" style="position:absolute;top:433px;left:757px">
        <money
          id="TotalOtherPaymentsRfdblCrAmt"
          v-model="Irs1040Schedule3.TotalOtherPaymentsRfdblCrAmt"
          name="TotalOtherPaymentsRfdblCrAmt"
          data-line-number="14"
          class="no-outline"
          type="text"
          readonly
          style="width:108px; height:17px"
        />
      </div>
      <p
        style="position:absolute;top:453px;left:54px;white-space:nowrap"
        class="ft11"
      >
        <b
          >For Paperwork Reduction Act Notice, see your tax return
          instructions.&#160;</b
        >
      </p>
      <p
        style="position:absolute;top:455px;left:517px;white-space:nowrap"
        class="ft12"
      >
        Cat. No. 0000/1736
      </p>
      <p
        style="position:absolute;top:455px;left:662px;white-space:nowrap"
        class="ft19"
      >
        <b>Schedule 3 (Form 1040 or 1040-SR) 2019</b>
      </p>
    </div>
  </div>
</template>
<script>
import { formService } from '~/services/form-service'
import {
  SCHEDULE3_UPDATED,
  ADD_IRS8962,
  IRS8962_UPDATED,
  IRS1040_UPDATED
} from '~/events/event'
import MoneyInput from '~/components/Currency/MoneyInput'
export default {
  components: { MoneyInput },
  data() {
    return {
      Irs1040Schedule3: {}
    }
  },
  mounted() {
    this.Irs1040Schedule3.name =
      this.$store.state.attachments.Irs1040.firstName +
      ' ' +
      this.$store.state.attachments.Irs1040.lastName
    this.Irs1040Schedule3.ssn = this.$store.state.attachments.Irs1040.ssn
    formService.$on(IRS1040_UPDATED, (data) => {
      this.Irs1040Schedule3.ssn = data.ssn
      this.Irs1040Schedule3.name = data.firstName + ' ' + data.lastName
      this.$forceUpdate()
    })
    formService.$on(IRS8962_UPDATED, (data) => {
      const attachements = this.$store.state.attachments
      attachements.Irs8962 = data
      this.$store.commit('UPDATE_ATTACHEMENTS', attachements)
      if (data) {
        this.Irs1040Schedule3.ReconciledPremiumTaxCreditAmt =
          data.ReconciledPremiumTaxCreditAmt
      } else {
        this.Irs1040Schedule3.ReconciledPremiumTaxCreditAmt = ''
      }
    })
  },
  methods: {
    line7Calculation() {
      // Line 7 = 1+2+3+4+5+6
      let {
        ForeignTaxCreditAmt,
        CreditForChildAndDepdCareAmt,
        EducationCreditAmt,
        RtrSavingsContributionsCrAmt,
        ResidentialEnergyCreditAmt,
        OtherCreditsAmt
      } = this.Irs1040Schedule3
      ForeignTaxCreditAmt = ForeignTaxCreditAmt ?? 0
      CreditForChildAndDepdCareAmt = CreditForChildAndDepdCareAmt ?? 0
      EducationCreditAmt = EducationCreditAmt ?? 0
      RtrSavingsContributionsCrAmt = RtrSavingsContributionsCrAmt ?? 0
      ResidentialEnergyCreditAmt = ResidentialEnergyCreditAmt ?? 0
      OtherCreditsAmt = OtherCreditsAmt ?? 0
      const line7 =
        ForeignTaxCreditAmt +
        CreditForChildAndDepdCareAmt +
        EducationCreditAmt +
        RtrSavingsContributionsCrAmt +
        ResidentialEnergyCreditAmt +
        OtherCreditsAmt
      this.Irs1040Schedule3.TotalNonrefundableCreditsAmt = line7
      formService.$emit(SCHEDULE3_UPDATED, this.Irs1040Schedule3)
    },
    line14Calculation() {
      // Line 14 = 8+9+10+11+12+13
      let {
        EstimatedTaxPaymentsAmt,
        ReconciledPremiumTaxCreditAmt,
        RequestForExtensionAmt,
        ExcessSocSecAndTier1RRTATaxAmt,
        TotalFuelTaxCreditAmt,
        OtherPaymentsAmt
      } = this.Irs1040Schedule3
      EstimatedTaxPaymentsAmt = EstimatedTaxPaymentsAmt ?? 0
      ReconciledPremiumTaxCreditAmt = ReconciledPremiumTaxCreditAmt ?? 0
      RequestForExtensionAmt = RequestForExtensionAmt ?? 0
      ExcessSocSecAndTier1RRTATaxAmt = ExcessSocSecAndTier1RRTATaxAmt ?? 0
      TotalFuelTaxCreditAmt = TotalFuelTaxCreditAmt ?? 0
      OtherPaymentsAmt = OtherPaymentsAmt ?? 0
      const line14 =
        EstimatedTaxPaymentsAmt +
        ReconciledPremiumTaxCreditAmt +
        RequestForExtensionAmt +
        ExcessSocSecAndTier1RRTATaxAmt +
        TotalFuelTaxCreditAmt +
        OtherPaymentsAmt
      this.Irs1040Schedule3.TotalOtherPaymentsRfdblCrAmt = line14
      formService.$emit(SCHEDULE3_UPDATED, this.Irs1040Schedule3)
    },
    addForm1116() {},
    addForm2441() {},
    addForm8863() {},
    addForm8880() {},
    addForm5695() {},
    addForm8962() {
      formService.$emit(ADD_IRS8962)
    },
    addForm4136() {}
  }
}
</script>
<style scoped>
@import '@/assets/styles/form.css';

#pdf-pages {
  color: #000000;
}

#page1-div {
  background-image: url('../../static/form-assets/schedule3.png');
}

.ft13 {
  font-size: 20px;
  font-weight: bold;
}
.ft17 {
  font-size: 30px;
}
.year {
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
.ft113,
.ft10 {
  top: 10px;
  /* color: white; */
}
</style>
