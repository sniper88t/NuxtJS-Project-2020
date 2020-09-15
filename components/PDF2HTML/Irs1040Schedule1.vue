<template>
  <!-- ==================== IRS Form 1040 Schedule 1 ==================== -->
  <div
    id="pdf-pages"
    style="font-size: 11px;
    font-family: Helvetica Neue,Helvetica, QuickType, Arial, sans-serif"
  >
    <div id="page1-div" style="position:relative;width:918px;height:860px;">
      <!-- <img
        width="918"
        height="1188"
        src="../../static/form-assets/schedule1.png"
      /> -->
      <p
        style="position:absolute;top:52px;left:54px;white-space:nowrap"
        class="ft114"
      >
        <b>
          <span style="font-size:15px; font-weight:600">SCHEDULE 1</span>&#160;
          <br /><span style="font-size:11px;">(Form 1040 or 1040-SR)</span
          >&#160;
        </b>
      </p>
      <p
        style="position:absolute;top:97px;left:54px;white-space:nowrap; font-size:10px;"
        class="ft115"
      >
        Department of the Treasury &#160;
        <br />Internal Revenue Service &#160;
      </p>
      <p
        style="position:absolute;top:58px;left:241px;white-space:nowrap;"
        class="ft13"
      >
        Additional Income and Adjustments to Income
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
        style="position:absolute;top:110px;left:247px;white-space:nowrap"
        class="ft14"
      >
        &#160;▶
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:107px;left:260px;white-space:nowrap"
        class="ft11"
      >
        <b>
          Go to&#160;
          <i>www.irs.gov/Form1040</i>
        </b>
        <b>&#160;for instructions and the latest information.</b>
      </p>
      <p
        style="position:absolute;top:55px;left:750px;white-space:nowrap"
        class="ft12"
      >
        OMB No. 1545-1736
      </p>
      <p
        style="position:absolute;top:70px;left:760px;white-space:nowrap"
        class="ft18"
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
        style="position:absolute;top:112px;left:826px;white-space:nowrap; color:black;font-size:13px"
        class="ft10"
      >
        <b>01</b>&#160;
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
          v-model="Irs1040Schedule1.name"
          v-uppercase
          name="name"
          class="no-outline"
          type="text"
          style="width:647px;"
          readonly
          @irs1040_updated="addForm8917"
        />
      </div>
      <p
        style="position:absolute;top:128px;left:708px;white-space:nowrap"
        class="ft110"
      >
        <b>Your social security number</b>
      </p>
      <div class="input-area" style="position:absolute;top:142px;left:704px">
        <input
          id="ssn"
          v-model="Irs1040Schedule1.ssn"
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
        style="position:absolute;top:164px;left:54px;white-space:nowrap"
        class="ft116"
      >
        At&#160;&#160;any&#160;&#160;time&#160;&#160;during&#160;&#160;2019,&#160;&#160;did&#160;&#160;you&#160;&#160;receive,&#160;&#160;sell,&#160;&#160;send,&#160;&#160;exchange,&#160;&#160;or&#160;&#160;otherwise&#160;&#160;acquire&#160;&#160;any&#160;&#160;financial&#160;&#160;interest&#160;&#160;in&#160;&#160;any
        <br />virtual
        currency?&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:180px;left:785px;white-space:nowrap"
        class="ft112"
      >
        <b>Yes</b>
      </p>
      <label
        style="position:absolute;top:179px;left:766px;"
        class="checkbox-container"
      >
        <input
          id="VirtualCurAcquiredDurTYInd"
          v-model="Irs1040Schedule1.VirtualCurAcquiredDurTYInd"
          name="VirtualCurAcquiredDurTYInd"
          class="no-outline checkbox"
          type="radio"
          value="1"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:180px;left:839px;white-space:nowrap"
        class="ft112"
      >
        <b>No</b>
      </p>
      <label
        style="position:absolute;top:179px;left:820px;"
        class="checkbox-container"
      >
        <input
          id="IndividualReturnFilingStatusCd"
          v-model="Irs1040Schedule1.VirtualCurAcquiredDurTYInd"
          name="VirtualCurAcquiredDurTYInd"
          class="no-outline checkbox"
          type="radio"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:200px;left:62px;white-space:nowrap"
        class="ft113"
      >
        <b>Part I&#160;</b>
      </p>
      <p
        style="position:absolute;top:197px;left:129px;white-space:nowrap"
        class="ft10"
      >
        <b>Additional Income</b>
      </p>
      <p
        style="position:absolute;top:217px;left:68px;white-space:nowrap"
        class="ft112"
      >
        <b>1</b>
      </p>
      <p
        style="position:absolute;top:217px;left:97px;white-space:nowrap"
        class="ft111"
      >
        Taxable refunds, credits, or offsets of state and local income
        taxes&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:217px;left:736px;white-space:nowrap"
        class="ft112"
      >
        <b>1</b>
      </p>
      <!-- Part I  Additional Income -->

      <!-- State And Local Income Tax Refund Amount -->
      <money-input
        id="StateLocalIncomeTaxRefundAmt"
        v-model="Irs1040Schedule1.StateLocalIncomeTaxRefundAmt"
        :div-style="'position:absolute;top:217px;left:757px'"
        name="StateLocalIncomeTaxRefundAmt"
        :line="1"
        :value="0"
        @change.native="line9Calculation"
      />
      <p
        style="position:absolute;top:235px;left:68px;white-space:nowrap"
        class="ft112"
      >
        <b>2a&#160;</b>Alimony
        received&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:235px;left:732px;white-space:nowrap"
        class="ft112"
      >
        <b>2a</b>
      </p>
      <!-- Alimony Received Amount -->
      <!-- <div class="input-area" style="position:absolute;top:235px;left:757px"> -->
      <money-input
        v-model="Irs1040Schedule1.AlimonyReceivedAmt"
        :input-id="AlimonyReceivedAmt"
        :div-style="'position:absolute;top:235px;left:757px'"
        name="AlimonyReceivedAmt"
        line="2a"
        @change.native="line9Calculation"
      />
      <!-- </div> -->
      <p
        style="position:absolute;top:253px;left:76px;white-space:nowrap"
        class="ft112"
      >
        <b>b&#160;</b>Date of original divorce or separation agreement (see
        instructions)&#160;▶
      </p>
      <!-- Divorce Or Separation Agreement Date -->
      <div class="input-area" style="position:absolute;top:253px;left:435px">
        <input
          id="DivorceOrSeparationAgreementDt"
          v-model="Irs1040Schedule1.DivorceOrSeparationAgreementDt"
          name="DivorceOrSeparationAgreementDt"
          data-line-number="2b"
          class="no-outline"
          type="date"
          style="width:282px; height:17px"
        />
      </div>
      <p
        style="position:absolute;top:271px;left:68px;white-space:nowrap"
        class="ft112"
      >
        <b>3</b>
      </p>
      <!-- Business Income Or Loss Amount -->
      <div class="input-area" style="position:absolute;top:271px;left:757px">
        <money
          id="BusinessIncomeLossAmt"
          v-model="Irs1040Schedule1.BusinessIncomeLossAmt"
          name="BusinessIncomeLossAmt"
          data-line-number="3"
          class="no-outline"
          type="text"
          readonly
          style="width:108px; height:17px"
          @blur.native="line9Calculation"
        />
      </div>
      <p
        style="position:absolute;top:271px;left:97px;white-space:nowrap"
        class="ft111"
      >
        Business income or (loss). Attach Schedule
        C&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <div class="input-area" style="position:absolute;top:273px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 3. Add Schedule C."
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addScheduleC()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:271px;left:736px;white-space:nowrap"
        class="ft112"
      >
        <b>3</b>
      </p>
      <p
        style="position:absolute;top:289px;left:68px;white-space:nowrap"
        class="ft112"
      >
        <b>4</b>
      </p>
      <div
        class="input-area"
        style="position:absolute;top:289px;left:560px;white-space:nowrap"
      >
        <select
          id="form4684Cd"
          v-model="Irs1040Schedule1.form4684Cd"
          name="form4684Cd"
          size="1"
          class="no-outline"
          style="width:100px;height:18px;font-size:11px"
          title="Line 4. If applicable, select an option from the list. See instructions."
        >
          <option value=" "></option>
          <option value="F4684"> FORM 4684</option>
        </select>
      </div>
      <!-- Other Gains Or Losses Amount -->
      <div class="input-area" style="position:absolute;top:289px;left:757px">
        <money
          id="OtherGainLossAmt"
          v-model="Irs1040Schedule1.OtherGainLossAmt"
          name="OtherGainLossAmt"
          data-line-number="4"
          class="no-outline"
          type="text"
          readonly
          style="width:108px; height:17px"
          @blur.native="line9Calculation"
        />
      </div>
      <p
        style="position:absolute;top:289px;left:97px;white-space:nowrap"
        class="ft111"
      >
        Other gains or (losses). Attach Form
        4797&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <div class="input-area" style="position:absolute;top:289px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 4. Add Form 4797"
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addForm4797()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:289px;left:736px;white-space:nowrap"
        class="ft112"
      >
        <b>4</b>
      </p>
      <p
        style="position:absolute;top:307px;left:68px;white-space:nowrap"
        class="ft112"
      >
        <b>5</b>
      </p>
      <!-- Rental Real Estate Income Or Loss Amount -->
      <div class="input-area" style="position:absolute;top:307px;left:757px">
        <money
          id="RentalRealEstateIncomeLossAmt"
          v-model="Irs1040Schedule1.RentalRealEstateIncomeLossAmt"
          name="RentalRealEstateIncomeLossAmt"
          data-line-number="5"
          class="no-outline"
          type="text"
          readonly
          style="width:108px; height:17px"
          @blur.native="line9Calculation"
        />
      </div>
      <p
        style="position:absolute;top:307px;left:97px;white-space:nowrap"
        class="ft111"
      >
        Rental real estate, royalties, partnerships, S corporations, trusts,
        etc. Attach Schedule E&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <div class="input-area" style="position:absolute;top:307px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 5. Add Schedule E"
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addScheduleE()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:307px;left:736px;white-space:nowrap"
        class="ft112"
      >
        <b>5</b>
      </p>
      <p
        style="position:absolute;top:325px;left:68px;white-space:nowrap"
        class="ft112"
      >
        <b>6</b>
      </p>
      <!-- Net Farm Profit Or Loss Amount -->
      <div class="input-area" style="position:absolute;top:325px;left:757px">
        <money
          id="NetFarmProfitLossAmt"
          v-model="Irs1040Schedule1.NetFarmProfitLossAmt"
          name="NetFarmProfitLossAmt"
          data-line-number="6"
          class="no-outline"
          type="text"
          readonly
          style="width:108px; height:17px"
          @blur.native="line9Calculation"
        />
      </div>
      <p
        style="position:absolute;top:325px;left:97px;white-space:nowrap"
        class="ft111"
      >
        Farm income or (loss). Attach Schedule
        F&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <div class="input-area" style="position:absolute;top:325px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 6. Add Schedule F"
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addScheduleF()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:325px;left:736px;white-space:nowrap"
        class="ft112"
      >
        <b>6</b>
      </p>
      <p
        style="position:absolute;top:343px;left:68px;white-space:nowrap"
        class="ft112"
      >
        <b>7</b>
      </p>
      <!-- Unemployment Compensation Amount -->
      <money-input
        v-model="Irs1040Schedule1.UnemploymentCompAmt"
        :input-id="UnemploymentCompAmt"
        :div-style="'position:absolute;top:343px;left:757px'"
        name="UnemploymentCompAmt"
        data-line-number="7"
        @change.native="line9Calculation"
      />
      <div
        class="input-area"
        style="position:absolute;top:341px;left:500px;white-space:nowrap"
      >
        <select
          id="form4684Cd"
          v-model="Irs1040Schedule1.repaymentCd"
          name="form4684Cd"
          size="1"
          class="no-outline"
          style="width:90px;height:18px;font-size:11px"
          title="Line 7. If applicable, select an option from the list. See instructions."
        >
          <option value=" "></option>
          <option value="REPAID"> REPAID</option>
        </select>
      </div>
      <money-input
        v-model="Irs1040Schedule1.repaymentAmt"
        :input-id="repaymentAmt"
        :div-style="'position:absolute;top:341px;left:595px'"
        :width="80"
        name="repaymentAmt"
        data-line-number="7"
        @change.native="line9Calculation"
      />
      <p
        style="position:absolute;top:343px;left:97px;white-space:nowrap"
        class="ft111"
      >
        Unemployment
        compensation&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:343px;left:736px;white-space:nowrap"
        class="ft112"
      >
        <b>7</b>
      </p>
      <p
        style="position:absolute;top:361px;left:68px;white-space:nowrap"
        class="ft112"
      >
        <b>8</b>
      </p>
      <p
        style="position:absolute;top:362px;left:97px;white-space:nowrap"
        class="ft111"
      >
        Other income. List type and amount&#160;▶
      </p>
      <!-- Other Income List -->
      <div class="input-area" style="position:absolute;top:361px;left:295px">
        <input
          id="OtherIncomeList"
          v-model="Irs1040Schedule1.OtherIncomeList"
          v-uppercase
          name="OtherIncomeList"
          data-line-number="8"
          class="no-outline"
          type="text"
          style="width:320px; height:17px"
          title="Line 8. Other income. List type."
        />
      </div>
      <div class="input-area" style="position:absolute;top:379px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 8. Add Form461"
          placement="top-start"
        >
          <button class="add-button" style="" size="mini" @click="addForm461()">
            Add
          </button>
        </el-tooltip>
      </div>
      <money-input
        v-model="Irs1040Schedule1.OtherIncomeListAmt"
        :input-id="OtherIncomeListAmt"
        :div-style="'position:absolute;top:361px;left:637px'"
        :width="80"
        name="repaymentAmt"
        data-line-number="8"
        title="Line 8. Other income. List amount."
      />
      <p
        style="position:absolute;top:379px;left:736px;white-space:nowrap"
        class="ft112"
      >
        <b>8</b>
      </p>
      <div class="input-area" style="position:absolute;top:379px;left:757px">
        <money
          id="TotalOtherIncomeAmt"
          v-model="Irs1040Schedule1.TotalOtherIncomeAmt"
          readonly
          data-line-number="8"
          class="no-outline"
          type="text"
          style="width:108px; height:17px"
          @change.native="line9Calculation"
        />
      </div>
      <p
        style="position:absolute;top:396px;left:68px;white-space:nowrap"
        class="ft112"
      >
        <b>9</b>
      </p>
      <p
        style="position:absolute;top:397px;left:97px;white-space:nowrap"
        class="ft111"
      >
        Combine lines 1 through 8. Enter here and on Form 1040 or 1040-SR, line
        7a&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:397px;left:736px;white-space:nowrap"
        class="ft112"
      >
        <b>9</b>
      </p>
      <!-- Total Additional Income Amount  -->
      <div class="input-area" style="position:absolute;top:397px;left:757px">
        <money
          id="TotalAdditionalIncomeAmt"
          v-model="Irs1040Schedule1.TotalAdditionalIncomeAmt"
          readonly
          data-line-number="9"
          class="no-outline"
          type="text"
          style="width:108px; height:17px"
        />
      </div>
      <!-- Part II  Adjustments to Income -->
      <p
        style="position:absolute;top:416px;left:60px;white-space:nowrap"
        class="ft113"
      >
        <b>Part II</b>
      </p>
      <p
        style="position:absolute;top:413px;left:129px;white-space:nowrap"
        class="ft10"
      >
        <b>Adjustments to Income</b>
      </p>
      <p
        style="position:absolute;top:433px;left:61px;white-space:nowrap"
        class="ft112"
      >
        <b>10</b>
      </p>
      <!-- Educator Expenses Amount -->
      <!-- <div class="input-area" style="position:absolute;top:433px;left:757px"> -->
      <money-input
        id="EducatorExpensesAmt"
        v-model="Irs1040Schedule1.EducatorExpensesAmt"
        name="EducatorExpensesAmt"
        :div-style="'position:absolute;top:433px;left:757px'"
        :line="10"
        @change.native="line22Calculation"
      />
      <!-- </div> -->
      <p
        style="position:absolute;top:433px;left:97px;white-space:nowrap"
        class="ft111"
      >
        Educator expenses&#160;
      </p>
      <p
        style="position:absolute;top:433px;left:234px;white-space:nowrap"
        class="ft111"
      >
        .&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:433px;left:732px;white-space:nowrap"
        class="ft112"
      >
        <b>10</b>
      </p>
      <p
        style="position:absolute;top:451px;left:61px;white-space:nowrap"
        class="ft112"
      >
        <b>11&#160;</b>
      </p>
      <p
        style="position:absolute;top:468px;left:76px;white-space:nowrap"
        class="ft112"
      >
        <b>&#160;</b>
      </p>
      <!-- Business Expenses Of Reservists And Others Amount -->
      <div class="input-area" style="position:absolute;top:468px;left:757px">
        <money
          id="BusExpnsReservistsAndOthersAmt"
          v-model="Irs1040Schedule1.BusExpnsReservistsAndOthersAmt"
          name="BusExpnsReservistsAndOthersAmt"
          data-line-number="11"
          class="no-outline"
          type="text"
          readonly
          style="width:108px; height:17px"
          @blur.native="line22Calculation"
        />
      </div>
      <p
        style="position:absolute;top:452px;left:97px;white-space:nowrap"
        class="ft116"
      >
        Certain&#160;business&#160;expenses&#160;of&#160;reservists,&#160;performing&#160;artists,&#160;and&#160;fee-basis&#160;government&#160;officials.&#160;Attach
        <br />Form
        2106&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <div class="input-area" style="position:absolute;top:467px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 11. Add Form 2106"
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addForm2106()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:469px;left:732px;white-space:nowrap"
        class="ft112"
      >
        <b>11</b>
      </p>
      <p
        style="position:absolute;top:487px;left:61px;white-space:nowrap"
        class="ft112"
      >
        <b>12</b>
      </p>
      <p
        style="position:absolute;top:487px;left:97px;white-space:nowrap"
        class="ft111"
      >
        Health savings account deduction. Attach Form
        8889&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <div class="input-area" style="position:absolute;top:487px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 12. Add Form 8889"
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addForm8889()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:487px;left:732px;white-space:nowrap"
        class="ft112"
      >
        <b>12</b>
      </p>
      <!-- Health Savings Account Deduction Amount -->
      <div class="input-area" style="position:absolute;top:487px;left:757px">
        <money
          id="HealthSavingsAccountDedAmt"
          v-model="Irs1040Schedule1.HealthSavingsAccountDedAmt"
          name="HealthSavingsAccountDedAmt"
          data-line-number="12"
          class="no-outline"
          type="text"
          readonly
          style="width:108px; height:17px"
          @blur.native="line22Calculation"
        />
      </div>
      <p
        style="position:absolute;top:505px;left:61px;white-space:nowrap"
        class="ft112"
      >
        <b>13</b>
      </p>
      <p
        style="position:absolute;top:505px;left:97px;white-space:nowrap"
        class="ft111"
      >
        Moving expenses for members of the Armed Forces. Attach Form
        3903&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <div class="input-area" style="position:absolute;top:505px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 13. Add Form 3903"
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addForm3903()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:505px;left:732px;white-space:nowrap"
        class="ft112"
      >
        <b>13</b>
      </p>
      <!-- Moving Expenses Amount -->
      <div class="input-area" style="position:absolute;top:505px;left:757px">
        <money
          id="MovingExpenseAmt"
          v-model="Irs1040Schedule1.MovingExpenseAmt"
          name="MovingExpenseAmt"
          data-line-number="13"
          class="no-outline"
          type="text"
          readonly
          style="width:108px; height:17px"
          @blur.native="line22Calculation"
        />
      </div>
      <div
        class="input-area"
        style="position:absolute;top:505px;left:540px;white-space:nowrap"
      >
        <select
          id="form4684Cd"
          v-model="Irs1040Schedule1.MovingExpenseCd"
          name="form4684Cd"
          size="1"
          class="no-outline"
          style="width:90px;height:18px;font-size:11px"
          title="Line 13. If applicable, select an option from the list. See instructions."
        >
          <option value=" "></option>
          <option value="STORAGE">STORAGE</option>
        </select>
      </div>
      <p
        style="position:absolute;top:523px;left:61px;white-space:nowrap"
        class="ft112"
      >
        <b>14</b>
      </p>
      <p
        style="position:absolute;top:523px;left:97px;white-space:nowrap"
        class="ft111"
      >
        Deductible part of self-employment tax. Attach Schedule
        SE&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <div class="input-area" style="position:absolute;top:523px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 14. Add Schedule SE"
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addScheduleSE()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:523px;left:732px;white-space:nowrap"
        class="ft112"
      >
        <b>14</b>
      </p>
      <!-- Deductible Self-Employment Tax Amount -->
      <div class="input-area" style="position:absolute;top:523px;left:757px">
        <money
          id="DeductibleSelfEmploymentTaxAmt"
          v-model="Irs1040Schedule1.DeductibleSelfEmploymentTaxAmt"
          name="DeductibleSelfEmploymentTaxAmt"
          data-line-number="14"
          class="no-outline"
          type="text"
          readonly
          style="width:108px; height:17px"
          @blur.native="line22Calculation"
        />
      </div>
      <p
        style="position:absolute;top:541px;left:61px;white-space:nowrap"
        class="ft112"
      >
        <b>15</b>
      </p>
      <p
        style="position:absolute;top:541px;left:97px;white-space:nowrap"
        class="ft111"
      >
        Self-employed SEP, SIMPLE, and qualified
        plans&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:541px;left:732px;white-space:nowrap"
        class="ft112"
      >
        <b>15</b>
      </p>
      <!-- Self-Employed SEP, SIMPLE, And Qualified Plans Amount -->
      <!-- <div class="input-area" style="position:absolute;top:541px;left:757px"> -->
      <money-input
        id="SelfEmpldSepSimpleQlfyPlansAmt"
        v-model="Irs1040Schedule1.SelfEmpldSepSimpleQlfyPlansAmt"
        name="SelfEmpldSepSimpleQlfyPlansAmt"
        :line="15"
        :div-style="'position:absolute;top:541px;left:757px'"
        @change.native="line22Calculation"
      />
      <!-- </div> -->
      <p
        style="position:absolute;top:559px;left:61px;white-space:nowrap"
        class="ft112"
      >
        <b>16</b>
      </p>
      <p
        style="position:absolute;top:559px;left:97px;white-space:nowrap"
        class="ft111"
      >
        Self-employed health insurance
        deduction&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:559px;left:732px;white-space:nowrap"
        class="ft112"
      >
        <b>16</b>
      </p>
      <!-- Self-Employed Health Insurance Deduction Amount -->
      <money-input
        id="SelfEmpldHealthInsDedAmt"
        v-model="Irs1040Schedule1.SelfEmpldHealthInsDedAmt"
        name="SelfEmpldHealthInsDedAmt"
        :line="16"
        :div-style="'position:absolute;top:559px;left:757px'"
        @change.native="line22Calculation"
      />
      <p
        style="position:absolute;top:577px;left:61px;white-space:nowrap"
        class="ft112"
      >
        <b>17</b>
      </p>
      <p
        style="position:absolute;top:577px;left:97px;white-space:nowrap"
        class="ft111"
      >
        Penalty on early withdrawal of
        savings&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:577px;left:732px;white-space:nowrap"
        class="ft112"
      >
        <b>17</b>
      </p>
      <!-- Penalty On Early Withdrawal Of Savings Amount -->
      <money-input
        id="PnltyOnErlyWthdrwOfSavingsAmt"
        v-model="Irs1040Schedule1.PnltyOnErlyWthdrwOfSavingsAmt"
        name="PnltyOnErlyWthdrwOfSavingsAmt"
        :line="17"
        :div-style="'position:absolute;top:577px;left:757px'"
        @change.native="line22Calculation"
      />
      <p
        style="position:absolute;top:595px;left:61px;white-space:nowrap"
        class="ft112"
      >
        <b>18a&#160;</b>Alimony
        paid&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:595px;left:728px;white-space:nowrap"
        class="ft112"
      >
        <b>18a</b>
      </p>
      <!-- Alimony Amount Group -->
      <money-input
        id="AlimonyPaidAmt"
        v-model="Irs1040Schedule1.AlimonyPaidAmt"
        name="AlimonyPaidAmt"
        :line="'18a'"
        :div-style="'position:absolute;top:595px;left:757px'"
        @change.native="line22Calculation"
      />
      <p
        style="position:absolute;top:613px;left:76px;white-space:nowrap"
        class="ft112"
      >
        <b>b&#160;</b>Recipient’s SSN&#160;
      </p>
      <p
        style="position:absolute;top:613px;left:216px;white-space:nowrap"
        class="ft111"
      >
        .&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:613px;left:586px;white-space:nowrap"
        class="ft112"
      >
        <b>&#160;</b>▶
      </p>
      <!-- Recipient's SSN -->
      <div class="input-area" style="position:absolute;top:613px;left:605px">
        <input
          id="RecipientSSN"
          v-model="Irs1040Schedule1.RecipientSSN"
          v-mask="'###-##-####'"
          name="RecipientSSN"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          data-line-number="18b"
          class="no-outline"
          type="text"
          style="width:110px; height:17px"
        />
      </div>
      <p
        style="position:absolute;top:631px;left:76px;white-space:nowrap"
        class="ft112"
      >
        <b>c&#160;</b>Date of original divorce or separation agreement (see
        instructions)&#160;▶
      </p>
      <!-- Divorce Or Separation Agreement Date -->
      <div class="input-area" style="position:absolute;top:631px;left:435px">
        <input
          id="DivorceOrSeparationAgreementDt"
          v-model="Irs1040Schedule1.DivorceOrSeparationAgreementDt"
          name="DivorceOrSeparationAgreementDt"
          data-line-number="18c"
          class="no-outline"
          type="date"
          style="width:280px; height:17px"
        />
      </div>
      <p
        style="position:absolute;top:649px;left:61px;white-space:nowrap"
        class="ft112"
      >
        <b>19</b>
      </p>
      <p
        style="position:absolute;top:649px;left:97px;white-space:nowrap"
        class="ft111"
      >
        IRA
        deduction&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:649px;left:732px;white-space:nowrap"
        class="ft112"
      >
        <b>19</b>
      </p>
      <div
        class="input-area"
        style="position:absolute;top:649px;left:540px;white-space:nowrap"
      >
        <select
          id="IRADeductionCd"
          v-model="Irs1040Schedule1.IRADeductionCd"
          name="IRADeductionCd"
          size="1"
          class="no-outline"
          style="width:70px;height:18px;font-size:11px"
          title="Line 19. If applicable, select an option from the list. See instructions."
        >
          <option value=" "></option>
          <option value="D">D</option>
        </select>
      </div>
      <!-- IRA Deduction Amount -->
      <money-input
        id="IRADeductionAmt"
        v-model="Irs1040Schedule1.IRADeductionAmt"
        name="IRADeductionAmt"
        :line="19"
        :div-style="'position:absolute;top:649px;left:757px'"
        @change.native="line22Calculation"
      />
      <p
        style="position:absolute;top:667px;left:61px;white-space:nowrap"
        class="ft112"
      >
        <b>20</b>
      </p>
      <p
        style="position:absolute;top:667px;left:97px;white-space:nowrap"
        class="ft111"
      >
        Student loan interest
        deduction&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:667px;left:732px;white-space:nowrap"
        class="ft112"
      >
        <b>20</b>
      </p>
      <!-- Student Loan Interest Deduction Amount -->
      <money-input
        id="StudentLoanInterestDedAmt"
        v-model="Irs1040Schedule1.StudentLoanInterestDedAmt"
        name="StudentLoanInterestDedAmt"
        :line="20"
        :div-style="'position:absolute;top:667px;left:757px'"
        @change.native="line22Calculation"
      />
      <p
        style="position:absolute;top:685px;left:61px;white-space:nowrap"
        class="ft112"
      >
        <b>21</b>
      </p>
      <p
        style="position:absolute;top:685px;left:97px;white-space:nowrap"
        class="ft111"
      >
        Tuition and fees. Attach Form
        8917&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <div class="input-area" style="position:absolute;top:685px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 21. Add Form 8917"
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addForm8917()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:685px;left:732px;white-space:nowrap"
        class="ft112"
      >
        <b>21</b>
      </p>
      <!-- Tuition And Fees deduction Amount -->
      <div class="input-area" style="position:absolute;top:685px;left:757px">
        <money
          id="TuitionAndFeesDedAmt"
          v-model="Irs1040Schedule1.TuitionAndFeesDedAmt"
          name="TuitionAndFeesDedAmt"
          data-line-number="21"
          class="no-outline"
          type="text"
          readonly
          style="width:108px; height:17px"
          @blur.native="line22Calculation"
        />
      </div>
      <p
        style="position:absolute;top:704px;left:61px;white-space:nowrap"
        class="ft112"
      >
        <b>22&#160;</b>
      </p>
      <p
        style="position:absolute;top:720px;left:76px;white-space:nowrap"
        class="ft112"
      >
        <b>&#160;</b>
      </p>
      <!-- Other Adjustments Total Amount -->
      <div class="input-area" style="position:absolute;top:720px;left:757px">
        <money
          id="TotalAdjustmentsAmt"
          v-model="Irs1040Schedule1.TotalAdjustmentsAmt"
          name="TotalAdjustmentsAmt"
          readonly
          data-line-number="22"
          class="no-outline"
          type="text"
          style="width:108px; height:17px"
        />
      </div>
      <p
        style="position:absolute;top:704px;left:97px;white-space:nowrap"
        class="ft111"
      >
        Add&#160;lines&#160;10&#160;through&#160;21.&#160;These&#160;are&#160;your&#160;
      </p>
      <p
        style="position:absolute;top:704px;left:353px;white-space:nowrap"
        class="ft112"
      >
        <b>adjustments&#160;to&#160;income.</b
        >&#160;Enter&#160;here&#160;and&#160;on&#160;Form&#160;1040&#160;or&#160;
      </p>
      <p
        style="position:absolute;top:721px;left:97px;white-space:nowrap"
        class="ft111"
      >
        1040-SR, line
        8a&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:721px;left:732px;white-space:nowrap"
        class="ft112"
      >
        <b>22</b>
      </p>
      <p
        style="position:absolute;top:741px;left:54px;white-space:nowrap"
        class="ft11"
      >
        <b>
          XOB For Paperwork Reduction Act Notice, see your tax return
          instructions.&#160;
        </b>
      </p>
      <p
        style="position:absolute;top:742px;left:518px;white-space:nowrap"
        class="ft12"
      >
        Cat. No. 0000/1736
      </p>
      <p
        style="position:absolute;top:742px;left:662px;white-space:nowrap"
        class="ft110"
      >
        <b>Schedule 1 (Form 1040 or 1040-SR) 2019</b>
      </p>
    </div>
  </div>
