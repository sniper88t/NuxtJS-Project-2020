<!--========================= IRS Form 461 ==========================-->
<template>
  <div
    id="pdf-pages"
    style="font-size: 11px;
    font-family: Helvetica Neue,Helvetica, QuickType, Arial, sans-serif"
  >
    <div id="page-div" style="position:relative;width:917px;height:1187px;">
      <!-- <img
        width="918"
        height="1188"
        src="../../static/form-assets/irs8962001.png"
        alt="background image"
      /> -->
      <p
        style="position:absolute;top:72px;left:54px;font-size: 18px"
        class="ft10"
      >
        Form &#160;
      </p>
      <p
        style="position:absolute;top:44px;left:90px;white-space:nowrap"
        class="ft11"
      >
        <b>461</b>
      </p>
      <p
        style="position:absolute;top:114px;left:54px;white-space:nowrap"
        class="ft113"
      >
        Department of the Treasury&#160;<br />Internal Revenue Service
      </p>
      <p
        style="position:absolute;top:55px;left:316px;white-space:nowrap"
        class="ft12"
      >
        Limitation on Business Losses
      </p>
      <p
        style="position:absolute;top:108px;left:382px;white-space:nowrap"
        class="ft13"
      >
        ▶&#160;
      </p>
      <p
        style="position:absolute;top:105px;left:393px;white-space:nowrap"
        class="ft14"
      >
        <b>Attach to your tax return.</b>
      </p>
      <p
        style="position:absolute;top:129px;left:251px;white-space:nowrap"
        class="ft13"
      >
        ▶&#160;
      </p>
      <p
        style="position:absolute;top:126px;left:263px;white-space:nowrap"
        class="ft14"
      >
        <b>Go to&#160;<i>www.irs.gov/Form461&#160;</i></b>
        <b>for instructions and the<i>&#160;</i></b>
        <b>latest information.</b>
      </p>
      <p
        style="position:absolute;top:55px;left:750px;white-space:nowrap;font-size:11px"
        class="ft10"
      >
        OMB No. 1545-1736
      </p>
      <p
        style="position:absolute;top:76px;left:760px;white-space:nowrap;font-size: 30px;"
        class="ft16"
      >
        <strong><span class="year">20</span>19</strong>
      </p>
      <p
        style="position:absolute;top:115px;left:752px;white-space:nowrap"
        class="ft10"
      >
        Attachment &#160;&#160;
      </p>
      <p
        style="position:absolute;top:127px;left:752px;white-space:nowrap"
        class="ft10"
      >
        Sequence No.&#160;
      </p>
      <p
        style="position:absolute;top:122px;left:822px;white-space:nowrap"
        class="ft17"
      >
        <b>461</b>
      </p>
      <p
        style="position:absolute;top:146px;left:54px;white-space:nowrap"
        class="ft10"
      >
        Name(s) shown on return
      </p>
      <div class="input-area" style="position:absolute;top:160px;left:54px">
        <input
          id="Irs461_name"
          v-model="Irs461.name"
          v-uppercase
          name="Irs461_name"
          class="no-outline"
          type="text"
          style="width:637px; height:18px"
          readonly
        />
      </div>
      <p
        style="position:absolute;top:146px;left:697px;white-space:nowrap"
        class="ft18"
      >
        <b>Identifying number</b>
      </p>
      <div class="input-area" style="position:absolute;top:160px;left:694px">
        <input
          id="ssn"
          v-model="Irs461.ssn"
          v-mask="'###-##-####'"
          name="ssn"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          class="no-outline"
          type="password"
          readonly
          style="width:170px; height:18px"
        />
      </div>
      <p
        style="position:absolute;top:189px;left:62px;white-space:nowrap"
        class="ft19"
      >
        <b>Part I&#160;</b>
      </p>
      <p
        style="position:absolute;top:182px;left:130px;white-space:nowrap"
        class="ft17"
      >
        <b>Total Income/Loss Items&#160;</b>
      </p>
      <p
        style="position:absolute;top:198px;left:130px;white-space:nowrap"
        class="ft110"
      >
        See instructions if you are filing a tax return other than Form 1040 or
        1040-SR.
      </p>
      <p
        style="position:absolute;top:217px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>1</b>
      </p>
      <p
        style="position:absolute;top:217px;left:92px;white-space:nowrap"
        class="ft110"
      >
        Enter amount from Form 1040 or 1040-SR, line
        1&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:217px;left:736px;white-space:nowrap"
        class="ft111"
      >
        <b>1</b>
      </p>
      <money-input
        id="WagesSalariesAndTipsAmt"
        v-model.lazy="Irs461.WagesSalariesAndTipsAmt"
        name="WagesSalariesAndTipsAmt"
        :div-style="'position:absolute;top:218px;left:757px;'"
        :width="'107'"
        :height="'16'"
        :line="1"
        :readonly="true"
        @change.native="line9Calculation"
      />
      <p
        style="position:absolute;top:235px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>2</b>
      </p>
      <money-input
        v-model="Irs461.BusinessIncomeLossAmt"
        name="BusinessIncomeLossAmt"
        :div-style="'position:absolute;top:235px;left:757px;'"
        :line="2"
        type="text"
        :readonly="true"
        @change.native="line9Calculation"
      />
      <p
        style="position:absolute;top:235px;left:92px;white-space:nowrap"
        class="ft110"
      >
        Enter amount from Schedule 1 (Form 1040 or 1040-SR), line 3&#160;
      </p>
      <p
        style="position:absolute;top:235px;left:486px;white-space:nowrap"
        class="ft110"
      >
        .&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:235px;left:736px;white-space:nowrap"
        class="ft111"
      >
        <b>2</b>
      </p>
      <p
        style="position:absolute;top:253px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>3</b>
      </p>
      <p
        style="position:absolute;top:253px;left:92px;white-space:nowrap"
        class="ft110"
      >
        Enter amount from Form 1040 or 1040-SR, line
        6&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:253px;left:736px;white-space:nowrap"
        class="ft111"
      >
        <b>3</b>
      </p>
      <money-input
        v-model="Irs461.CapitalGainLossAmt"
        name="CapitalGainLossAmt"
        :div-style="'position:absolute;top:253px;left:757px;'"
        :line="3"
        type="text"
        :readonly="true"
        @change.native="line9Calculation"
      />
      <p
        style="position:absolute;top:271px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>4</b>
      </p>
      <p
        style="position:absolute;top:271px;left:92px;white-space:nowrap"
        class="ft110"
      >
        Enter amount from Schedule 1 (Form 1040 or 1040-SR), line 4&#160;
      </p>
      <p
        style="position:absolute;top:271px;left:486px;white-space:nowrap"
        class="ft110"
      >
        .&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:271px;left:736px;white-space:nowrap"
        class="ft111"
      >
        <b>4</b>
      </p>
      <money-input
        v-model="Irs461.OtherGainLossAmt"
        name="OtherGainLossAmt"
        :div-style="'position:absolute;top:271px;left:757px;'"
        :line="4"
        type="text"
        :readonly="true"
        @change.native="line9Calculation"
      />
      <p
        style="position:absolute;top:289px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>5</b>
      </p>
      <p
        style="position:absolute;top:289px;left:92px;white-space:nowrap"
        class="ft110"
      >
        Enter amount from Schedule 1 (Form 1040 or 1040-SR), line 5&#160;
      </p>
      <p
        style="position:absolute;top:289px;left:486px;white-space:nowrap"
        class="ft110"
      >
        .&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:289px;left:736px;white-space:nowrap"
        class="ft111"
      >
        <b>5</b>
      </p>
      <money-input
        v-model="Irs461.RentalRealEstateIncomeLossAmt"
        name="RentalRealEstateIncomeLossAmt"
        :div-style="'position:absolute;top:289px;left:757px;'"
        :line="5"
        type="text"
        :readonly="true"
        @change.native="line9Calculation"
      />
      <p
        style="position:absolute;top:307px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>6</b>
      </p>
      <p
        style="position:absolute;top:307px;left:92px;white-space:nowrap"
        class="ft110"
      >
        Enter amount from Schedule 1 (Form 1040 or 1040-SR), line 6&#160;
      </p>
      <p
        style="position:absolute;top:307px;left:486px;white-space:nowrap"
        class="ft110"
      >
        .&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:307px;left:736px;white-space:nowrap"
        class="ft111"
      >
        <b>6</b>
      </p>
      <money-input
        v-model="Irs461.NetFarmProfitLossAmt"
        name="NetFarmProfitLossAmt"
        :div-style="'position:absolute;top:307px;left:757px;'"
        :line="6"
        type="text"
        :readonly="true"
        @change.native="line9Calculation"
      />
      <p
        style="position:absolute;top:325px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>7</b>
      </p>
      <p
        style="position:absolute;top:325px;left:92px;white-space:nowrap"
        class="ft110"
      >
        Enter amount from Schedule 1 (Form 1040 or 1040-SR), line 7&#160;
      </p>
      <p
        style="position:absolute;top:325px;left:486px;white-space:nowrap"
        class="ft110"
      >
        .&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:325px;left:736px;white-space:nowrap"
        class="ft111"
      >
        <b>7</b>
      </p>
      <money-input
        v-model="Irs461.UnemploymentCompAmt"
        name="UnemploymentCompAmt"
        :div-style="'position:absolute;top:325px;left:757px;'"
        :line="7"
        type="text"
        :readonly="true"
        @change.native="line9Calculation"
      />
      <p
        style="position:absolute;top:343px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>8</b>
      </p>
      <p
        style="position:absolute;top:343px;left:92px;white-space:nowrap"
        class="ft110"
      >
        Enter other income, gain, or losses from a trade or business not
        reported on lines 1 through 7&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:343px;left:736px;white-space:nowrap"
        class="ft111"
      >
        <b>8</b>
      </p>
      <money-input
        id="OtherIncomeAmt"
        v-model="Irs461.OtherIncomeAmt"
        name="OtherIncomeAmt"
        :div-style="'position:absolute;top:343px;left:757px;'"
        :line="8"
        :readonly="false"
        @change.native="line9Calculation"
      />
      <p
        style="position:absolute;top:361px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>9</b>
      </p>
      <p
        style="position:absolute;top:361px;left:92px;white-space:nowrap"
        class="ft110"
      >
        Combine lines 1 through
        8&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:361px;left:736px;white-space:nowrap"
        class="ft111"
      >
        <b>9</b>
      </p>
      <money-input
        id="TotalIncomeOrLossAmt"
        v-model="Irs461.TotalIncomeOrLossAmt"
        name="TotalIncomeOrLossAmt"
        :div-style="'position:absolute;top:361px;left:757px;'"
        :line="9"
        type="text"
        :readonly="true"
        @change.native="onInputChange"
      />
      <p
        style="position:absolute;top:387px;left:60px;white-space:nowrap"
        class="ft19"
      >
        <b>Part II&#160;</b>
      </p>
      <p
        style="position:absolute;top:380px;left:130px;white-space:nowrap"
        class="ft17"
      >
        <b
          >Adjustment for Amounts Not Attributable to Trade or Business&#160;</b
        >
      </p>
      <p
        style="position:absolute;top:396px;left:130px;white-space:nowrap"
        class="ft110"
      >
        See instructions if you are filing a tax return other than Form 1040 or
        1040-SR.
      </p>
      <p
        style="position:absolute;top:415px;left:63px;white-space:nowrap"
        class="ft111"
      >
        <b>10&#160;</b> &#160;&#160;&#160;Enter any income or gain reported on
        lines 1 through 8 that is not attributable to a trade or
        business&#160;&#160;.
      </p>
      <p
        style="position:absolute;top:415px;left:732px;white-space:nowrap"
        class="ft111"
      >
        <b>10&#160;</b>
      </p>
      <money-input
        id="IncomeOrGainAmt"
        v-model="Irs461.IncomeOrGainAmt"
        name="IncomeOrGainAmt"
        :div-style="'position:absolute;top:415px;left:757px;'"
        :line="10"
        :readonly="false"
        @change.native="line12Calculation"
      />
      <p
        style="position:absolute;top:433px;left:63px;white-space:nowrap"
        class="ft111"
      >
        <b>11&#160;</b
        >&#160;&#160;&#160;&#160;Enter&#160;&#160;any&#160;&#160;losses&#160;&#160;or&#160;&#160;deductions&#160;&#160;reported&#160;&#160;on&#160;&#160;lines&#160;&#160;1&#160;&#160;through&#160;&#160;8&#160;&#160;that&#160;&#160;are&#160;&#160;not&#160;&#160;attributable&#160;&#160;to&#160;&#160;a&#160;&#160;trade&#160;&#160;or&#160;
      </p>
      <p
        style="position:absolute;top:449px;left:92px;white-space:nowrap"
        class="ft110"
      >
        business. See instructions&#160;
      </p>
      <p
        style="position:absolute;top:449px;left:270px;white-space:nowrap"
        class="ft110"
      >
        .&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:451px;left:732px;white-space:nowrap"
        class="ft111"
      >
        <b>11</b>
      </p>
      <money-input
        id="DeductionOrLossAmt"
        v-model="Irs461.DeductionOrLossAmt"
        name="DeductionOrLossAmt"
        :div-style="'position:absolute;top:450px;left:757px;'"
        :line="11"
        :readonly="false"
        @change.native="line12Calculation"
      />
      <p
        style="position:absolute;top:469px;left:63px;white-space:nowrap"
        class="ft111"
      >
        <b>12&#160;</b>&#160;&#160;&#160;Subtract line 11 from line
        10&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:469px;left:732px;white-space:nowrap"
        class="ft111"
      >
        <b>12</b>
      </p>
      <money-input
        id="TotalGainLossAmt"
        v-model="Irs461.TotalGainLossAmt"
        name="TotalGainLossAmt"
        :div-style="'position:absolute;top:469px;left:757px;'"
        :line="12"
        :readonly="true"
        @change.native="onInputChange"
      />
      <p
        style="position:absolute;top:495px;left:57px;white-space:nowrap"
        class="ft19"
      >
        <b>Part III&#160;</b>
      </p>
      <p
        style="position:absolute;top:493px;left:130px;white-space:nowrap"
        class="ft17"
      >
        <b>Limitation on Losses</b>
      </p>
      <p
        style="position:absolute;top:525px;left:63px;white-space:nowrap"
        class="ft111"
      >
        <b>13&#160;</b
        >&#160;&#160;&#160;&#160;If&#160;line&#160;12&#160;is&#160;a&#160;negative&#160;number,&#160;enter&#160;it&#160;here&#160;as&#160;a&#160;positive&#160;number.&#160;If&#160;line&#160;12&#160;is&#160;a&#160;positive&#160;number,&#160;enter&#160;
      </p>
      <p
        style="position:absolute;top:539px;left:92px;white-space:nowrap"
        class="ft110"
      >
        it here as a negative
        number&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:541px;left:732px;white-space:nowrap"
        class="ft111"
      >
        <b>13</b>
      </p>
      <money-input
        id="AdjustedTotalGainLossAmt"
        v-model="Irs461.AdjustedTotalGainLossAmt"
        name="AdjustedTotalGainLossAmt"
        :div-style="'position:absolute;top:540px;left:757px;'"
        :line="13"
        type="text"
        :readonly="true"
        @change.native="onInputChange"
      />
      <p
        style="position:absolute;top:560px;left:63px;white-space:nowrap"
        class="ft111"
      >
        <b>14&#160;</b>&#160;&#160;&#160;&#160;Add lines 9 and
        13&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:559px;left:732px;white-space:nowrap"
        class="ft111"
      >
        <b>14</b>
      </p>
      <money-input
        id="AdjustedTotalIncomeAmt"
        v-model="Irs461.AdjustedTotalIncomeAmt"
        :value="AdjustedTotalIncomeAmt"
        name="AdjustedTotalIncomeAmt"
        :div-style="'position:absolute;top:559px;left:757px;'"
        :line="14"
        type="text"
        :readonly="true"
      />
      <p
        style="position:absolute;top:578px;left:63px;white-space:nowrap"
        class="ft111"
      >
        <b>15&#160;</b>&#160;&#160;&#160;&#160;Enter $255,000 (or $510,000 if
        married filing
        jointly)&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:577px;left:732px;white-space:nowrap"
        class="ft111"
      >
        <b>15</b>
      </p>
      <money-input
        id="FilingStatusThresholdCd"
        v-model="Irs461.FilingStatusThresholdCd"
        name="FilingStatusThresholdCd"
        :div-style="'position:absolute;top:577px;left:757px;'"
        :line="15"
        type="text"
        :readonly="true"
        @change.native="onInputChange"
      />
      <p
        style="position:absolute;top:595px;left:63px;white-space:nowrap"
        class="ft111"
      >
        <b>16&#160;</b
        >&#160;&#160;&#160;&#160;Add&#160;lines&#160;14&#160;and&#160;15.&#160;If&#160;less&#160;than&#160;zero,&#160;enter&#160;the&#160;amount&#160;from&#160;line&#160;16&#160;as&#160;a&#160;positive&#160;number&#160;on&#160;Schedule&#160;
      </p>
      <p
        style="position:absolute;top:612px;left:92px;white-space:nowrap"
        class="ft114"
      >
        1&#160;(Form&#160;1040&#160;or&#160;1040-SR),&#160;line&#160;8.&#160;See&#160;instructions&#160;if&#160;you&#160;are&#160;filing&#160;a&#160;tax&#160;return&#160;other&#160;than&#160;a&#160;Form&#160;1040&#160;<br />or
        1040-SR. If zero or greater, do not attach this form to your tax
        return&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:631px;left:732px;white-space:nowrap"
        class="ft111"
      >
        <b>16</b>
      </p>
      <money-input
        id="ExcessBusinessLossAmt"
        v-model="Irs461.ExcessBusinessLossAmt"
        name="ExcessBusinessLossAmt"
        :div-style="'position:absolute;top:629px;left:757px;'"
        :line="16"
        type="text"
        @change.native="updateData"
      />
      <p
        style="position:absolute;top:651px;left:54px;white-space:nowrap"
        class="ft14"
      >
        <b
          >XOB For Privacy Act and Paperwork Reduction Act Notice, see the
          separate instructions.</b
        >
      </p>
      <p
        style="position:absolute;top:651px;left:617px;white-space:nowrap"
        class="ft112"
      >
        Cat. No. 0000/1736
      </p>
      <p
        style="position:absolute;top:652px;left:780px;white-space:nowrap"
        class="ft10"
      >
        Form&#160;
      </p>
      <p
        style="position:absolute;top:648px;left:807px;white-space:nowrap"
        class="ft17"
      >
        <b>461</b>&#160;(2019)
      </p>
    </div>
  </div>
