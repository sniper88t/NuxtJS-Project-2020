<template>
  <div
    id="pdf-pages"
    style="font-size: 11px;font-family: QuickType, Arial, Helvetica, sans-serif"
  >
    <div id="page1-div" style="position:relative;width:917px;height:1187px;">
      <!-- <img
        width="917"
        height="1187"
        src="irs8888001.png"
        alt="background image"
      /> -->
      <p
        style="position:absolute;top:71px;left:54px;white-space:nowrap"
        class="ft10"
      >
        Form &#160;&#160;
      </p>
      <p
        style="position:absolute;top:50px;left:87px;white-space:nowrap;font-size: 30px;"
        class="ft11"
      >
        <b>8888</b>
      </p>
      <p
        style="position:absolute;top:97px;left:54px;white-space:nowrap;font-size:10px;letter-spacing:-0.2px"
        class="ft115"
      >
        Department of the Treasury &#160;<br />Internal Revenue Service&#160;
      </p>
      <p
        style="position:absolute;top:56px;left:188px;white-space:nowrap;font-size: 20px;"
        class="ft12"
      >
        &#160;Allocation of Refund (Including Savings Bond Purchases)
      </p>
      <p
        style="position:absolute;top:94px;left:295px;white-space:nowrap"
        class="ft13"
      >
        ▶
      </p>
      <p
        style="position:absolute;top:92px;left:304px;white-space:nowrap"
        class="ft14"
      >
        <b>&#160;Go to&#160;<i>www.irs.gov/Form8888</i></b
        ><b>&#160;for the latest information.</b>
      </p>
      <p
        style="position:absolute;top:112px;left:358px;white-space:nowrap"
        class="ft13"
      >
        ▶
      </p>
      <p
        style="position:absolute;top:110px;left:367px;white-space:nowrap"
        class="ft14"
      >
        <b>&#160;Attach to your income tax return.</b>
      </p>
      <p
        style="position:absolute;top:55px;left:750px;white-space:nowrap"
        class="ft10"
      >
        OMB No. 1545-1736
      </p>
      <p
        style="position:absolute;top:70px;left:760px;white-space:nowrap;font-size: 30px;"
        class="ft16"
      >
        <strong><span class="year">20</span>19</strong>
      </p>
      <p
        style="position:absolute;top:101px;left:752px;white-space:nowrap"
        class="ft10"
      >
        Attachment &#160;&#160;
      </p>
      <p
        style="position:absolute;top:112px;left:752px;white-space:nowrap"
        class="ft10"
      >
        Sequence No.&#160;
      </p>
      <p
        style="position:absolute;top:112px;left:822px;white-space:nowrap"
        class="ft17"
      >
        <b>56</b>
      </p>
      <p
        style="position:absolute;top:129px;left:54px;white-space:nowrap"
        class="ft10"
      >
        Name(s) shown on return
      </p>
      <div class="input-area" style="position:absolute;top:142px;left:54px">
        <input
          id="name"
          v-model="Irs8888.name"
          name="name"
          class="no-outline"
          type="text"
          readonly
          style="width:614px;"
        />
      </div>
      <p
        style="position:absolute;top:128px;left:676px;white-space:nowrap"
        class="ft18"
      >
        <b>Your social security number</b>
      </p>
      <div class="input-area" style="position:absolute;top:142px;left:670px">
        <input
          id="ssn"
          v-model="Irs8888.ssn"
          v-mask="'###-##-####'"
          name="ssn"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          class="no-outline"
          type="password"
          readonly
          style="width:195px;"
        />
      </div>
      <p
        style="position:absolute;top:163px;left:62px;white-space:nowrap;color:white"
        class="ft19"
      >
        <b>Part I&#160;</b>
      </p>
      <p
        style="position:absolute;top:161px;left:126px;white-space:nowrap"
        class="ft116"
      >
        <b>Direct Deposit<br /></b>Complete this part if you want us to directly
        deposit a portion of your refund to one or more accounts.
      </p>
      <p
        style="position:absolute;top:199px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>1a&#160;</b>Amount to be deposited in first account (see
        instructions)&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:199px;left:700px;white-space:nowrap"
        class="ft111"
      >
        <b>1a&#160;</b>
      </p>
      <money-input
        v-model="DirectDepositInfoGroup.DirectDepositRefundAmt"
        name="DirectDepositRefundAmt"
        :div-style="'position:absolute;top:199px;left:724px'"
        :width="141"
        :height="16"
        :line="'1a'"
        @change.native="line8Calculation"
      />
      <div class="input-area" style="position:absolute;top:235px;left:217px">
        <input
          id="routingTransitNum"
          v-model="DirectDepositInfoGroup.routingTransitNum"
          v-mask="'#########'"
          name="routingTransitNum"
          class="no-outline"
          data-line-number="1b"
          type="text"
          style="width:192px;height:17px"
        />
      </div>
      <label
        style="position:absolute;top:235px;left:455px;"
        class="checkbox-container"
      >
        <input
          id="bankAccountTypeCd-0"
          v-model="DirectDepositInfoGroup.bankAccountTypeCd"
          name="bankAccountTypeCd"
          data-line-number="1c"
          class="no-outline checkbox"
          type="radio"
          value="1"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:235px;left:552px;"
        class="checkbox-container"
      >
        <input
          id="bankAccountTypeCd-0"
          v-model="DirectDepositInfoGroup.bankAccountTypeCd"
          name="bankAccountTypeCd"
          data-line-number="1c"
          class="no-outline checkbox"
          type="radio"
          value="2"
        />
        <span class="checkmark"></span>
      </label>
      <div class="input-area" style="position:absolute;top:271px;left:217px">
        <input
          id="depositorAccountNum"
          v-model="DirectDepositInfoGroup.depositorAccountNum"
          v-mask="'#################'"
          name="depositorAccountNum"
          class="no-outline"
          data-line-number="1d"
          type="text"
          style="width:365px;height:17px"
        />
      </div>
      <p
        style="position:absolute;top:235px;left:76px;white-space:nowrap"
        class="ft111"
      >
        <b>b&#160;</b>Routing number
      </p>
      <p
        style="position:absolute;top:238px;left:421px;white-space:nowrap"
        class="ft10"
      >
        ▶&#160;
      </p>
      <p
        style="position:absolute;top:235px;left:435px;white-space:nowrap"
        class="ft111"
      >
        <b>c</b>
      </p>
      <p
        style="position:absolute;top:235px;left:472px;white-space:nowrap"
        class="ft110"
      >
        Checking
      </p>
      <p
        style="position:absolute;top:235px;left:569px;white-space:nowrap"
        class="ft110"
      >
        Savings
      </p>
      <p
        style="position:absolute;top:271px;left:76px;white-space:nowrap"
        class="ft111"
      >
        <b>d&#160;&#160;</b>Account number
      </p>
      <p
        style="position:absolute;top:307px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>2&#160;a&#160;</b>Amount to be deposited in second
        account&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:307px;left:700px;white-space:nowrap"
        class="ft111"
      >
        <b>2a&#160;</b>
      </p>
      <money-input
        v-model="DirectDepositInfoGroup.DirectDepositRefundAmt2"
        name="DirectDepositRefundAmt2"
        :div-style="'position:absolute;top:308px;left:724px'"
        :width="141"
        :height="16"
        :line="'2a'"
        @change.native="line8Calculation"
      />
      <div class="input-area" style="position:absolute;top:343px;left:217px">
        <input
          id="routingTransitNum2"
          v-model="DirectDepositInfoGroup.routingTransitNum2"
          v-mask="'#########'"
          name="routingTransitNum2"
          class="no-outline"
          data-line-number="2b"
          type="text"
          style="width:192px;height:17px"
        />
      </div>
      <label
        style="position:absolute;top:344px;left:455px;"
        class="checkbox-container"
      >
        <input
          id="bankAccountTypeCd-0"
          v-model="DirectDepositInfoGroup.bankAccountTypeCd2"
          name="bankAccountTypeCd2"
          data-line-number="2c"
          class="no-outline checkbox"
          type="radio"
          value="1"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:344px;left:552px;"
        class="checkbox-container"
      >
        <input
          id="bankAccountTypeCd-0"
          v-model="DirectDepositInfoGroup.bankAccountTypeCd2"
          name="bankAccountTypeCd2"
          data-line-number="2c"
          class="no-outline checkbox"
          type="radio"
          value="2"
        />
        <span class="checkmark"></span>
      </label>
      <div class="input-area" style="position:absolute;top:379px;left:217px">
        <input
          id="depositorAccountNum2"
          v-model="DirectDepositInfoGroup.depositorAccountNum2"
          v-mask="'#################'"
          name="depositorAccountNum2"
          class="no-outline"
          data-line-number="2d"
          type="text"
          style="width:365px;height:17px"
        />
      </div>
      <p
        style="position:absolute;top:343px;left:76px;white-space:nowrap"
        class="ft111"
      >
        <b>b&#160;</b>Routing number
      </p>
      <p
        style="position:absolute;top:346px;left:421px;white-space:nowrap"
        class="ft10"
      >
        ▶&#160;
      </p>
      <p
        style="position:absolute;top:343px;left:435px;white-space:nowrap"
        class="ft111"
      >
        <b>c</b>
      </p>
      <p
        style="position:absolute;top:343px;left:472px;white-space:nowrap"
        class="ft110"
      >
        Checking
      </p>
      <p
        style="position:absolute;top:343px;left:569px;white-space:nowrap"
        class="ft110"
      >
        Savings
      </p>
      <p
        style="position:absolute;top:379px;left:76px;white-space:nowrap"
        class="ft111"
      >
        <b>d&#160;&#160;</b>Account number
      </p>
      <p
        style="position:absolute;top:415px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>3&#160;a&#160;</b>Amount to be deposited in third
        account&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:415px;left:700px;white-space:nowrap"
        class="ft111"
      >
        <b>3a&#160;</b>
      </p>
      <money-input
        v-model="DirectDepositInfoGroup.DirectDepositRefundAmt3"
        name="DirectDepositRefundAmt3"
        :div-style="'position:absolute;top:416px;left:724px'"
        :width="141"
        :height="16"
        :line="'3a'"
        @change.native="line8Calculation"
      />
      <div class="input-area" style="position:absolute;top:451px;left:217px">
        <input
          id="routingTransitNum3"
          v-model="DirectDepositInfoGroup.routingTransitNum3"
          v-mask="'#########'"
          name="routingTransitNum3"
          class="no-outline"
          data-line-number="3b"
          type="text"
          style="width:192px;height:17px"
        />
      </div>
      <label
        style="position:absolute;top:453px;left:455px;"
        class="checkbox-container"
      >
        <input
          id="bankAccountTypeCd-3"
          v-model="DirectDepositInfoGroup.bankAccountTypeCd3"
          name="bankAccountTypeCd3"
          data-line-number="3c"
          class="no-outline checkbox"
          type="radio"
          value="1"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:453px;left:552px;"
        class="checkbox-container"
      >
        <input
          id="bankAccountTypeCd-3"
          v-model="DirectDepositInfoGroup.bankAccountTypeCd3"
          name="bankAccountTypeCd3"
          data-line-number="3c"
          class="no-outline checkbox"
          type="radio"
          value="2"
        />
        <span class="checkmark"></span>
      </label>
      <div class="input-area" style="position:absolute;top:487px;left:217px">
        <input
          id="depositorAccountNum3"
          v-model="DirectDepositInfoGroup.depositorAccountNum3"
          v-mask="'#################'"
          name="depositorAccountNum3"
          class="no-outline"
          data-line-number="3d"
          type="text"
          style="width:365px;height:17px"
        />
      </div>
      <p
        style="position:absolute;top:451px;left:76px;white-space:nowrap"
        class="ft111"
      >
        <b>b&#160;</b>Routing number
      </p>
      <p
        style="position:absolute;top:454px;left:421px;white-space:nowrap"
        class="ft10"
      >
        ▶&#160;
      </p>
      <p
        style="position:absolute;top:451px;left:435px;white-space:nowrap"
        class="ft111"
      >
        <b>c</b>
      </p>
      <p
        style="position:absolute;top:451px;left:472px;white-space:nowrap"
        class="ft110"
      >
        Checking
      </p>
      <p
        style="position:absolute;top:451px;left:569px;white-space:nowrap"
        class="ft110"
      >
        Savings
      </p>
      <p
        style="position:absolute;top:487px;left:76px;white-space:nowrap"
        class="ft111"
      >
        <b>d&#160;&#160;</b>Account number
      </p>
      <p
        style="position:absolute;top:524px;left:60px;white-space:nowrap;color:white"
        class="ft19"
      >
        <b>Part II&#160;</b>
      </p>
      <p
        style="position:absolute;top:521px;left:126px;white-space:nowrap"
        class="ft116"
      >
        <b>U.S. Series I Savings Bond Purchases<br /></b>Complete this part if
        you want to buy paper bonds with a portion of your refund.
      </p>
      <p
        style="position:absolute;top:557px;left:55px;white-space:nowrap;font-size:30px;color:white"
        class="ft112"
      >
        ▲
      </p>
      <p
        style="position:absolute;top:566px;left:68px;white-space:nowrap;font-size:18px"
        class="ft12"
      >
        !
      </p>
      <p
        style="position:absolute;top:585px;left:56px;white-space:nowrap;font-size:7.5px;color:white"
        class="ft113"
      >
        <b>CAUTION</b>
      </p>
      <p
        style="position:absolute;top:559px;left:99px;white-space:nowrap"
        class="ft117"
      >
        <i
          >If a name is entered on line 5c or 6c below, co-ownership will be
          assumed unless the beneficiary box is checked. &#160;&#160;<br />See
          instructions for more details.</i
        >
      </p>
      <p
        style="position:absolute;top:595px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>4</b>
      </p>
      <p
        style="position:absolute;top:595px;left:97px;white-space:nowrap"
        class="ft110"
      >
        Amount to be used for bond purchases for yourself (and your spouse, if
        filing jointly)&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:595px;left:704px;white-space:nowrap"
        class="ft111"
      >
        <b>4</b>
      </p>
      <money-input
        v-model="Irs8888.RefundUsedForBondPurchasesAmt"
        name="RefundUsedForBondPurchasesAmt"
        :div-style="'position:absolute;top:596px;left:724px'"
        :width="141"
        :height="16"
        :line="'4'"
        @change.native="line8Calculation"
      />
      <p
        style="position:absolute;top:631px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>5a&#160;</b>Amount to be used to buy bonds for yourself, your
        spouse,&#160;<b>or</b>&#160;someone
        else&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:631px;left:700px;white-space:nowrap"
        class="ft111"
      >
        <b>5a&#160;</b>
      </p>
      <money-input
        v-model="SavingsBondPurchaseInfoGrp.BondPurchaseAmt"
        name="BondPurchaseAmt"
        :div-style="'position:absolute;top:631px;left:724px'"
        :width="141"
        :height="16"
        :line="'5a'"
        @change.native="line8Calculation"
      />
      <div class="input-area" style="position:absolute;top:667px;left:98px">
        <input
          id="BondOwnerNm"
          v-model="SavingsBondPurchaseInfoGrp.BondOwnerNm"
          v-uppercase
          name="BondOwnerNm"
          class="no-outline"
          data-line-number="5b"
          type="text"
          style="width:712px;height:17px"
        />
      </div>
      <label
        style="position:absolute;top:702px;left:803px;"
        class="checkbox-container"
      >
        <input
          id="beneficiaryInd-0"
          v-model="SavingsBondPurchaseInfoGrp.beneficiaryInd"
          name="beneficiaryInd"
          data-line-number="3c"
          class="no-outline checkbox"
          type="checkbox"
        />
        <span class="checkmark"></span>
      </label>
      <div class="input-area" style="position:absolute;top:721px;left:98px">
        <input
          id="bondCoOwnerOrBeneficiaryNm"
          v-model="SavingsBondPurchaseInfoGrp.bondCoOwnerOrBeneficiaryNm"
          v-uppercase
          name="bondCoOwnerOrBeneficiaryNm"
          class="no-outline"
          data-line-number="5c"
          type="text"
          style="width:712px;height:17px"
        />
      </div>
      <p
        style="position:absolute;top:649px;left:76px;white-space:nowrap"
        class="ft111"
      >
        <b>b&#160;</b>Enter the owner’s name (First then Last) for the bond
        registration
      </p>
      <p
        style="position:absolute;top:703px;left:76px;white-space:nowrap"
        class="ft111"
      >
        <b>c&#160;</b>If you would like to add a co-owner or beneficiary, enter
        the name here (First then Last). If beneficiary, also check here&#160;▶
      </p>
      <p
        style="position:absolute;top:757px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>6a&#160;</b>Amount to be used to buy bonds for yourself, your
        spouse,&#160;<b>or</b>&#160;someone
        else&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:757px;left:700px;white-space:nowrap"
        class="ft111"
      >
        <b>6a&#160;</b>
      </p>
      <money-input
        v-model="SavingsBondPurchaseInfoGrp.BondPurchaseAmt1"
        name="BondPurchaseAmt1"
        :div-style="'position:absolute;top:758px;left:724px'"
        :width="141"
        :height="16"
        :line="'6a'"
        @change.native="line8Calculation"
      />
      <div class="input-area" style="position:absolute;top:793px;left:98px">
        <input
          id="BondOwnerNm1"
          v-model="SavingsBondPurchaseInfoGrp.BondOwnerNm1"
          v-uppercase
          name="BondOwnerNm1"
          class="no-outline"
          data-line-number="6b"
          type="text"
          style="width:712px;height:17px"
        />
      </div>
      <label
        style="position:absolute;top:829px;left:803px;"
        class="checkbox-container"
      >
        <input
          id="beneficiaryInd-0"
          v-model="SavingsBondPurchaseInfoGrp.beneficiaryInd1"
          name="beneficiaryInd1"
          data-line-number="6c"
          class="no-outline checkbox"
          type="checkbox"
        />
        <span class="checkmark"></span>
      </label>
      <div class="input-area" style="position:absolute;top:847px;left:98px">
        <input
          id="bondCoOwnerOrBeneficiaryNm1"
          v-model="SavingsBondPurchaseInfoGrp.bondCoOwnerOrBeneficiaryNm1"
          v-uppercase
          name="bondCoOwnerOrBeneficiaryNm1"
          class="no-outline"
          data-line-number="6c"
          type="text"
          style="width:712px;height:17px"
        />
      </div>
      <p
        style="position:absolute;top:775px;left:76px;white-space:nowrap"
        class="ft111"
      >
        <b>b&#160;</b>Enter the owner’s name (First then Last) for the bond
        registration
      </p>
      <p
        style="position:absolute;top:829px;left:76px;white-space:nowrap"
        class="ft111"
      >
        <b>c&#160;</b>If you would like to add a co-owner or beneficiary, enter
        the name here (First then Last). If beneficiary, also check here&#160;▶
      </p>
      <p
        style="position:absolute;top:884px;left:57px;white-space:nowrap;color:white"
        class="ft19"
      >
        <b>Part III</b>
      </p>
      <p
        style="position:absolute;top:883px;left:115px;white-space:nowrap;"
        class="ft19"
      >
        <b>Paper Check</b>
      </p>
      <p
        style="position:absolute;top:900px;left:126px;white-space:nowrap"
        class="ft110"
      >
        Complete this part if you want a portion of your refund to be sent to
        you as a check.
      </p>
      <p
        style="position:absolute;top:919px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>7</b>
      </p>
      <money-input
        v-model="Irs8888.RefundByCheckAmt"
        name="RefundByCheckAmt"
        :div-style="'position:absolute;top:919px;left:724px'"
        :width="141"
        :height="16"
        :line="'7'"
        @change.native="line8Calculation"
      />
      <p
        style="position:absolute;top:919px;left:97px;white-space:nowrap"
        class="ft110"
      >
        Amount to be refunded by
        check&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:919px;left:704px;white-space:nowrap"
        class="ft111"
      >
        <b>7</b>
      </p>
      <p
        style="position:absolute;top:938px;left:57px;white-space:nowrap;color:white"
        class="ft19"
      >
        <b>Part IV</b>
      </p>
      <p
        style="position:absolute;top:936px;left:120px;white-space:nowrap"
        class="ft19"
      >
        <b>Total Allocation of Refund</b>
      </p>
      <p
        style="position:absolute;top:956px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>8&#160;</b>
      </p>
      <div class="input-area" style="position:absolute;top:972px;left:724px">
        <money
          id="TotalAllocationOfRefundAmt"
          v-model="Irs8888.TotalAllocationOfRefundAmt"
          name="TotalAllocationOfRefundAmt"
          data-line-number="8"
          class="no-outline"
          type="text"
          style="width:141px; height:18px"
          readonly
        />
      </div>
      <p
        style="position:absolute;top:972px;left:76px;white-space:nowrap"
        class="ft111"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:956px;left:98px;white-space:nowrap"
        class="ft118"
      >
        Add&#160;lines&#160;1a,&#160;2a,&#160;3a,&#160;4,&#160;5a,&#160;6a,&#160;and&#160;7.&#160;The&#160;total&#160;must&#160;equal&#160;the&#160;refund&#160;amount&#160;shown&#160;on&#160;your&#160;tax&#160;<br />return&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:973px;left:704px;white-space:nowrap"
        class="ft111"
      >
        <b>8</b>
      </p>
      <p
        style="position:absolute;top:993px;left:54px;white-space:nowrap"
        class="ft14"
      >
        <b
          >XOB For Paperwork Reduction Act Notice, see your tax return
          instructions.</b
        >
      </p>
      <p
        style="position:absolute;top:995px;left:571px;white-space:nowrap"
        class="ft10"
      >
        Cat. No. 0000/1736&#160;
      </p>
      <p
        style="position:absolute;top:994px;left:772px;white-space:nowrap"
        class="ft10"
      >
        Form&#160;
      </p>
      <p
        style="position:absolute;top:991px;left:799px;white-space:nowrap"
        class="ft17"
      >
        <b>8888</b>&#160;(2019)
      </p>
    </div>
  </div>
