<template>
  <!-- ==================== IRS 1040 Schedule A ====================== -->
  <div
    id="pdf-pages"
    style="font-size: 11px;
    font-family: QuickType, Arial, Helvetica, sans-serif"
  >
    <div id="page1-div" style="position:relative;width:918px;height:1188px;">
      <!-- <img
        width="918"
        height="1188"
        src="../../static/form-assets/schedulea.png"
      /> -->
      <p
        style="position:absolute;top:52px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b
          ><span style="font-size:15px; font-weight:600"
            >SCHEDULE A&#160;</span
          ></b
        >
      </p>
      <p
        style="position:absolute;top:68px;left:54px;white-space:nowrap"
        class="ft11"
      >
        <b>(Form 1040 or 1040-SR)&#160;</b>
      </p>
      <p
        style="position:absolute;top:70px;left:760px;white-space:nowrap"
        class="ft12"
      >
        <strong><span class="year">20</span>19</strong>
      </p>
      <p
        style="position:absolute;top:85px;left:54px;white-space:nowrap"
        class="ft13"
      >
        (Rev. January 2020)
      </p>
      <p
        style="position:absolute;top:50px;left:363px;white-space:nowrap"
        class="ft14"
      >
        Itemized Deductions
      </p>
      <p
        style="position:absolute;top:100px;left:54px;white-space:nowrap;font-size:10px"
        class="ft13"
      >
        Department of the Treasury &#160;
      </p>
      <p
        style="position:absolute;top:112px;left:54px;white-space:nowrap;font-size:9px"
        class="ft13"
      >
        Internal Revenue Service (99)&#160;
      </p>
      <p
        style="position:absolute;top:78px;left:246px;white-space:nowrap"
        class="ft15"
      >
        ▶&#160;
      </p>
      <p
        style="position:absolute;top:75px;left:257px;white-space:nowrap"
        class="ft11"
      >
        <b>Go to&#160;<i>www.irs.gov/ScheduleA&#160;</i></b
        ><b>for instructions and the latest information.&#160;&#160;</b>&#160;
      </p>
      <p
        style="position:absolute;top:93px;left:361px;white-space:nowrap"
        class="ft15"
      >
        ▶&#160;
      </p>
      <p
        style="position:absolute;top:90px;left:372px;white-space:nowrap"
        class="ft11"
      >
        <b
          >Attach to Form 1040 or 1040-SR.&#160; &#160; &#160;
          &#160;&#160;&#160;&#160; &#160; &#160;&#160;&#160;</b
        >
      </p>
      <p
        style="position:absolute;top:108px;left:196px;white-space:nowrap"
        class="ft11"
      >
        <b>Caution:&#160;</b>If you are claiming a net qualified disaster loss
        on Form 4684, see the instructions for line 16.
      </p>
      <p
        style="position:absolute;top:55px;left:750px;white-space:nowrap"
        class="ft13"
      >
        OMB No. 1545-1736
      </p>
      <p
        style="position:absolute;top:101px;left:752px;white-space:nowrap"
        class="ft13"
      >
        Attachment &#160;&#160;
      </p>
      <p
        style="position:absolute;top:112px;left:752px;white-space:nowrap"
        class="ft13"
      >
        Sequence No.&#160;
      </p>
      <p
        style="position:absolute;top:111px;left:822px;white-space:nowrap;font-size:13px"
        class="ft10"
      >
        <b>07</b>&#160;
      </p>
      <p
        style="position:absolute;top:129px;left:54px;white-space:nowrap"
        class="ft13"
      >
        Name(s) shown on Form 1040 or 1040-SR
      </p>
      <div class="input-area" style="position:absolute;top:142px;left:54px">
        <input
          id="name"
          v-model="Irs1040ScheduleA.name"
          name="name"
          class="no-outline"
          type="text"
          readonly
          style="width:658px;"
        />
      </div>
      <p
        style="position:absolute;top:128px;left:719px;white-space:nowrap"
        class="ft111"
      >
        <b>Your social security number</b>
      </p>
      <div class="input-area" style="position:absolute;top:142px;left:714px">
        <input
          id="ssn"
          v-model="Irs1040ScheduleA.ssn"
          v-mask="'###-##-####'"
          name="ssn"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          class="no-outline"
          type="password"
          readonly
          style="width:150px;"
        />
      </div>
      <p
        style="position:absolute;top:164px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>Medical&#160;</b>
      </p>
      <p
        style="position:absolute;top:181px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>and&#160;</b>
      </p>
      <p
        style="position:absolute;top:197px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>Dental &#160;</b>
      </p>
      <p
        style="position:absolute;top:214px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>Expenses&#160;</b>
      </p>
      <p
        style="position:absolute;top:163px;left:173px;white-space:nowrap"
        class="ft112"
      >
        <b>Caution:&#160;</b>Do not include expenses reimbursed or paid by
        others.&#160;
      </p>
      <p
        style="position:absolute;top:181px;left:154px;white-space:nowrap"
        class="ft114"
      >
        <b>1&#160;&#160;</b>Medical and dental expenses (see
        instructions)&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;&#160;<b
          ><span style="position:absolute;left:456px">1&#160;</span>
          <br />2&#160;</b
        >Enter amount from Form 1040 or 1040-SR, line 8b
      </p>
      <!-- Medical and Dental Expenses -->
      <div class="input-area" style="position:absolute;top:181px;left:627px">
        <money
          id="MedicalAndDentalExpensesAmt"
          v-model="Irs1040ScheduleA.MedicalAndDentalExpensesAmt"
          name="MedicalAndDentalExpensesAmt"
          data-line-number="1"
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
        />
      </div>
      <p
        style="position:absolute;top:199px;left:482px;white-space:nowrap"
        class="ft112"
      >
        <b>2&#160;</b>
      </p>
      <!-- AGI Amount - data appears on lines 2 and 25 -->
      <div class="input-area" style="position:absolute;top:198px;left:498px">
        <money
          id="TaxReturnAGIAmt"
          v-model="Irs1040ScheduleA.TaxReturnAGIAmt"
          name="TaxReturnAGIAmt"
          data-line-number="2 and 25"
          class="no-outline"
          type="text"
          style="width:105px; height:17px"
          @blur.native="line3Calculation"
        />
      </div>
      <p
        style="position:absolute;top:217px;left:154px;white-space:nowrap"
        class="ft112"
      >
        <b>3&#160;&#160;</b>Multiply line 2 by 7.5%
        (0.075)&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:217px;left:612px;white-space:nowrap"
        class="ft112"
      >
        <b>3&#160;</b>
      </p>
      <!-- Medical Allowance -->
      <div class="input-area" style="position:absolute;top:217px;left:627px">
        <money
          id="CalculatedMedicalAllowanceAmt"
          v-model="Irs1040ScheduleA.CalculatedMedicalAllowanceAmt"
          name="CalculatedMedicalAllowanceAmt"
          data-line-number="3"
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
        />
      </div>
      <p
        style="position:absolute;top:235px;left:154px;white-space:nowrap"
        class="ft112"
      >
        <b>4&#160;&#160;</b>Subtract line 3 from line 1. If line 3 is more than
        line 1, enter
        -0-&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:235px;left:741px;white-space:nowrap"
        class="ft112"
      >
        <b>4&#160;</b>
      </p>
      <!-- Total Medical and Dental -->
      <div class="input-area" style="position:absolute;top:235px;left:758px">
        <money
          id="TotalMedicalAndDentalExpnssAmt"
          v-model="Irs1040ScheduleA.TotalMedicalAndDentalExpnssAmt"
          v-bind="money"
          name="TotalMedicalAndDentalExpnssAmt"
          data-line-number="4"
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
          @change.native="line4Calculation"
        />
      </div>
      <p
        style="position:absolute;top:254px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>Taxes You&#160;</b>
      </p>
      <p
        style="position:absolute;top:271px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>Paid&#160;</b>
      </p>
      <p
        style="position:absolute;top:256px;left:154px;white-space:nowrap"
        class="ft112"
      >
        <b>5&#160;</b>State and local taxes.
      </p>
      <p
        style="position:absolute;top:275px;left:162px;white-space:nowrap"
        class="ft115"
      >
        <b>a&#160;<br />&#160;&#160;<br />&#160;&#160;<br />&#160;</b>
      </p>
      <!-- General Sales Taxes Box -->
      <div style="position:absolute;top:325px;left:583px;">
        <input
          id="StateAndLocalSalesTaxInd"
          v-model="Irs1040ScheduleA.StateAndLocalSalesTaxInd"
          name="StateAndLocalSalesTaxInd"
          data-line-number="5a"
          class="no-outline checkbox"
          type="checkbox"
          value="0"
        />
      </div>
      <p
        style="position:absolute;top:276px;left:173px;white-space:nowrap"
        class="ft116"
      >
        State&#160;and&#160;local&#160;income&#160;taxes&#160;or&#160;general&#160;sales&#160;taxes.&#160;You&#160;may&#160;include&#160;<br />either&#160;income&#160;taxes&#160;or&#160;general&#160;sales&#160;taxes&#160;on&#160;line&#160;5a,&#160;but&#160;not&#160;both.&#160;If&#160;<br />you&#160;&#160;elect&#160;&#160;to&#160;&#160;include&#160;&#160;general&#160;&#160;sales&#160;&#160;taxes&#160;&#160;instead&#160;&#160;of&#160;&#160;income&#160;&#160;taxes,&#160;<br />check
        this
        box&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;▶&#160;
        &#160; &#160; &#160;&#160;
      </p>
      <span style="position:absolute;top:327px;left:608px"><b>5a</b></span>
      <!-- State and Local Taxes -->
      <div class="input-area" style="position:absolute;top:325px;left:627px">
        <money
          id="StateAndLocalTaxAmt"
          v-model="Irs1040ScheduleA.StateAndLocalTaxAmt"
          name="StateAndLocalTaxAmt"
          data-line-number="5a"
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
          @blur.native="line5dCalculation"
        />
      </div>
      <p
        style="position:absolute;top:343px;left:162px;white-space:nowrap"
        class="ft112"
      >
        <b>b&#160;</b>State and local real estate taxes (see
        instructions)&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:343px;left:608px;white-space:nowrap"
        class="ft112"
      >
        <b>5b&#160;</b>
      </p>
      <!-- Real Estate Taxes -->
      <div class="input-area" style="position:absolute;top:343px;left:627px">
        <money
          id="RealEstateTaxesAmt"
          v-model="Irs1040ScheduleA.RealEstateTaxesAmt"
          name="RealEstateTaxesAmt"
          data-line-number="5b"
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
          @blur.native="line5dCalculation"
        />
      </div>
      <p
        style="position:absolute;top:361px;left:162px;white-space:nowrap"
        class="ft112"
      >
        <b>c&#160;</b>State and local personal property
        taxes&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:361px;left:608px;white-space:nowrap"
        class="ft112"
      >
        <b>5c&#160;</b>
      </p>
      <!-- Personal Property Taxes Amount -->
      <div class="input-area" style="position:absolute;top:361px;left:627px">
        <money
          id="PersonalPropertyTaxesAmt"
          v-model="Irs1040ScheduleA.PersonalPropertyTaxesAmt"
          name="PersonalPropertyTaxesAmt"
          data-line-number="5c"
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
          @blur.native="line5dCalculation"
        />
      </div>
      <p
        style="position:absolute;top:379px;left:162px;white-space:nowrap"
        class="ft112"
      >
        <b>d&#160;</b>Add lines 5a through
        5c&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:379px;left:608px;white-space:nowrap"
        class="ft112"
      >
        <b>5d&#160;</b>
      </p>
      <!-- Total State And Local Tax Amount -->
      <div class="input-area" style="position:absolute;top:379px;left:627px">
        <money
          id="TotalStateAndLocalTaxAmt"
          v-model="Irs1040ScheduleA.TotalStateAndLocalTaxAmt"
          name="TotalStateAndLocalTaxAmt"
          data-line-number="5d"
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
        />
      </div>
      <p
        style="position:absolute;top:398px;left:162px;white-space:nowrap"
        class="ft115"
      >
        <b>e&#160;<br />&#160;</b>
      </p>
      <p
        style="position:absolute;top:399px;left:173px;white-space:nowrap"
        class="ft116"
      >
        Enter&#160;&#160;the&#160;&#160;smaller&#160;&#160;of&#160;&#160;line&#160;&#160;5d&#160;&#160;or&#160;&#160;$10,000&#160;&#160;($5,000&#160;&#160;if&#160;&#160;married&#160;&#160;filing&#160;<br />separately)&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:415px;left:608px;white-space:nowrap"
        class="ft112"
      >
        <b>5e&#160;</b>
      </p>
      <!-- State And Local Tax Limitation Amount -->
      <div class="input-area" style="position:absolute;top:415px;left:627px">
        <money
          id="StateAndLocalTaxLimitationAmt"
          v-model="Irs1040ScheduleA.StateAndLocalTaxLimitationAmt"
          name="StateAndLocalTaxLimitationAmt"
          data-line-number="5e"
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
          @blur.native="line7Calculation"
        />
      </div>
      <p
        style="position:absolute;top:433px;left:154px;white-space:nowrap"
        class="ft112"
      >
        <b>6&#160;&#160;</b>Other taxes. List type and amount &#160;▶
      </p>
      <div class="input-area" style="position:absolute;top:433px;left:358px">
        <input
          id="otherTaxes"
          v-model="Irs1040ScheduleA.otherTaxes"
          name="otherTaxes"
          class="no-outline"
          type="text"
          style="width:245px;"
        />
      </div>
      <p
        style="position:absolute;top:451px;left:612px;white-space:nowrap"
        class="ft112"
      >
        <b>6&#160;</b>
      </p>
      <!-- Other Taxes Type -->
      <div class="input-area" style="position:absolute;top:451px;left:627px">
        <money
          id="OtherTaxesAmt"
          v-model="Irs1040ScheduleA.OtherTaxesAmt"
          name="OtherTaxesAmt"
          data-line-number="6"
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
          @blur.native="line7Calculation"
        />
      </div>
      <p
        style="position:absolute;top:468px;left:154px;white-space:nowrap"
        class="ft112"
      >
        <b>7&#160;</b>Add lines 5e and 6&#160;
      </p>
      <p
        style="position:absolute;top:469px;left:306px;white-space:nowrap"
        class="ft113"
      >
        .&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:469px;left:741px;white-space:nowrap"
        class="ft112"
      >
        <b>7</b>
      </p>
      <!-- Total Taxes -->
      <div class="input-area" style="position:absolute;top:468px;left:758px">
        <money
          id="TotalTaxesPaidAmt"
          v-model="Irs1040ScheduleA.TotalTaxesPaidAmt"
          name="TotalTaxesPaidAmt"
          data-line-number="7"
          class="no-outline"
          type="text"
          readonly
          style="width:107px; height:17px"
          @change.native="line17Calculation"
        />
      </div>
      <p
        style="position:absolute;top:488px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>Interest&#160;</b>
      </p>
      <p
        style="position:absolute;top:505px;left:54px;white-space:nowrap"
        class="ft117"
      >
        <b>You Paid<br />Caution:&#160;</b>Your&#160;
      </p>
      <p
        style="position:absolute;top:537px;left:54px;white-space:nowrap"
        class="ft13"
      >
        mortgage interest&#160;
      </p>
      <p
        style="position:absolute;top:548px;left:54px;white-space:nowrap"
        class="ft13"
      >
        deduction may be&#160;
      </p>
      <p
        style="position:absolute;top:559px;left:54px;white-space:nowrap"
        class="ft13"
      >
        limited (see&#160;
      </p>
      <p
        style="position:absolute;top:570px;left:54px;white-space:nowrap"
        class="ft13"
      >
        instructions).
      </p>
      <p
        style="position:absolute;top:490px;left:154px;white-space:nowrap"
        class="ft112"
      >
        <b>8&#160;</b>
      </p>
      <!-- Home Mortgage Not Used Indicator -->
      <div style="position:absolute;top:523px;left:583px;">
        <input
          id="HomeMortgNotUsedInd"
          v-model="Irs1040ScheduleA.HomeMortgNotUsedInd"
          name="HomeMortgNotUsedInd"
          data-line-number="8"
          class="no-outline checkbox"
          type="checkbox"
          value="0"
        />
      </div>
      <p
        style="position:absolute;top:506px;left:162px;white-space:nowrap"
        class="ft115"
      >
        <b>&#160;<br />&#160;</b>
      </p>
      <p
        style="position:absolute;top:490px;left:173px;white-space:nowrap"
        class="ft116"
      >
        Home&#160;mortgage&#160;interest&#160;and&#160;points.&#160;If&#160;you&#160;didn’t&#160;use&#160;all&#160;of&#160;your&#160;home&#160;<br />mortgage&#160;&#160;loan(s)&#160;&#160;to&#160;&#160;buy,&#160;&#160;build,&#160;&#160;or&#160;&#160;improve&#160;&#160;your&#160;&#160;home,&#160;&#160;see&#160;<br />instructions
        and check this box
      </p>
      <p
        style="position:absolute;top:524px;left:378px;white-space:nowrap"
        class="ft113"
      >
        .&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;▶&#160;
        &#160; &#160;&#160;
      </p>
      <p
        style="position:absolute;top:542px;left:162px;white-space:nowrap"
        class="ft115"
      >
        <b>a&#160;<br />&#160;</b>
      </p>
      <p
        style="position:absolute;top:542px;left:173px;white-space:nowrap"
        class="ft116"
      >
        Home&#160;&#160;mortgage&#160;&#160;interest&#160;&#160;and&#160;&#160;points&#160;&#160;reported&#160;&#160;to&#160;&#160;you&#160;&#160;on&#160;&#160;Form&#160;&#160;1098.&#160;<br />See
        instructions if limited
      </p>
      <p
        style="position:absolute;top:559px;left:342px;white-space:nowrap"
        class="ft113"
      >
        .&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:559px;left:608px;white-space:nowrap"
        class="ft112"
      >
        <b>8a</b>
      </p>
      <!-- Mortgage Interest to Financial Institutions -->
      <div class="input-area" style="position:absolute;top:559px;left:627px">
        <money
          id="RptHomeMortgIntAndPointsAmt"
          v-model="Irs1040ScheduleA.RptHomeMortgIntAndPointsAmt"
          name="RptHomeMortgIntAndPointsAmt"
          data-line-number="8a"
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
          @blur.native="line8eCalculation"
        />
      </div>
      <p
        style="position:absolute;top:580px;left:162px;white-space:nowrap"
        class="ft115"
      >
        <b>b&#160;<br />&#160;&#160;<br />&#160;&#160;<br />&#160;</b>
      </p>
      <p
        style="position:absolute;top:580px;left:173px;white-space:nowrap"
        class="ft118"
      >
        Home&#160;&#160;mortgage&#160;&#160;interest&#160;&#160;not&#160;&#160;reported&#160;&#160;to&#160;&#160;you&#160;&#160;on&#160;&#160;Form&#160;&#160;1098.&#160;&#160;See<br />instructions&#160;if&#160;limited.&#160;If&#160;paid&#160;to&#160;the&#160;person&#160;from&#160;whom&#160;you&#160;bought&#160;the<br />home,&#160;see&#160;instructions&#160;and&#160;show&#160;that&#160;person’s&#160;name,&#160;identifying&#160;no.,&#160;<br />and
        address&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.<br />▶
      </p>
      <div class="input-area" style="position:absolute;top:646px;left:180px">
        <input
          id="homeMorgage"
          v-model="Irs1040ScheduleA.homeMorgage"
          name="homeMorgage"
          class="no-outline"
          type="text"
          style="width:415px;"
        />
      </div>
      <p
        style="position:absolute;top:667px;left:608px;white-space:nowrap"
        class="ft112"
      >
        <b>8b</b>
      </p>
      <!-- Mortgage Interest Amount not Reported on Form 1098 -->
      <div class="input-area" style="position:absolute;top:667px;left:627px">
        <money
          id="Form1098HomeMortgIntNotRptAmt"
          v-model="Irs1040ScheduleA.Form1098HomeMortgIntNotRptAmt"
          name="Form1098HomeMortgIntNotRptAmt"
          data-line-number="8b"
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
          @blur.native="line8eCalculation"
        />
      </div>
      <p
        style="position:absolute;top:687px;left:162px;white-space:nowrap"
        class="ft115"
      >
        <b>c&#160;<br />&#160;</b>
      </p>
      <p
        style="position:absolute;top:687px;left:173px;white-space:nowrap"
        class="ft116"
      >
        Points&#160;not&#160;reported&#160;to&#160;you&#160;on&#160;Form&#160;1098.&#160;See&#160;instructions&#160;for&#160;special&#160;<br />rules&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:703px;left:608px;white-space:nowrap"
        class="ft112"
      >
        <b>8c</b>
      </p>
      <!-- Deductible Points -->
      <div class="input-area" style="position:absolute;top:703px;left:627px">
        <money
          id="Form1098PointsNotReportedAmt"
          v-model="Irs1040ScheduleA.Form1098PointsNotReportedAmt"
          name="Form1098PointsNotReportedAmt"
          data-line-number="8c"
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
          @blur.native="line8eCalculation"
        />
      </div>
      <p
        style="position:absolute;top:721px;left:162px;white-space:nowrap"
        class="ft112"
      >
        <b>d&#160;</b>Mortgage insurance premiums (see
        instructions)&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:721px;left:608px;white-space:nowrap"
        class="ft112"
      >
        <b>8d&#160;</b>
      </p>
      <!-- Mortgage Insurance Premiums Amount -->
      <div class="input-area" style="position:absolute;top:721px;left:627px">
        <money
          id="MortgageInsurancePremiumsAmt"
          v-model="Irs1040ScheduleA.MortgageInsurancePremiumsAmt"
          name="MortgageInsurancePremiumsAmt"
          data-line-number="8d"
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
          @blur.native="line8eCalculation"
        />
      </div>
      <p
        style="position:absolute;top:739px;left:162px;white-space:nowrap"
        class="ft112"
      >
        <b>e&#160;</b>Add lines 8a through
        8d&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:739px;left:608px;white-space:nowrap"
        class="ft112"
      >
        <b>8e</b>
      </p>
      <!-- Total Home Mortgage Interest And Points Amount -->
      <div class="input-area" style="position:absolute;top:739px;left:627px">
        <money
          id="TotalHomeMortgIntAndPointsAmt"
          v-model="Irs1040ScheduleA.TotalHomeMortgIntAndPointsAmt"
          name="TotalHomeMortgIntAndPointsAmt"
          data-line-number="8e"
          readonly
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
          @blur.native="line10Calculation"
        />
      </div>
      <p
        style="position:absolute;top:757px;left:154px;white-space:nowrap"
        class="ft112"
      >
        <b>9&#160;&#160;</b>Investment interest. Attach Form 4952 if required.
        See instructions&#160;.
      </p>
      <div class="input-area" style="position:absolute;top:757px;left:560px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 9. Add Form 4952."
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addForm4952()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:757px;left:612px;white-space:nowrap"
        class="ft112"
      >
        <b>9</b>
      </p>
      <!-- Investment Interest -->
      <div class="input-area" style="position:absolute;top:757px;left:627px">
        <money
          id="InvestmentInterestAmt"
          v-model="Irs1040ScheduleA.InvestmentInterestAmt"
          name="InvestmentInterestAmt"
          data-line-number="9"
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
          @blur.native="line10Calculation"
        />
      </div>
      <p
        style="position:absolute;top:774px;left:147px;white-space:nowrap"
        class="ft112"
      >
        <b>10&#160;</b>Add lines 8e and 9&#160;
      </p>
      <p
        style="position:absolute;top:775px;left:306px;white-space:nowrap"
        class="ft113"
      >
        .&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:775px;left:738px;white-space:nowrap"
        class="ft112"
      >
        <b>10</b>
      </p>
      <!-- Total Interest -->
      <div class="input-area" style="position:absolute;top:775px;left:758px">
        <money
          id="TotalInterestPaidAmt"
          v-model="Irs1040ScheduleA.TotalInterestPaidAmt"
          name="TotalInterestPaidAmt"
          data-line-number="10"
          class="no-outline"
          type="text"
          readonly
          style="width:107px; height:17px"
          @change.native="line17Calculation"
        />
      </div>
      <p
        style="position:absolute;top:794px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>Gifts to&#160;</b>
      </p>
      <p
        style="position:absolute;top:811px;left:54px;white-space:nowrap"
        class="ft117"
      >
        <b>Charity<br />Caution:&#160;</b>If you&#160;<b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:843px;left:54px;white-space:nowrap"
        class="ft13"
      >
        made a gift and &#160;
      </p>
      <p
        style="position:absolute;top:854px;left:54px;white-space:nowrap"
        class="ft13"
      >
        got a benefit for it,&#160;
      </p>
      <p
        style="position:absolute;top:865px;left:54px;white-space:nowrap"
        class="ft13"
      >
        see instructions.
      </p>
      <p
        style="position:absolute;top:795px;left:147px;white-space:nowrap"
        class="ft112"
      >
        <b>11&#160;</b>
      </p>
      <!-- Gifts to Charity Section -->
      <!-- Gifts Cash/Check -->
      <div class="input-area" style="position:absolute;top:810px;left:627px">
        <money
          id="GiftsByCashOrCheckAmt"
          v-model="Irs1040ScheduleA.GiftsByCashOrCheckAmt"
          name="GiftsByCashOrCheckAmt"
          data-line-number="11"
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
          @blur.native="line14Calculation"
        />
      </div>
      <p
        style="position:absolute;top:811px;left:162px;white-space:nowrap"
        class="ft112"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:795px;left:173px;white-space:nowrap"
        class="ft116"
      >
        Gifts&#160;&#160;by&#160;&#160;cash&#160;&#160;or&#160;&#160;check.&#160;&#160;If&#160;&#160;you&#160;&#160;made&#160;&#160;any&#160;&#160;gift&#160;&#160;of&#160;&#160;$250&#160;&#160;or&#160;&#160;more,&#160;&#160;see&#160;<br />instructions&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:811px;left:609px;white-space:nowrap"
        class="ft112"
      >
        <b>11</b>
      </p>
      <p
        style="position:absolute;top:830px;left:147px;white-space:nowrap"
        class="ft112"
      >
        <b>12&#160;</b>
      </p>
      <p
        style="position:absolute;top:847px;left:162px;white-space:nowrap"
        class="ft112"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:831px;left:173px;white-space:nowrap"
        class="ft116"
      >
        Other&#160;than&#160;by&#160;cash&#160;or&#160;check.&#160;If&#160;you&#160;made&#160;any&#160;gift&#160;of&#160;$250&#160;or&#160;more,&#160;<br />see
        instructions. You&#160;
      </p>
      <p
        style="position:absolute;top:847px;left:303px;white-space:nowrap"
        class="ft112"
      >
        <b>must&#160;</b>attach Form 8283 if over
        $500&#160;.&#160;.&#160;.&#160;.
      </p>
      <div class="input-area" style="position:absolute;top:847px;left:560px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 12. Add Form 8283."
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addForm8283()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:847px;left:608px;white-space:nowrap"
        class="ft112"
      >
        <b>12&#160;</b>
      </p>
      <!-- Non-Cash, Check Contribution -->
      <div class="input-area" style="position:absolute;top:847px;left:627px">
        <money
          id="OtherThanByCashOrCheckAmt"
          v-model="Irs1040ScheduleA.OtherThanByCashOrCheckAmt"
          name="OtherThanByCashOrCheckAmt"
          data-line-number="12"
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
          @blur.native="line14Calculation"
        />
      </div>
      <p
        style="position:absolute;top:865px;left:147px;white-space:nowrap"
        class="ft112"
      >
        <b>13&#160;</b>Carryover from prior year
      </p>
      <p
        style="position:absolute;top:865px;left:342px;white-space:nowrap"
        class="ft113"
      >
        .&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:865px;left:608px;white-space:nowrap"
        class="ft112"
      >
        <b>13&#160;</b>
      </p>
      <!-- Carryover Prior Year -->
      <div class="input-area" style="position:absolute;top:865px;left:627px">
        <money
          id="CarryoverFromPriorYearAmt"
          v-model="Irs1040ScheduleA.CarryoverFromPriorYearAmt"
          name="CarryoverFromPriorYearAmt"
          data-line-number="13"
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
          @blur.native="line14Calculation"
        />
      </div>
      <p
        style="position:absolute;top:882px;left:147px;white-space:nowrap"
        class="ft112"
      >
        <b>14&#160;</b>Add lines 11 through
        13&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:883px;left:738px;white-space:nowrap"
        class="ft112"
      >
        <b>14&#160;</b>
      </p>
      <!-- Total Contributions -->
      <div class="input-area" style="position:absolute;top:883px;left:758px">
        <money
          id="TotalCharitableContriAmt"
          v-model="Irs1040ScheduleA.TotalCharitableContriAmt"
          name="TotalCharitableContriAmt"
          data-line-number="14"
          class="no-outline"
          type="text"
          readonly
          style="width:107px; height:17px"
          @change.native="line17Calculation"
        />
      </div>
      <p
        style="position:absolute;top:902px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>Casualty and&#160;</b>
      </p>
      <p
        style="position:absolute;top:919px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>Theft Losses&#160;</b>
      </p>
      <p
        style="position:absolute;top:902px;left:147px;white-space:nowrap"
        class="ft112"
      >
        <b>15&#160;</b>
      </p>
      <!-- Calculate Adjust Gross Income Minus Total Net Loss Amount -->
      <div class="input-area" style="position:absolute;top:936px;left:758px">
        <money
          id="CalcAdjGroIncmMnsTotNetLossAmt"
          v-model="Irs1040ScheduleA.CalcAdjGroIncmMnsTotNetLossAmt"
          name="CalcAdjGroIncmMnsTotNetLossAmt"
          data-line-number="15"
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
          @change.native="line17Calculation"
        />
      </div>
      <p
        style="position:absolute;top:919px;left:162px;white-space:nowrap"
        class="ft115"
      >
        <b>&#160;<br />&#160;</b>
      </p>
      <p
        style="position:absolute;top:903px;left:173px;white-space:nowrap"
        class="ft116"
      >
        Casualty&#160;&#160;and&#160;&#160;theft&#160;&#160;loss(es)&#160;&#160;from&#160;&#160;a&#160;&#160;federally&#160;&#160;declared&#160;&#160;disaster&#160;&#160;(other&#160;&#160;than&#160;&#160;net&#160;&#160;qualified&#160;<br />disaster&#160;&#160;losses).&#160;&#160;Attach&#160;&#160;Form&#160;&#160;4684&#160;&#160;and&#160;&#160;enter&#160;&#160;the&#160;&#160;amount&#160;&#160;from&#160;&#160;line&#160;&#160;18&#160;&#160;of&#160;&#160;that&#160;&#160;form.&#160;&#160;See&#160;<br />instructions&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;&#160;
      </p>
      <b><span style="position:absolute;top:940px;left:738px">15</span></b>
      <div class="input-area" style="position:absolute;top:935px;left:691px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 15. Add Form 4684."
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addForm4684()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:956px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>Other&#160;</b>
      </p>
      <p
        style="position:absolute;top:972px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>Itemized &#160;</b>
      </p>
      <p
        style="position:absolute;top:988px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>Deductions&#160;</b>
      </p>
      <p
        style="position:absolute;top:955px;left:147px;white-space:nowrap"
        class="ft112"
      >
        <b>16&#160;</b>Other—from list in instructions. List type and amount
        &#160;▶
      </p>
      <div class="input-area" style="position:absolute;top:970px;left:172px">
        <input
          id="ItermizedDeduction"
          v-model="Irs1040ScheduleA.ItermizedDeductions"
          name="ItermizedDeduction"
          class="no-outline"
          type="text"
          style="width:555px;"
        />
      </div>
      <p
        style="position:absolute;top:991px;left:738px;white-space:nowrap"
        class="ft112"
      >
        <b>16&#160;</b>
      </p>
      <!-- Other Miscellaneous Deductions Section -->
      <!-- Other Miscellaneous Deductions -->
      <div class="input-area" style="position:absolute;top:990px;left:758px">
        <money
          id="OtherMiscellaneousDedAmt"
          v-model="Irs1040ScheduleA.OtherMiscellaneousDedAmt"
          name="OtherMiscellaneousDedAmt"
          data-line-number="16"
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
          @change.native="line17Calculation"
        />
      </div>
      <p
        style="position:absolute;top:1010px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>Total&#160;</b>
      </p>
      <p
        style="position:absolute;top:1027px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>Itemized &#160;</b>
      </p>
      <p
        style="position:absolute;top:1043px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>Deductions&#160;</b>
      </p>
      <p
        style="position:absolute;top:1011px;left:147px;white-space:nowrap"
        class="ft112"
      >
        <b>17&#160;</b>
      </p>
      <!-- Total Itemized Deductions Section -->
      <!-- Total Itemized Deductions -->
      <div class="input-area" style="position:absolute;top:1026px;left:758px">
        <money
          id="TotalItemizedDeductionsAmt"
          v-model="Irs1040ScheduleA.TotalItemizedDeductionsAmt"
          name="TotalItemizedDeductionsAmt"
          data-line-number="17"
          class="no-outline"
          type="text"
          style="width:107px; height:17px"
          readonly
        />
      </div>
      <p
        style="position:absolute;top:1027px;left:162px;white-space:nowrap"
        class="ft112"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:1011px;left:173px;white-space:nowrap"
        class="ft116"
      >
        Add&#160;&#160;the&#160;&#160;amounts&#160;&#160;in&#160;&#160;the&#160;&#160;far&#160;&#160;right&#160;&#160;column&#160;&#160;for&#160;&#160;lines&#160;&#160;4&#160;&#160;through&#160;&#160;16.&#160;&#160;Also,&#160;&#160;enter&#160;&#160;this&#160;&#160;amount&#160;&#160;on&#160;<br />Form
        1040 or 1040-SR, line
        9&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:1027px;left:738px;white-space:nowrap"
        class="ft112"
      >
        <b>17</b>
      </p>
      <p
        style="position:absolute;top:1045px;left:148px;white-space:nowrap"
        class="ft112"
      >
        <b>18&#160;</b>
      </p>
      <!-- Itemize Deductions Less Than Standard Deduction -->
      <div style="position:absolute;top:1062px;left:712px;">
        <input
          id="ItmzdDedLessThanStdDedInd"
          v-model="Irs1040ScheduleA.ItmzdDedLessThanStdDedInd"
          name="ItmzdDedLessThanStdDedInd"
          data-line-number="18"
          class="no-outline checkbox"
          type="checkbox"
          value="0"
        />
      </div>
      <p
        style="position:absolute;top:1061px;left:163px;white-space:nowrap"
        class="ft112"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:1045px;left:173px;white-space:nowrap"
        class="ft116"
      >
        If&#160;you&#160;elect&#160;to&#160;itemize&#160;deductions&#160;even&#160;though&#160;they&#160;are&#160;less&#160;than&#160;your&#160;standard&#160;deduction,&#160;<br />check
        this
        box&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;▶
      </p>
      <p
        style="position:absolute;top:1084px;left:54px;white-space:nowrap"
        class="ft11"
      >
        <b
          >XOB For Paperwork Reduction Act Notice, see the Instructions for
          Forms 1040 and 1040-SR.&#160;</b
        >
      </p>
      <p
        style="position:absolute;top:1085px;left:571px;white-space:nowrap; font-size:9px"
        class="ft13"
      >
        Cat. No. 0000/1736&#160;
      </p>
      <p
        style="position:absolute;top:1085px;left:668px;white-space:nowrap"
        class="ft111"
      >
        <b style="font-size:10px">Schedule A (Form 1040 or 1040-SR) 2019</b>
      </p>
    </div>
  </div>