</template>
<script>
import { IRS1040_UPDATED, IRS461_UPDATED } from '~/events/event'
import { SCHEDULE1_UPDATED } from '~/events'
import { formService } from '~/services/form-service'
import MoneyInput from '~/components/Currency/MoneyInput'
export default {
  name: 'Irs461',
  components: { MoneyInput },
  data() {
    return {
      Irs461: {}
    }
  },
  mounted() {
    this.Irs461.name =
      this.$store.state.attachments.Irs1040.firstName +
      ' ' +
      this.$store.state.attachments.Irs1040.lastName
    this.Irs461.ssn = this.$store.state.attachments.Irs1040.ssn
    // Line 1 value
    this.Irs461.WagesSalariesAndTipsAmt = this.$store.state.attachments.Irs1040.WagesSalariesAndTipsAmt
    // Line 2 value
    this.Irs461.BusinessIncomeLossAmt = this.$store.state.attachments.Irs1040Schedule1.BusinessIncomeLossAmt
    // Line 3 value
    this.Irs461.CapitalGainLossAmt = this.$store.state.attachments.Irs1040.CapitalGainLossAmt
    // Line 4 value
    this.Irs461.OtherGainLossAmt = this.$store.state.attachments.Irs1040Schedule1.OtherGainLossAmt
    // Line 5 value
    this.Irs461.RentalRealEstateIncomeLossAmt = this.$store.state.attachments.Irs1040Schedule1.RentalRealEstateIncomeLossAmt
    // Line 6 value
    this.Irs461.NetFarmProfitLossAmt = this.$store.state.attachments.Irs1040Schedule1.NetFarmProfitLossAmt
    // Line 7 value
    this.Irs461.UnemploymentCompAmt = this.$store.state.attachments.Irs1040Schedule1.UnemploymentCompAmt
    this.$forceUpdate()
    this.onInputChange()
    formService.$on(IRS1040_UPDATED, (data) => {
      this.Irs461.ssn = data.ssn
      this.Irs461.name = data.firstName + ' ' + data.lastName
      this.Irs461.WagesSalariesAndTipsAmt = data.WagesSalariesAndTipsAmt
      this.Irs461.CapitalGainLossAmt = this.$store.state.attachments.Irs1040.CapitalGainLossAmt
      this.$forceUpdate()
      this.onInputChange()
    })
    formService.$on(SCHEDULE1_UPDATED, (data) => {
      // Line 2 value
      this.Irs461.BusinessIncomeLossAmt = data.BusinessIncomeLossAmt
      // Line 4 value
      this.Irs461.OtherGainLossAmt = data.OtherGainLossAmt
      // Line 5 value
      this.Irs461.RentalRealEstateIncomeLossAmt =
        data.RentalRealEstateIncomeLossAmt
      // Line 6 value
      this.Irs461.NetFarmProfitLossAmt = data.NetFarmProfitLossAmt
      // Line 7 value
      this.Irs461.UnemploymentCompAmt = data.UnemploymentCompAmt
      this.$forceUpdate()
      this.onInputChange()
    })
  },
  methods: {
    line12Calculation() {
      const line10 = this.Irs461.IncomeOrGainAmt ?? 0
      const line11 = this.Irs461.DeductionOrLossAmt ?? 0
      const line12 = line10 - line11
      this.Irs461.TotalGainLossAmt = line12
      this.$forceUpdate()
      this.line13Calculation()
      this.line14Calculation()
      this.line16Calculation()
    },
    line13Calculation() {
      const line12 = this.Irs461.TotalGainLossAmt
      const result = -1 * line12
      this.Irs461.AdjustedTotalGainLossAmt = result
      this.$forceUpdate()
    },
    line14Calculation() {
      const line9 = this.Irs461.TotalIncomeOrLossAmt ?? 0
      const line13 = this.Irs461.AdjustedTotalGainLossAmt ?? 0
      const line14 = line9 + line13
      this.Irs461.AdjustedTotalIncomeAmt = line14
      // eslint-disable-next-line no-console
      console.log('Line 14: ' + this.Irs461.AdjustedTotalIncomeAmt)
      this.$forceUpdate()
    },
    line15Calculation() {
      let result = 0
      if (
        this.$store.state.attachments.Irs1040
          .IndividualReturnFilingStatusCd[0] === '2'
      ) {
        result = 510000
      } else {
        result = 255000
      }
      this.Irs461.FilingStatusThresholdCd = result
      this.$forceUpdate()
    },
    line16Calculation() {
      const line14 = this.Irs461.AdjustedTotalIncomeAmt ?? 0
      const line15 = this.Irs461.FilingStatusThresholdCd ?? 0
      let result = 0
      result = line14 + line15
      this.Irs461.ExcessBusinessLossAmt = result
      if (result < 0) {
        const attachments = this.$store.state.attachments
        attachments.Irs461 = this.Irs461
        this.$store.commit('UPDATE_ATTACHEMENTS', attachments)
      } else {
      }
      this.updateData()
    },
    line9Calculation() {
      // Line 9 = 1+2+3+4+5+6+7+8
      const line1 = this.Irs461.WagesSalariesAndTipsAmt ?? 0
      const line2 = this.Irs461.BusinessIncomeLossAmt ?? 0
      const line3 = this.Irs461.CapitalGainLossAmt ?? 0
      const line4 = this.Irs461.OtherGainLossAmt ?? 0
      const line5 = this.Irs461.RentalRealEstateIncomeLossAmt ?? 0
      const line6 = this.Irs461.NetFarmProfitLossAmt ?? 0
      const line7 = this.Irs461.UnemploymentCompAmt ?? 0
      const line8 = this.Irs461.OtherIncomeAmt ?? 0
      const line9 =
        line1 + line2 + line3 + line4 + line5 + line6 + +line7 + line8
      this.Irs461.TotalIncomeOrLossAmt = line9
      this.$forceUpdate()
    },
    updateData() {
      formService.$emit(IRS461_UPDATED, this.Irs461)
    },
    calculate() {
      this.line9Calculation()
      this.line12Calculation()
      // this.line13Calculation()
      // this.line14Calculation()
      this.line15Calculation()
      // this.line16Calculation()
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
#page-div {
  background-image: url('../../static/form-assets/irsf461001.png');
}
.year {
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
p {
  margin: 0;
  padding: 0;
}
.ft10 {
  font-size: 10px;
  color: #000000;
}
.ft11 {
  font-size: 37px;
  color: #000000;
}
.ft12 {
  font-size: 19px;
  color: #000000;
}
.ft13 {
  font-size: 7px;
  color: #000000;
}
.ft14 {
  font-size: 10px;
  color: #000000;
}
.ft15 {
  font-size: 10px;
  color: #000000;
}
.ft16 {
  font-size: 28px;
  color: #000000;
}
.ft17 {
  font-size: 13px;
  color: #000000;
}
.ft18 {
  font-size: 10px;
  color: #000000;
}
.ft19 {
  font-size: 13px;
  color: #ffffff;
}
.ft110 {
  font-size: 11px;
  color: #000000;
}
.ft111 {
  font-size: 11px;
  color: #000000;
}
.ft112 {
  font-size: 10px;
  color: #000000;
}
.ft113 {
  font-size: 10px;
  line-height: 12px;
  color: #000000;
}
.ft114 {
  font-size: 11px;
  line-height: 16px;
  color: #000000;
}
</style>