</template>
<script>
import MoneyInput from '~/components/Currency/MoneyInput'
import { formService } from '~/services/form-service'
import { IRS1040_UPDATED } from '~/events/event'
export default {
  components: { MoneyInput },
  data() {
    return {
      Irs8888: {
        DirectDepositInfoGroup: [],
        SavingsBondPurchaseInfoGrp: []
      },
      DirectDepositInfoGroup: {},
      SavingsBondPurchaseInfoGrp: {}
    }
  },
  mounted() {
    this.Irs8888.name =
      this.$store.state.attachments.Irs1040.firstName +
      ' ' +
      this.$store.state.attachments.Irs1040.lastName
    this.Irs8888.ssn = this.$store.state.attachments.Irs1040.ssn
    formService.$on(IRS1040_UPDATED, (data) => {
      this.Irs8888.ssn = data.ssn
      this.Irs8888.name = data.firstName + ' ' + data.lastName
      this.Irs8888.TotalAllocationOfRefundAmt = data.RefundAmt
      this.$forceUpdate()
    })
  },
  methods: {
    // 1a, 2a, 3a, 4, 5a, 6a, and 7
    line8Calculation() {
      // const line1a = this.DirectDepositInfoGroup.DirectDepositRefundAmt ?? 0
      // const line2a = this.DirectDepositInfoGroup.DirectDepositRefundAmt2 ?? 0
      // const line3a = this.DirectDepositInfoGroup.DirectDepositRefundAmt3 ?? 0
      // const line4 = this.Irs8888.RefundUsedForBondPurchasesAmt ?? 0
      // const line5a = this.SavingsBondPurchaseInfoGrp.BondPurchaseAmt ?? 0
      // const line6a = this.SavingsBondPurchaseInfoGrp.BondPurchaseAmt1 ?? 0
      // const line7 = this.Irs8888.RefundByCheckAmt ?? 0
      // const result = line1a + line2a + line3a + line4 + line5a + line6a + line7
      // this.Irs8888.TotalAllocationOfRefundAmt = result
    }
  }
}
</script>
<style scoped>
@import '@/assets/styles/form.css';
#page1-div {
  background-image: url('../../static/form-assets/irs8888.png');
}

.year {
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
</style>