</template>

<script>
import { formService } from '~/services/form-service'
import { SCHEDULE1_UPDATED } from '~/events'
import {
  ADD_SCHEDULE_C,
  SCHEDULEC_UPDATED,
  IRS1040_UPDATED,
  ADD_IRS461,
  IRS461_UPDATED
} from '~/events/event'
import MoneyInput from '~/components/Currency/MoneyInput'
export default {
  name: 'Irs1040Schedule1',
  components: { MoneyInput },
  data() {
    return {
      Irs1040Schedule1: {
        VirtualCurAcquiredDurTYInd: null
      }
    }
  },
  mounted() {
    let firstName = ''
    let lastName = ''
    let ssn = ''
    if (this.$store.state.attachments.Irs1040) {
      // eslint-disable-next-line no-console
      console.log('1040 no value yet')
      firstName = this.$store.state.attachments.Irs1040.firstName ?? ''
      lastName = this.$store.state.attachments.Irs1040.lastName ?? ''
      ssn = this.$store.state.attachments.Irs1040.ssn ?? ''
    }
    this.Irs1040Schedule1.name = firstName + ' ' + lastName
    this.Irs1040Schedule1.ssn = ssn

    formService.$on(IRS1040_UPDATED, (data) => {
      const firstName = data.firstName ?? ''
      const lastName = data.lastName ?? ''
      this.Irs1040Schedule1.ssn = data.ssn
      this.Irs1040Schedule1.name = firstName + ' ' + lastName
      this.$forceUpdate()
    })
    formService.$on(IRS461_UPDATED, (data) => {
      if (data) {
        if (data.ExcessBusinessLossAmt < 0) {
          this.Irs1040Schedule1.TotalOtherIncomeAmt =
            data.ExcessBusinessLossAmt * -1
          this.$forceUpdate()
        }
      } else {
        this.Irs1040Schedule1.TotalOtherIncomeAmt = 0
        this.$forceUpdate()
      }
    })
    formService.$on(SCHEDULEC_UPDATED, (data) => {
      if (data) {
        // if (data.NetProfitOrLossAmt > 0) {
        this.Irs1040Schedule1.BusinessIncomeLossAmt = data.NetProfitOrLossAmt
        const attachments = this.$store.state.attachments
        attachments.Irs1040ScheduleC = data
        this.$store.commit('UPDATE_ATTACHEMENTS', attachments)
        this.$forceUpdate()
        // }
      } else {
        this.Irs1040Schedule1.BusinessIncomeLossAmt = 0
        this.$forceUpdate()
      }
    })
  },
  methods: {
    line9Calculation() {
      // Line 9 = 1+2a+3+4+5+6+7+8
      const line1 = this.Irs1040Schedule1.StateLocalIncomeTaxRefundAmt ?? 0
      const line2a = this.Irs1040Schedule1.AlimonyReceivedAmt ?? 0
      const line3 = this.Irs1040Schedule1.BusinessIncomeLossAmt ?? 0
      const line4 = this.Irs1040Schedule1.OtherGainLossAmt ?? 0
      const line5 = this.Irs1040Schedule1.RentalRealEstateIncomeLossAmt ?? 0
      const line6 = this.Irs1040Schedule1.NetFarmProfitLossAmt ?? 0
      const line7 = this.Irs1040Schedule1.UnemploymentCompAmt ?? 0
      const line8 = this.Irs1040Schedule1.TotalOtherIncomeAmt ?? 0

      const line9 =
        line1 + line2a + line3 + line4 + line5 + line6 + +line7 + line8
      this.Irs1040Schedule1.TotalAdditionalIncomeAmt = line9
      formService.$emit(SCHEDULE1_UPDATED, this.Irs1040Schedule1)
    },
    line22Calculation() {
      // Line 22 = 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18a + 19 + 20 + 21
      const line10 = this.Irs1040Schedule1.EducatorExpensesAmt ?? 0
      const line11 = this.Irs1040Schedule1.BusExpnsReservistsAndOthersAmt ?? 0
      const line12 = this.Irs1040Schedule1.HealthSavingsAccountDedAmt ?? 0
      const line13 = this.Irs1040Schedule1.MovingExpenseAmt ?? 0
      const line14 = this.Irs1040Schedule1.DeductibleSelfEmploymentTaxAmt ?? 0
      const line15 = this.Irs1040Schedule1.SelfEmpldSepSimpleQlfyPlansAmt ?? 0
      const line16 = this.Irs1040Schedule1.SelfEmpldHealthInsDedAmt ?? 0
      const line17 = this.Irs1040Schedule1.PnltyOnErlyWthdrwOfSavingsAmt ?? 0
      const line18a = this.Irs1040Schedule1.AlimonyPaidAmt ?? 0
      const line19 = this.Irs1040Schedule1.IRADeductionAmt ?? 0
      const line20 = this.Irs1040Schedule1.StudentLoanInterestDedAmt ?? 0
      const line21 = this.Irs1040Schedule1.TuitionAndFeesDedAmt ?? 0
      const line22 =
        line10 +
        line11 +
        line12 +
        line13 +
        line14 +
        line15 +
        line16 +
        line17 +
        line18a +
        line19 +
        line20 +
        line21

      this.Irs1040Schedule1.TotalAdjustmentsAmt = line22
      formService.$emit(SCHEDULE1_UPDATED, this.Irs1040Schedule1)
    },
    addScheduleC() {
      formService.$emit(ADD_SCHEDULE_C)
    },
    addForm4797() {
      // eslint-disable-next-line no-console
      console.log('load form 4797')
    },
    addScheduleE() {
      // eslint-disable-next-line no-console
      console.log('load schedule e form')
    },
    addScheduleF() {
      // eslint-disable-next-line no-console
      console.log('load schedule f form')
    },
    addForm2106() {
      // eslint-disable-next-line no-console
      console.log('load form 4797')
    },
    addForm8889() {
      // eslint-disable-next-line no-console
      console.log('load form 8889')
    },
    addForm3903() {
      // eslint-disable-next-line no-console
      console.log('load form 3903')
    },
    addScheduleSE() {
      // eslint-disable-next-line no-console
      console.log('load schedule se')
    },
    addForm8917() {
      // eslint-disable-next-line no-console
      console.log('load form 8917')
    },
    addForm461() {
      formService.$emit(ADD_IRS461)
    },
    updateData() {
      this.Irs1040Schedule1.name =
        this.$store.state.attachments.Irs1040.firstName +
        ' ' +
        this.$store.state.attachments.Irs1040.lastName
      this.Irs1040Schedule1.ssn = this.$store.state.attachments.Irs1040.ssn
    }
  }
}
</script>

<style scoped>
#pdf-pages {
  color: #000000;
}

#page1-div {
  background-image: url('../../static/form-assets/schedule1.png');
}
.ft13 {
  font-size: 20px;
  font-weight: bold;
}
.ft18 {
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
  color: white;
}

select,
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
/* Checkbox style */
.checkbox-container {
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 1px;
  left: -1px;
  height: 14px;
  width: 14px;
  border: 1px solid;
  background-color: #fff;
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 5px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid #000;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