</template>

<script>
import { formService } from '~/services/form-service'
import { SCHEDULEA_UPDATED, IRS1040_UPDATED } from '~/events/event'
export default {
  name: 'Irs1040ScheduleA',
  data() {
    return {
      Irs1040ScheduleA: {},
      money: {
        precision: 2,
        decimal: '.',
        thousands: ',',
        allowBlank: false
      }
    }
  },
  mounted() {
    this.Irs1040ScheduleA.name =
      this.$store.state.attachments.Irs1040.firstName +
      ' ' +
      this.$store.state.attachments.Irs1040.lastName
    this.Irs1040ScheduleA.ssn = this.$store.state.attachments.Irs1040.ssn
    formService.$on(IRS1040_UPDATED, (data) => {
      this.Irs1040ScheduleA.ssn = data.ssn
      this.Irs1040ScheduleA.name = data.firstName + ' ' + data.lastName
      this.$forceUpdate()
    })
  },
  methods: {
    // Line 3 = 2 * 0.075
    line3Calculation() {
      const line3 = this.Irs1040ScheduleA.TaxReturnAGIAmt * 0.075
      this.Irs1040ScheduleA.CalculatedMedicalAllowanceAmt = line3
      formService.$emit(SCHEDULEA_UPDATED, this.Irs1040ScheduleA)
    },
    // Line 4 = 1 - 3 / If line 3 is more than line 1, enter -0-
    line4Calculation() {
      if (
        this.Irs1040ScheduleA.CalculatedMedicalAllowanceAmt >
        this.Irs1040ScheduleA.MedicalAndDentalExpensesAmt
      ) {
        this.Irs1040ScheduleA.TotalMedicalAndDentalExpnssAmt = 0
      } else {
        this.Irs1040ScheduleA.TotalMedicalAndDentalExpnssAmt =
          this.Irs1040ScheduleA.MedicalAndDentalExpensesAmt -
          this.Irs1040ScheduleA.CalculatedMedicalAllowanceAmt
      }
      formService.$emit(SCHEDULEA_UPDATED, this.Irs1040ScheduleA)
    },
    // Line 5d = 5a + 5b + 5c
    line5dCalculation() {
      const line5d =
        this.Irs1040ScheduleA.StateAndLocalTaxAmt +
        this.Irs1040ScheduleA.RealEstateTaxesAmt +
        this.Irs1040ScheduleA.PersonalPropertyTaxesAmt
      this.Irs1040ScheduleA.TotalStateAndLocalTaxAmt = line5d
      formService.$emit(SCHEDULEA_UPDATED, this.Irs1040ScheduleA)
    },
    // Line 7 = 5e + 6
    line7Calculation() {
      const line7 =
        this.Irs1040ScheduleA.StateAndLocalTaxLimitationAmt +
        this.Irs1040ScheduleA.OtherTaxesAmt
      this.Irs1040ScheduleA.TotalTaxesPaidAmt = line7
      formService.$emit(SCHEDULEA_UPDATED, this.Irs1040ScheduleA)
    },
    // Line 8e = 8a+8b+8c+8d
    line8eCalculation() {
      const line8e =
        this.Irs1040ScheduleA.RptHomeMortgIntAndPointsAmt +
        this.Irs1040ScheduleA.Form1098HomeMortgIntNotRptAmt +
        this.Irs1040ScheduleA.Form1098PointsNotReportedAmt +
        this.Irs1040ScheduleA.MortgageInsurancePremiumsAmt
      this.Irs1040ScheduleA.TotalHomeMortgIntAndPointsAmt = line8e
      formService.$emit(SCHEDULEA_UPDATED, this.Irs1040ScheduleA)
    },
    // Line 10 = 8e + 9
    line10Calculation() {
      const line10 =
        this.Irs1040ScheduleA.TotalHomeMortgIntAndPointsAmt +
        this.Irs1040ScheduleA.InvestmentInterestAmt
      this.Irs1040ScheduleA.TotalInterestPaidAmt = line10
      formService.$emit(SCHEDULEA_UPDATED, this.Irs1040ScheduleA)
    },
    // Line 14 = 11+12+13
    line14Calculation() {
      const line14 =
        this.Irs1040ScheduleA.GiftsByCashOrCheckAmt +
        this.Irs1040ScheduleA.OtherThanByCashOrCheckAmt +
        this.Irs1040ScheduleA.CarryoverFromPriorYearAmt
      this.Irs1040ScheduleA.TotalCharitableContriAmt = line14
      formService.$emit(SCHEDULEA_UPDATED, this.Irs1040ScheduleA)
    },
    // Line 17 = 4 + 7 + 10 + 14 + 15 + 16
    line17Calculation() {
      const line17 =
        this.Irs1040ScheduleA.TotalMedicalAndDentalExpnssAmt +
        this.Irs1040ScheduleA.TotalTaxesPaidAmt +
        this.Irs1040ScheduleA.TotalInterestPaidAmt +
        this.Irs1040ScheduleA.TotalCharitableContriAmt +
        this.Irs1040ScheduleA.CalcAdjGroIncmMnsTotNetLossAmt +
        this.Irs1040ScheduleA.OtherMiscellaneousDedAmt
      this.Irs1040ScheduleA.TotalItemizedDeductionsAmt = line17
      formService.$emit(SCHEDULEA_UPDATED, this.Irs1040ScheduleA)
    },
    addForm4952() {
      // eslint-disable-next-line no-console
      console.log('load form 4952')
    },
    addForm8283() {
      // eslint-disable-next-line no-console
      console.log('load form 8283')
    },
    addForm4684() {
      // eslint-disable-next-line no-console
      console.log('load form 4684')
    }
  }
}
</script>
<style scoped>
#pdf-pages {
  color: #000000;
}

#page1-div {
  background-image: url('../../static/form-assets/schedulea.png');
}

.ft14 {
  font-size: 20px;
  font-weight: bold;
}
.ft12 {
  font-size: 30px;
}
.year {
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

input {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  background-color: #f1f4ff;
  max-width: 100%;
  height: 19px;
  padding-left: 3px;
  font-size: 12px;
}
.text-right {
  text-align: right;
  padding-right: 3px;
}
.no-outline:focus {
  outline: none;
  background-color: white;
}
.add-button {
  cursor: pointer;
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 11px;
  background-color: #eee;
}
</style>
