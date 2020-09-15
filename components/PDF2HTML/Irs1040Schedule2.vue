<template>
  <!-- ==================== IRS Form 1040 Schedule 2 ==================== -->
  <div
    id="pdf-pages"
    style="font-size: 11px;
    font-family: Helvetica Neue,Helvetica, QuickType, Arial, sans-serif"
  >
    <div id="page1-div" style="position:relative;width:918px;height:570px;">
      <!-- <img
        width="918"
        height="1188"
        src="../../static/form-assets/schedule2.png"
      /> -->
      <p
        style="position:absolute;top:52px;left:54px;white-space:nowrap"
        class="ft114"
      >
        <b>
          <span style="font-size:15px; font-weight:600">SCHEDULE 2&#160;</span>
          <br />(Form 1040 or 1040-SR)&#160;</b
        >
      </p>
      <p
        style="position:absolute;top:70px;left:760px;white-space:nowrap"
        class="ft12"
      >
        <strong><span class="year">20</span>19</strong>
      </p>
      <p
        style="position:absolute;top:58px;left:381px;white-space:nowrap"
        class="ft13"
      >
        Additional Taxes
      </p>
      <p
        style="position:absolute;top:97px;left:54px;white-space:nowrap; font-size:10px;"
        class="ft115"
      >
        Department of the Treasury &#160;<br />Internal Revenue Service &#160;
      </p>
      <p
        style="position:absolute;top:94px;left:361px;white-space:nowrap"
        class="ft15"
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
        class="ft15"
      >
        &#160;▶<b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:107px;left:260px;white-space:nowrap"
        class="ft11"
      >
        <b>Go to&#160;<i>www.irs.gov/Form1040</i></b
        ><b>&#160;for instructions and the latest information.</b>
      </p>
      <p
        style="position:absolute;top:55px;left:750px;white-space:nowrap"
        class="ft14"
      >
        OMB No. 1545-1736
      </p>
      <p
        style="position:absolute;top:101px;left:752px;white-space:nowrap"
        class="ft14"
      >
        Attachment &#160;&#160;
      </p>
      <p
        style="position:absolute;top:112px;left:752px;white-space:nowrap"
        class="ft14"
      >
        Sequence No.&#160;
      </p>
      <p
        style="position:absolute;top:111px;left:822px;white-space:nowrap; font-size:13px"
        class="ft10"
      >
        <b>02</b>&#160;
      </p>
      <p
        style="position:absolute;top:129px;left:54px;white-space:nowrap"
        class="ft14"
      >
        Name(s) shown on Form 1040 or 1040-SR
      </p>
      <div class="input-area" style="position:absolute;top:142px;left:54px">
        <input
          id="name"
          v-model="Irs1040Schedule2.name"
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
        class="ft110"
      >
        <b>Your social security number</b>
      </p>
      <div class="input-area" style="position:absolute;top:142px;left:704px">
        <input
          id="ssn"
          v-model="Irs1040Schedule2.ssn"
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
        style="position:absolute;top:165px;left:62px;white-space:nowrap"
        class="ft111"
      >
        <b>Part I&#160;</b>
      </p>
      <p
        style="position:absolute;top:165px;left:129px;white-space:nowrap"
        class="ft10"
      >
        <b>Tax</b>
      </p>
      <p
        style="position:absolute;top:181px;left:68px;white-space:nowrap"
        class="ft112"
      >
        <b>1</b>
      </p>
      <p
        style="position:absolute;top:181px;left:97px;white-space:nowrap"
        class="ft113"
      >
        Alternative minimum tax. Attach Form 6251&#160;
      </p>
      <div class="input-area" style="position:absolute;top:181px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 1. Add Form 6251"
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addForm6251()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:181px;left:378px;white-space:nowrap"
        class="ft113"
      >
        .&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:181px;left:736px;white-space:nowrap"
        class="ft112"
      >
        <b>1</b>
      </p>
      <!-- Part I  Tax -->

      <!-- Alternative Minimum Tax -->
      <money-input
        v-model="Irs1040Schedule2.AlternativeMinimumTaxAmt"
        name="AlternativeMinimumTaxAmt"
        :div-style="'position:absolute;top:181px;left:757px'"
        :line="'1'"
        @change.native="line3Calculation"
      />
      <p
        style="position:absolute;top:199px;left:68px;white-space:nowrap"
        class="ft112"
      >
        <b>2</b>
      </p>
      <p
        style="position:absolute;top:199px;left:97px;white-space:nowrap"
        class="ft113"
      >
        Excess advance premium tax credit repayment. Attach Form
        8962&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <div class="input-area" style="position:absolute;top:199px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 2. Add Form 8962"
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
        style="position:absolute;top:199px;left:736px;white-space:nowrap"
        class="ft112"
      >
        <b>2</b>
      </p>
      <!-- Premium Tax Credit Tax Liability Amount -->
      <money-input
        v-model="Irs1040Schedule2.PremiumTaxCreditTaxLiabAmt"
        name="PremiumTaxCreditTaxLiabAmt"
        :div-style="'position:absolute;top:199px;left:757px'"
        :line="'2'"
        @change.native="line3Calculation"
      />
      <p
        style="position:absolute;top:217px;left:68px;white-space:nowrap"
        class="ft112"
      >
        <b>3</b>
      </p>
      <p
        style="position:absolute;top:217px;left:97px;white-space:nowrap"
        class="ft113"
      >
        Add lines 1 and 2. Enter here and include on Form 1040 or 1040-SR, line
        12b&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:217px;left:736px;white-space:nowrap"
        class="ft112"
      >
        <b>3</b>
      </p>
      <!-- Additional Tax Amount -->
      <div class="input-area" style="position:absolute;top:217px;left:757px">
        <money
          id="AdditionalTaxAmt"
          v-model="Irs1040Schedule2.AdditionalTaxAmt"
          name="AdditionalTaxAmt"
          data-line-number="3"
          class="no-outline"
          readonly
          type="text"
          style="width:108px; height:17px"
        />
      </div>
      <p
        style="position:absolute;top:236px;left:60px;white-space:nowrap"
        class="ft111"
      >
        <b>Part II</b>
      </p>
      <p
        style="position:absolute;top:236px;left:129px;white-space:nowrap"
        class="ft10"
      >
        <b>Other Taxes</b>
      </p>
      <p
        style="position:absolute;top:253px;left:68px;white-space:nowrap"
        class="ft112"
      >
        <b>4</b>
      </p>
      <p
        style="position:absolute;top:253px;left:97px;white-space:nowrap"
        class="ft113"
      >
        Self-employment tax. Attach Schedule
        SE&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <div class="input-area" style="position:absolute;top:254px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 4. Add Schedule SE"
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
        style="position:absolute;top:253px;left:736px;white-space:nowrap"
        class="ft112"
      >
        <b>4</b>
      </p>
      <!-- Part II  Other Taxes -->

      <!-- Self-Employment Tax Amount -->
      <money-input
        id="SelfEmploymentTaxAmt"
        v-model="Irs1040Schedule2.SelfEmploymentTaxAmt"
        name="SelfEmploymentTaxAmt"
        :div-style="'position:absolute;top:253px;left:757px'"
        :line="'4'"
        @change.native="line10Calculation"
      />
      <p
        style="position:absolute;top:271px;left:68px;white-space:nowrap"
        class="ft112"
      >
        <b>5</b>
      </p>
      <p
        style="position:absolute;top:271px;left:97px;white-space:nowrap"
        class="ft113"
      >
        Unreported social security and Medicare tax from Form:
      </p>
      <p
        style="position:absolute;top:271px;left:454px;white-space:nowrap"
        class="ft112"
      >
        <b>a</b>&#160;
      </p>
      <!-- Form 4137 Indicator -->
      <label
        style="position:absolute;top:271px;left:471px;"
        class="checkbox-container"
      >
        <input
          id="Form4137Ind"
          v-model="Irs1040Schedule2.Form4137Ind"
          name="Form4137Ind"
          data-line-number="5a"
          class="no-outline checkbox"
          type="checkbox"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:271px;left:489px;white-space:nowrap"
        class="ft113"
      >
        4137
      </p>
      <p
        style="position:absolute;top:271px;left:551px;white-space:nowrap"
        class="ft112"
      >
        <b>b</b>
      </p>
      <!-- Form 8919 Indicator -->
      <label
        style="position:absolute;top:271px;left:568px;"
        class="checkbox-container"
      >
        <input
          id="Form8919Ind"
          v-model="Irs1040Schedule2.Form8919Ind"
          name="Form8919Ind"
          data-line-number="5b"
          class="no-outline checkbox"
          type="checkbox"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:271px;left:586px;white-space:nowrap"
        class="ft113"
      >
        8919&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:271px;left:736px;white-space:nowrap"
        class="ft112"
      >
        <b>5</b>
      </p>
      <!-- Unreported Social Security and Medicare Tax Amount -->
      <money-input
        v-model="Irs1040Schedule2.UnrprtdSocSecAndMedcrTaxAmt"
        name="UnrprtdSocSecAndMedcrTaxAmt"
        :div-style="'position:absolute;top:271px;left:757px'"
        :line="'5'"
        @change.native="line10Calculation"
      />
      <p
        style="position:absolute;top:291px;left:68px;white-space:nowrap"
        class="ft112"
      >
        <b>6&#160;</b>
      </p>
      <p
        style="position:absolute;top:307px;left:76px;white-space:nowrap"
        class="ft112"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:291px;left:97px;white-space:nowrap"
        class="ft116"
      >
        Additional&#160;tax&#160;on&#160;IRAs,&#160;other&#160;qualified&#160;retirement&#160;plans,&#160;and&#160;other&#160;tax-favored&#160;accounts.&#160;Attach&#160;Form<br />5329
        if
        required&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <div class="input-area" style="position:absolute;top:306px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 6. Add Form 5329"
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addForm5329()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:307px;left:736px;white-space:nowrap"
        class="ft112"
      >
        <b>6</b>
      </p>
      <!-- Tax On IRAs Amount -->
      <money-input
        v-model="Irs1040Schedule2.TaxOnIRAsAmt"
        name="TaxOnIRAsAmt"
        :div-style="'position:absolute;top:307px;left:757px'"
        :line="'6'"
        @change.native="line10Calculation"
      />
      <p
        style="position:absolute;top:325px;left:68px;white-space:nowrap"
        class="ft112"
      >
        <b>7a&#160;</b>Household employment taxes. Attach Schedule
        H&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <div class="input-area" style="position:absolute;top:325px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 7a. Add Schedule H"
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addScheduleH()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:325px;left:732px;white-space:nowrap"
        class="ft112"
      >
        <b>7a</b>
      </p>
      <money-input
        v-model="Irs1040Schedule2.HouseholdEmploymentTaxAmt"
        name="HouseholdEmploymentTaxAmt"
        :div-style="'position:absolute;top:325px;left:757px'"
        :line="'7a'"
        @change.native="line10Calculation"
      />
      <p
        style="position:absolute;top:343px;left:76px;white-space:nowrap"
        class="ft112"
      >
        <b>b&#160;</b>Repayment of first-time homebuyer credit from Form 5405.
        Attach Form 5405 if required&#160;&#160;.&#160;.&#160;.&#160;.
      </p>
      <div class="input-area" style="position:absolute;top:343px;left:680px">
        <el-tooltip
          class="item"
          effect="dark"
          content="Line 7b. Add Form 5405"
          placement="top-start"
        >
          <button
            class="add-button"
            style=""
            size="mini"
            @click="addForm5405()"
          >
            Add
          </button>
        </el-tooltip>
      </div>
      <p
        style="position:absolute;top:343px;left:732px;white-space:nowrap"
        class="ft112"
      >
        <b>7b</b>
      </p>
      <!-- First-Time Home-Buyer Repayment Amount -->
      <money-input
        v-model="Irs1040Schedule2.FirstTimeHmByrRepaymentAmt"
        name="FirstTimeHmByrRepaymentAmt"
        :div-style="'position:absolute;top:343px;left:757px'"
        :line="'7b'"
        @change.native="line10Calculation"
      />
      <p
        style="position:absolute;top:361px;left:68px;white-space:nowrap"
        class="ft112"
      >
        <b>8</b>
      </p>
      <p
        style="position:absolute;top:361px;left:97px;white-space:nowrap"
        class="ft113"
      >
        Taxes from:
      </p>
      <p
        style="position:absolute;top:361px;left:184px;white-space:nowrap"
        class="ft112"
      >
        <b>a</b>&#160;
      </p>
      <!-- Form 8959 Indicator -->
      <label
        style="position:absolute;top:361px;left:201px;"
        class="checkbox-container"
      >
        <input
          id="Form8959Ind"
          v-model="Irs1040Schedule2.Form8959Ind"
          name="Form8959Ind"
          data-line-number="8a"
          class="no-outline checkbox"
          type="checkbox"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:361px;left:219px;white-space:nowrap"
        class="ft113"
      >
        Form 8959
      </p>
      <p
        style="position:absolute;top:361px;left:313px;white-space:nowrap"
        class="ft112"
      >
        <b>b</b>
      </p>
      <!-- Form 8960 Indicator -->
      <label
        style="position:absolute;top:361px;left:331px;"
        class="checkbox-container"
      >
        <input
          id="Form8960Ind"
          v-model="Irs1040Schedule2.Form8960Ind"
          name="Form8960Ind"
          data-line-number="8b"
          class="no-outline checkbox"
          type="checkbox"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:361px;left:348px;white-space:nowrap"
        class="ft113"
      >
        Form 8960
      </p>
      <p
        style="position:absolute;top:379px;left:97px;white-space:nowrap"
        class="ft112"
      >
        <b>c</b>
      </p>
      <!-- Other Tax Code Indicator -->
      <label
        style="position:absolute;top:379px;left:115px;"
        class="checkbox-container"
      >
        <input
          id="OtherTaxCdInd"
          v-model="Irs1040Schedule2.OtherTaxCdInd"
          name="OtherTaxCdInd"
          data-line-number="8c"
          class="no-outline checkbox"
          type="checkbox"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:379px;left:132px;white-space:nowrap"
        class="ft113"
      >
        Instructions; enter code(s)
      </p>
      <!-- Other Tax Code Indicator -->
      <div class="input-area" style="position:absolute;top:378px;left:290px">
        <input
          id="code"
          v-model="Irs1040Schedule2.code"
          v-uppercase
          name="code"
          data-line-number="8c"
          class="no-outline"
          type="text"
          style="width:426px; height:17px"
        />
      </div>
      <p
        style="position:absolute;top:379px;left:736px;white-space:nowrap"
        class="ft112"
      >
        <b>8</b>
      </p>
      <!-- Forms 8959 And 8960 And Other Taxes Amount  -->
      <money-input
        v-model="Irs1040Schedule2.Frm89598960OtherTaxAmt"
        name="Frm89598960OtherTaxAmt"
        :div-style="'position:absolute;top:379px;left:757px'"
        :line="'8'"
        @change.native="line10Calculation"
      />
      <p
        style="position:absolute;top:397px;left:68px;white-space:nowrap"
        class="ft112"
      >
        <b>9</b>
      </p>
      <p
        style="position:absolute;top:397px;left:97px;white-space:nowrap"
        class="ft113"
      >
        Section 965 net tax liability installment from Form
        965-A&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:397px;left:596px;white-space:nowrap"
        class="ft112"
      >
        <b>9</b>
      </p>
      <!-- Section 965 Tax Installment Amount  -->
      <money-input
        v-model="Irs1040Schedule2.Section965TaxInstallmentAmt"
        name="Section965TaxInstallmentAmt"
        :div-style="'position:absolute;top:397px;left:615px'"
        :line="'9'"
        @change.native="line10Calculation"
      />
      <p
        style="position:absolute;top:416px;left:61px;white-space:nowrap"
        class="ft112"
      >
        <b>10&#160;</b>
      </p>
      <p
        style="position:absolute;top:432px;left:76px;white-space:nowrap"
        class="ft112"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:416px;left:97px;white-space:nowrap"
        class="ft113"
      >
        Add&#160;lines&#160;4&#160;through&#160;8.&#160;These&#160;are&#160;your&#160;
      </p>
      <p
        style="position:absolute;top:416px;left:336px;white-space:nowrap"
        class="ft112"
      >
        <b>total&#160;other&#160;taxes.</b
        >&#160;Enter&#160;here&#160;and&#160;on&#160;Form&#160;1040&#160;or&#160;1040-SR,&#160;
      </p>
      <p
        style="position:absolute;top:433px;left:97px;white-space:nowrap"
        class="ft113"
      >
        line
        15&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:433px;left:732px;white-space:nowrap"
        class="ft112"
      >
        <b>10</b>
      </p>
      <!-- Total Other Taxes Amount  -->
      <div class="input-area" style="position:absolute;top:433px;left:757px">
        <money
          id="TotalOtherTaxesAmt"
          v-model="Irs1040Schedule2.TotalOtherTaxesAmt"
          name="TotalOtherTaxesAmt"
          data-line-number="10"
          class="no-outline"
          type="text"
          style="width:108px; height:17px"
          readonly
        />
      </div>
      <p
        style="position:absolute;top:453px;left:54px;white-space:nowrap"
        class="ft11"
      >
        <b
          >XOB For Paperwork Reduction Act Notice, see your tax return
          instructions.&#160;</b
        >
      </p>
      <p
        style="position:absolute;top:455px;left:517px;white-space:nowrap"
        class="ft14"
      >
        Cat. No. 0000/1736
      </p>
      <p
        style="position:absolute;top:455px;left:662px;white-space:nowrap"
        class="ft110"
      >
        <b>Schedule 2 (Form 1040 or 1040-SR) 2019</b>
      </p>
    </div>
  </div>
</template>
<script>
import { formService } from '~/services/form-service'
import {
  SCHEDULE2_UPDATED,
  IRS8962_UPDATED,
  IRS1040_UPDATED
} from '~/events/event'
import MoneyInput from '~/components/Currency/MoneyInput'
export default {
  name: 'Irs1040Schedule2',
  components: { MoneyInput },
  data() {
    return {
      Irs1040Schedule2: {}
    }
  },
  mounted() {
    let firstName = ''
    let lastName = ''
    let ssn = ''
    if (this.$store.state.attachments.Irs1040) {
      firstName = this.$store.state.attachments.Irs1040.firstName ?? ''
      lastName = this.$store.state.attachments.Irs1040.lastName ?? ''
      ssn = this.$store.state.attachments.Irs1040.ssn ?? ''
    }
    this.Irs1040Schedule2.name = firstName + ' ' + lastName
    this.Irs1040Schedule2.ssn = ssn

    formService.$on(IRS1040_UPDATED, (data) => {
      this.Irs1040Schedule2.ssn = data.ssn
      this.Irs1040Schedule2.name = data.firstName + ' ' + data.lastName
      this.$forceUpdate()
    })
    formService.$on(IRS8962_UPDATED, (data) => {
      if (data) {
        this.Irs1040Schedule2.PremiumTaxCreditTaxLiabAmt =
          data.PremiumTaxCreditTaxLiabAmt
        this.$forceUpdate()
      } else {
        this.Irs1040Schedule2.PremiumTaxCreditTaxLiabAmt = ''
      }
    })
  },
  methods: {
    line3Calculation() {
      // Line 3 = 1+2
      let {
        AlternativeMinimumTaxAmt,
        PremiumTaxCreditTaxLiabAmt
      } = this.Irs1040Schedule2
      AlternativeMinimumTaxAmt = AlternativeMinimumTaxAmt ?? 0
      PremiumTaxCreditTaxLiabAmt = PremiumTaxCreditTaxLiabAmt ?? 0
      const line3 = AlternativeMinimumTaxAmt + PremiumTaxCreditTaxLiabAmt
      this.Irs1040Schedule2.AdditionalTaxAmt = line3
      formService.$emit(SCHEDULE2_UPDATED, this.Irs1040Schedule2)
    },
    line10Calculation() {
      // Line 10= 4+5+6+7a+7b+8+9
      let {
        SelfEmploymentTaxAmt,
        UnrprtdSocSecAndMedcrTaxAmt,
        TaxOnIRAsAmt,
        HouseholdEmploymentTaxAmt,
        FirstTimeHmByrRepaymentAmt,
        Frm89598960OtherTaxAmt,
        Section965TaxInstallmentAmt
      } = this.Irs1040Schedule2
      SelfEmploymentTaxAmt = SelfEmploymentTaxAmt ?? 0
      UnrprtdSocSecAndMedcrTaxAmt = UnrprtdSocSecAndMedcrTaxAmt ?? 0
      TaxOnIRAsAmt = TaxOnIRAsAmt ?? 0
      HouseholdEmploymentTaxAmt = HouseholdEmploymentTaxAmt ?? 0
      FirstTimeHmByrRepaymentAmt = FirstTimeHmByrRepaymentAmt ?? 0
      Frm89598960OtherTaxAmt = Frm89598960OtherTaxAmt ?? 0
      Section965TaxInstallmentAmt = Section965TaxInstallmentAmt ?? 0
      const line10 =
        SelfEmploymentTaxAmt +
        UnrprtdSocSecAndMedcrTaxAmt +
        TaxOnIRAsAmt +
        HouseholdEmploymentTaxAmt +
        FirstTimeHmByrRepaymentAmt +
        Frm89598960OtherTaxAmt +
        Section965TaxInstallmentAmt
      this.Irs1040Schedule2.TotalOtherTaxesAmt = line10
      formService.$emit(SCHEDULE2_UPDATED, this.Irs1040Schedule2)
    },
    addForm6251() {
      // eslint-disable-next-line no-console
      console.log('load form 6251')
    },
    addForm8962() {
      // eslint-disable-next-line no-console
      console.log('load form 8962')
    },
    addForm5329() {
      // eslint-disable-next-line no-console
      console.log('load form 5329')
    },
    addScheduleSE() {
      // eslint-disable-next-line no-console
      console.log('load schedule SE')
    },
    addScheduleH() {
      // eslint-disable-next-line no-console
      console.log('load schedule H')
    },
    addForm5405() {
      // eslint-disable-next-line no-console
      console.log('load form 5329')
    }
  }
}
</script>
<style scoped>
#pdf-pages {
  color: #000000;
}

#page1-div {
  background-image: url('../../static/form-assets/schedule2.png');
}

.ft13 {
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
.ft111 {
  top: 10px;
  color: white;
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
