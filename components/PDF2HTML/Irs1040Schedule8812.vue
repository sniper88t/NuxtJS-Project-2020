<template>
  <!-- ==================== IRS 1040 Schedule 8812 ====================== -->
  <div
    id="pdf-pages"
    style="font-size: 11px;
    font-family: QuickType, Arial, Helvetica, sans-serif"
  >
    <div id="page1-div" style="position:relative;width:918px;height:1188px;">
      <!-- <img
        width="918"
        height="1188"
        src="irs1040Schedule8812001.png"
        alt="background image"
      /> -->
      <p
        style="position:absolute;top:53px;left:54px;white-space:nowrap"
        class="ft119"
      >
        <b>SCHEDULE 8812&#160;<br />(Form 1040 or 1040-SR)</b>
      </p>
      <p
        style="position:absolute;top:114px;left:54px;white-space:nowrap"
        class="ft12"
      >
        Department of the Treasury &#160; &#160;&#160;
      </p>
      <p
        style="position:absolute;top:126px;left:54px;white-space:nowrap"
        class="ft12"
      >
        Internal Revenue Service (99)&#160;
      </p>
      <p
        style="position:absolute;top:56px;left:280px;white-space:nowrap"
        class="ft13"
      >
        Additional Child Tax Credit
      </p>
      <p
        style="position:absolute;top:96px;left:278px;white-space:nowrap"
        class="ft14"
      >
        ▶
      </p>
      <p
        style="position:absolute;top:94px;left:287px;white-space:nowrap"
        class="ft15"
      >
        &#160;
      </p>
      <p
        style="position:absolute;top:93px;left:290px;white-space:nowrap"
        class="ft11"
      >
        <b>Attach to Form 1040, 1040-SR, or 1040-NR.</b>&#160;
      </p>
      <p
        style="position:absolute;top:111px;left:217px;white-space:nowrap"
        class="ft14"
      >
        &#160;&#160;▶
      </p>
      <p
        style="position:absolute;top:109px;left:231px;white-space:nowrap"
        class="ft15"
      >
        &#160;
      </p>
      <p
        style="position:absolute;top:108px;left:234px;white-space:nowrap"
        class="ft11"
      >
        <b>Go to&#160;<i>www.irs.gov/Schedule8812&#160;</i></b
        ><b>for instructions and the latest&#160;</b>
      </p>
      <p
        style="position:absolute;top:123px;left:372px;white-space:nowrap"
        class="ft11"
      >
        <b>information.</b>
      </p>
      <p
        style="position:absolute;top:55px;left:750px;white-space:nowrap"
        class="ft12"
      >
        OMB No. 1545-1736
      </p>
      <p
        style="position:absolute;top:76px;left:760px;white-space:nowrap"
        class="ft17"
      >
        <b>2019</b>
      </p>
      <p
        style="position:absolute;top:115px;left:752px;white-space:nowrap"
        class="ft12"
      >
        Attachment &#160;&#160;
      </p>
      <p
        style="position:absolute;top:125px;left:752px;white-space:nowrap"
        class="ft12"
      >
        Sequence No.&#160;
      </p>
      <p
        style="position:absolute;top:121px;left:822px;white-space:nowrap"
        class="ft10"
      >
        <b>47</b>
      </p>
      <p
        style="position:absolute;top:74px;left:611px;white-space:nowrap"
        class="ft18"
      >
        . . . . . . . . .&#160;
      </p>
      <p
        style="position:absolute;top:68px;left:618px;white-space:nowrap"
        class="ft19"
      >
        <b>1040</b>
      </p>
      <p
        style="position:absolute;top:66px;left:640px;white-space:nowrap"
        class="ft11"
      >
        <b>&#160;&#160;</b>
      </p>
      <p
        style="position:absolute;top:81px;left:609px;white-space:nowrap"
        class="ft19"
      >
        <b>1040-SR&#160;</b>
      </p>
      <p
        style="position:absolute;top:95px;left:609px;white-space:nowrap"
        class="ft19"
      >
        <b>1040-NR</b>
      </p>
      <p
        style="position:absolute;top:88px;left:611px;white-space:nowrap"
        class="ft18"
      >
        . . . . . . . . .&#160;
      </p>
      <p
        style="position:absolute;top:105px;left:654px;white-space:nowrap"
        class="ft110"
      >
        <b>8812</b>
      </p>
      <p
        style="position:absolute;top:63px;left:655px;white-space:nowrap"
        class="ft111"
      >
        ◀
      </p>
      <p
        style="position:absolute;top:147px;left:54px;white-space:nowrap"
        class="ft12"
      >
        Name(s) shown on return&#160;
      </p>
      <div class="input-area" style="position:absolute;top:161px;left:54px">
        <input
          id="name"
          v-model="Irs1040Schedule8812.name"
          v-uppercase
          name="name"
          class="no-outline"
          type="text"
          style="width:637px;"
          readonly
        />
      </div>
      <p
        style="position:absolute;top:146px;left:697px;white-space:nowrap"
        class="ft19"
      >
        <b>Your social security number&#160;</b>
      </p>
      <div class="input-area" style="position:absolute;top:161px;left:692px">
        <input
          id="ssn"
          v-model="Irs1040Schedule8812.ssn"
          v-mask="'###-##-####'"
          name="ssn"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          class="no-outline"
          type="password"
          readonly
          style="width:173px;"
        />
      </div>
      <p
        style="position:absolute;top:182px;left:62px;white-space:nowrap;color:white"
        class="ft112"
      >
        <b>Part I</b>
      </p>
      <p
        style="position:absolute;top:181px;left:129px;white-space:nowrap"
        class="ft10"
      >
        <b>All Filers&#160;</b>
      </p>
      <p
        style="position:absolute;top:199px;left:54px;white-space:nowrap"
        class="ft113"
      >
        <b>Caution:&#160;</b>If you file Form 2555,&#160;<b>stop here;&#160;</b
        >you cannot claim the additional child tax credit.
      </p>
      <p
        style="position:absolute;top:219px;left:69px;white-space:nowrap"
        class="ft113"
      >
        <b>1&#160;</b>
      </p>
      <money-input
        id="TaxLessCreditsAmt"
        v-model="Irs1040Schedule8812.TaxLessCreditsAmt"
        :div-style="'position:absolute;top:271px;left:757px'"
        name="TaxLessCreditsAmt"
        :line="1"
        :value="0"
      />
      <p
        style="position:absolute;top:235px;left:76px;white-space:nowrap"
        class="ft113"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:219px;left:97px;white-space:nowrap"
        class="ft122"
      >
        If&#160;&#160;you&#160;&#160;are&#160;&#160;required&#160;&#160;to&#160;&#160;use&#160;&#160;the&#160;&#160;worksheet&#160;&#160;in&#160;&#160;Pub.&#160;&#160;972,&#160;&#160;enter&#160;&#160;the&#160;&#160;amount&#160;&#160;from&#160;&#160;line&#160;&#160;10&#160;&#160;of&#160;&#160;the&#160;&#160;Child&#160;&#160;Tax&#160;&#160;Credit&#160;<br />and
        Credit for Other Dependents Worksheet in the publication. Otherwise:<br /><b
          >1040 and&#160;<br />1040-SR filers:</b
        >
      </p>
      <p
        style="position:absolute;top:254px;left:194px;white-space:nowrap"
        class="ft120"
      >
        Enter&#160;the&#160;amount&#160;from&#160;line&#160;8&#160;of&#160;your&#160;Child&#160;Tax&#160;Credit&#160;and&#160;Credit&#160;for&#160;Other&#160;Dependents&#160;<br />Worksheet
        (see the instructions for Forms 1040 and 1040-SR, line 13a).
      </p>
      <p
        style="position:absolute;top:289px;left:97px;white-space:nowrap"
        class="ft122"
      >
        <b>1040-NR filers:&#160;<br />&#160;</b>
      </p>
      <p
        style="position:absolute;top:290px;left:194px;white-space:nowrap"
        class="ft120"
      >
        Enter&#160;the&#160;amount&#160;from&#160;line&#160;8&#160;of&#160;your&#160;Child&#160;Tax&#160;Credit&#160;and&#160;Credit&#160;for&#160;Other&#160;Dependents&#160;<br />Worksheet
        (see the instructions for Form 1040-NR, line 49).
      </p>
      <p
        style="position:absolute;top:237px;left:698px;white-space:nowrap"
        class="ft115"
      >
        }&#160;<b>1</b>
      </p>
      <p
        style="position:absolute;top:325px;left:69px;white-space:nowrap"
        class="ft113"
      >
        <b>2</b>
      </p>
      <p
        style="position:absolute;top:326px;left:97px;white-space:nowrap"
        class="ft114"
      >
        Enter the amount from Form 1040, line 13a; Form 1040-SR, line 13a; or
        Form 1040-NR, line 49&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:325px;left:736px;white-space:nowrap"
        class="ft113"
      >
        <b>2</b>
      </p>
      <money-input
        id="CTCODCAmt"
        v-model="Irs1040Schedule8812.CTCODCAmt"
        :div-style="'position:absolute;top:325px;left:757px'"
        name="CTCODCAmt"
        :line="2"
      />
      <p
        style="position:absolute;top:343px;left:69px;white-space:nowrap"
        class="ft113"
      >
        <b>3</b>
      </p>
      <p
        style="position:absolute;top:344px;left:97px;white-space:nowrap"
        class="ft114"
      >
        Subtract line 2 from line 1. If zero,&#160;<b>stop here;&#160;</b>you
        cannot claim this
        credit&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:343px;left:736px;white-space:nowrap"
        class="ft113"
      >
        <b>3</b>
      </p>
      <money-input
        id="ACTCBeforeLimitAmt"
        v-model="Irs1040Schedule8812.ACTCBeforeLimitAmt"
        :div-style="'position:absolute;top:343px;left:757px'"
        name="ACTCBeforeLimitAmt"
        :line="3"
      />
      <p
        style="position:absolute;top:361px;left:69px;white-space:nowrap"
        class="ft113"
      >
        <b>4</b>
      </p>
      <div class="input-area" style="position:absolute;top:361px;left:540px">
        <input
          id="QlfyChildUnderAgeSSNCnt"
          v-model="Irs1040Schedule8812.QlfyChildUnderAgeSSNCnt"
          name="QlfyChildUnderAgeSSNCnt"
          data-line-number="4"
          class="no-outline"
          type="text"
          style="width:115px; height:17px"
        />
      </div>
      <p
        style="position:absolute;top:362px;left:97px;white-space:nowrap"
        class="ft114"
      >
        Number of qualifying children under 17 with the required social security
        number:
      </p>
      <p
        style="position:absolute;top:362px;left:659px;white-space:nowrap"
        class="ft114"
      >
        x $1,400. &#160;
      </p>
      <p
        style="position:absolute;top:380px;left:97px;white-space:nowrap"
        class="ft114"
      >
        Enter the result. If zero,&#160;<b>stop here;</b>&#160;you cannot claim
        this
        credit&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:379px;left:736px;white-space:nowrap"
        class="ft113"
      >
        <b>4</b>
      </p>
      <money-input
        id="QlfyChildUnderAgeSSNLimtAmt"
        v-model="Irs1040Schedule8812.QlfyChildUnderAgeSSNLimtAmt"
        :div-style="'position:absolute;top:378px;left:757px'"
        name="QlfyChildUnderAgeSSNLimtAmt"
        :line="4"
      />
      <p
        style="position:absolute;top:397px;left:97px;white-space:nowrap"
        class="ft120"
      >
        <b>TIP:&#160;</b
        >The&#160;number&#160;of&#160;children&#160;you&#160;use&#160;for&#160;this&#160;line&#160;is&#160;the&#160;same&#160;as&#160;the&#160;number&#160;of&#160;children&#160;you&#160;used&#160;for&#160;line&#160;1&#160;of&#160;the&#160;<br />Child
        Tax Credit and Credit for Other Dependents Worksheet.
      </p>
      <p
        style="position:absolute;top:433px;left:69px;white-space:nowrap"
        class="ft113"
      >
        <b>5</b>
      </p>
      <p
        style="position:absolute;top:434px;left:97px;white-space:nowrap"
        class="ft114"
      >
        Enter the&#160;<b>smaller&#160;</b>of line 3 or line
        4&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:433px;left:736px;white-space:nowrap"
        class="ft113"
      >
        <b>5</b>
      </p>
      <money-input
        id="ACTCAfterLimitAmt"
        v-model="Irs1040Schedule8812.ACTCAfterLimitAmt"
        :div-style="'position:absolute;top:432px;left:757px'"
        name="ACTCAfterLimitAmt"
        :line="5"
      />
      <p
        style="position:absolute;top:451px;left:69px;white-space:nowrap"
        class="ft113"
      >
        <b>6a&#160;&#160;</b>Earned income (see
        instructions)&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:451px;left:593px;white-space:nowrap"
        class="ft113"
      >
        <b>6a&#160;</b>
      </p>
      <money-input
        id="TotalEarnedIncomeAmt"
        v-model="Irs1040Schedule8812.TotalEarnedIncomeAmt"
        :div-style="'position:absolute;top:450px;left:617px'"
        name="TotalEarnedIncomeAmt"
        :width="105"
        :line="'6a'"
      />
      <p
        style="position:absolute;top:469px;left:76px;white-space:nowrap"
        class="ft113"
      >
        <b>b&#160;&#160;</b>Nontaxable combat pay (see
        instructions)&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:469px;left:452px;white-space:nowrap"
        class="ft113"
      >
        <b>6b&#160;</b>
      </p>
      <money-input
        id="NontaxableCombatPayAmt"
        v-model="Irs1040Schedule8812.NontaxableCombatPayAmt"
        :div-style="'position:absolute;top:468px;left:476px'"
        name="NontaxableCombatPayAmt"
        :width="107"
        :line="'6b'"
      />
      <p
        style="position:absolute;top:487px;left:69px;white-space:nowrap"
        class="ft113"
      >
        <b>7</b>
      </p>
      <p
        style="position:absolute;top:488px;left:97px;white-space:nowrap"
        class="ft114"
      >
        Is the amount on line 6a more than $2,500?&#160;
      </p>
      <p
        style="position:absolute;top:505px;left:121px;white-space:nowrap"
        class="ft123"
      >
        <b>No.&#160;</b>Leave line 7 blank and enter -0- on line 8.&#160;<br /><b
          >Yes.&#160;</b
        >Subtract $2,500 from the amount on line 6a. Enter the
        result&#160;&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <label
        style="position:absolute;top:505px;left:101px;"
        class="checkbox-container"
      >
        <input
          id="IndividualReturEarnedIncmMoreThanSpecifiedInd"
          v-model="Irs1040Schedule8812.EarnedIncmMoreThanSpecifiedInd"
          name="EarnedIncmMoreThanSpecifiedInd"
          class="no-outline checkbox"
          type="radio"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:524px;left:101px;"
        class="checkbox-container"
      >
        <input
          id="IndividualReturEarnedIncmMoreThanSpecifiedInd"
          v-model="Irs1040Schedule8812.EarnedIncmMoreThanSpecifiedInd"
          name="EarnedIncmMoreThanSpecifiedInd"
          class="no-outline checkbox"
          type="radio"
          value="1"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:523px;left:596px;white-space:nowrap"
        class="ft113"
      >
        <b>7</b>
      </p>
      <money-input
        id="NetTotalEarnedIncomeAmt"
        v-model="Irs1040Schedule8812.NetTotalEarnedIncomeAmt"
        :div-style="'position:absolute;top:521px;left:617px'"
        name="NetTotalEarnedIncomeAmt"
        :width="105"
        :line="'7'"
      />
      <p
        style="position:absolute;top:541px;left:69px;white-space:nowrap"
        class="ft113"
      >
        <b>8</b>
      </p>
      <money-input
        id="NetEarnedIncomeCalculatedAmt"
        v-model="Irs1040Schedule8812.NetEarnedIncomeCalculatedAmt"
        :div-style="'position:absolute;top:541px;left:757px'"
        name="NetEarnedIncomeCalculatedAmt"
        :line="8"
      />
      <p
        style="position:absolute;top:542px;left:97px;white-space:nowrap"
        class="ft114"
      >
        Multiply the amount on line 7 by 15% (0.15) and enter the
        result&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:541px;left:736px;white-space:nowrap"
        class="ft113"
      >
        <b>8</b>
      </p>
      <p
        style="position:absolute;top:559px;left:97px;white-space:nowrap"
        class="ft113"
      >
        <b>Next.&#160;</b>On line 4, is the amount $4,200 or more?
      </p>
      <p
        style="position:absolute;top:577px;left:121px;white-space:nowrap"
        class="ft113"
      >
        <b>No.&#160;</b
        >If&#160;line&#160;8&#160;is&#160;zero,&#160;<b>stop</b>&#160;<b>here;&#160;</b>you&#160;cannot&#160;claim&#160;this&#160;credit.&#160;Otherwise,&#160;skip&#160;Part&#160;II&#160;and&#160;enter&#160;the&#160;<b>smaller</b>&#160;
      </p>
      <label
        style="position:absolute;top:578px;left:101px;"
        class="checkbox-container"
      >
        <input
          id="IndividualReturEarnedIncmMoreThanSpecifiedInd"
          v-model="Irs1040Schedule8812.ThreeOrMoreQlfyChildrenInd"
          name="EarnedIncmMoreThanSpecifiedInd"
          class="no-outline checkbox"
          type="radio"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:614px;left:101px;"
        class="checkbox-container"
      >
        <input
          id="IndividualReturEarnedIncmMoreThanSpecifiedInd"
          v-model="Irs1040Schedule8812.ThreeOrMoreQlfyChildrenInd"
          name="EarnedIncmMoreThanSpecifiedInd"
          class="no-outline checkbox"
          type="radio"
          value="1"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:594px;left:151px;white-space:nowrap"
        class="ft114"
      >
        of line 5 or line 8 on line 15.&#160;
      </p>
      <p
        style="position:absolute;top:613px;left:121px;white-space:nowrap"
        class="ft113"
      >
        <b>Yes.&#160;</b
        >If&#160;&#160;line&#160;&#160;8&#160;&#160;is&#160;&#160;equal&#160;&#160;to&#160;&#160;or&#160;&#160;more&#160;&#160;than&#160;&#160;line&#160;&#160;5,&#160;&#160;skip&#160;&#160;Part&#160;&#160;II&#160;&#160;and&#160;&#160;enter&#160;&#160;the&#160;&#160;amount&#160;&#160;from&#160;&#160;line&#160;&#160;5&#160;&#160;on&#160;&#160;line&#160;&#160;15.&#160;
      </p>
      <p
        style="position:absolute;top:630px;left:151px;white-space:nowrap"
        class="ft114"
      >
        Otherwise, go to line 9.&#160;
      </p>
      <p
        style="position:absolute;top:649px;left:60px;white-space:nowrap;color:white"
        class="ft112"
      >
        <b>Part II&#160;</b>
      </p>
      <p
        style="position:absolute;top:649px;left:129px;white-space:nowrap"
        class="ft10"
      >
        <b>Certain Filers Who Have Three or More Qualifying Children</b>
      </p>
      <p
        style="position:absolute;top:672px;left:69px;white-space:nowrap"
        class="ft113"
      >
        <b>9&#160;</b>
      </p>
      <money-input
        id="FromW2Amt"
        v-model="Irs1040Schedule8812.FromW2Amt"
        :div-style="'position:absolute;top:721px;left:616px'"
        name="FromW2Amt"
        :width="107"
        :line="'9'"
      />
      <p
        style="position:absolute;top:689px;left:76px;white-space:nowrap"
        class="ft122"
      >
        <b>&#160;<br />&#160;<br />&#160;</b>
      </p>
      <p
        style="position:absolute;top:673px;left:97px;white-space:nowrap"
        class="ft120"
      >
        Withheld social security, Medicare, and Additional Medicare taxes
        from&#160;<br />Form(s) W-2, boxes 4 and 6. If married filing jointly,
        include your spouse’s amounts&#160;<br />with yours. If your employer
        withheld or you paid Additional Medicare Tax or tier 1&#160;<br />RRTA
        taxes, see instructions
      </p>
      <p
        style="position:absolute;top:722px;left:270px;white-space:nowrap"
        class="ft114"
      >
        .&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;&#160;
      </p>
      <p
        style="position:absolute;top:721px;left:596px;white-space:nowrap"
        class="ft113"
      >
        <b>9</b>
      </p>
      <p
        style="position:absolute;top:741px;left:62px;white-space:nowrap"
        class="ft113"
      >
        <b>10&#160;</b>
      </p>
      <money-input
        id="FromTaxReturnAmt"
        v-model="Irs1040Schedule8812.FromTaxReturnAmt"
        :div-style="'position:absolute;top:793px;left:616px'"
        name="FromTaxReturnAmt"
        :width="107"
        :line="'10'"
      />
      <p
        style="position:absolute;top:758px;left:76px;white-space:nowrap"
        class="ft122"
      >
        <b>&#160;<br />&#160;<br />&#160;</b>
      </p>
      <p
        style="position:absolute;top:741px;left:97px;white-space:nowrap"
        class="ft122"
      >
        <b>1040 and&#160;<br />1040-SR filers:&#160;<br />&#160;</b>
      </p>
      <p
        style="position:absolute;top:742px;left:194px;white-space:nowrap"
        class="ft120"
      >
        Enter&#160;the&#160;total&#160;of&#160;the&#160;amounts&#160;from&#160;Schedule&#160;1&#160;(Form&#160;1040&#160;or&#160;1040-SR),&#160;<br />line&#160;14,&#160;and&#160;Schedule&#160;2&#160;(Form&#160;1040&#160;or&#160;1040-SR),&#160;line&#160;5,&#160;plus&#160;any&#160;taxes&#160;<br />that&#160;&#160;you&#160;&#160;identified&#160;&#160;using&#160;&#160;code&#160;&#160;“UT”&#160;&#160;and&#160;&#160;entered&#160;&#160;on&#160;&#160;Schedule&#160;&#160;2&#160;&#160;(Form&#160;<br />1040
        or 1040-SR), line 8.&#160;
      </p>
      <p
        style="position:absolute;top:812px;left:97px;white-space:nowrap"
        class="ft122"
      >
        <b>1040-NR filers:&#160;<br />&#160;&#160;<br />&#160;</b>
      </p>
      <p
        style="position:absolute;top:812px;left:194px;white-space:nowrap"
        class="ft120"
      >
        Enter&#160;the&#160;total&#160;of&#160;the&#160;amounts&#160;from&#160;Form&#160;1040-NR,&#160;lines&#160;27&#160;and&#160;<br />56,&#160;&#160;plus&#160;&#160;any&#160;&#160;taxes&#160;&#160;that&#160;&#160;you&#160;&#160;identified&#160;&#160;using&#160;&#160;code&#160;&#160;“UT”&#160;&#160;and&#160;<br />entered
        on line 60.&#160;
      </p>
      <p
        style="position:absolute;top:721px;left:556px;white-space:nowrap"
        class="ft116"
      >
        }
      </p>
      <p
        style="position:absolute;top:793px;left:593px;white-space:nowrap"
        class="ft113"
      >
        <b>10</b>
      </p>
      <p
        style="position:absolute;top:865px;left:62px;white-space:nowrap"
        class="ft113"
      >
        <b>11</b>
      </p>
      <money-input
        id="CalcFromW2AndReturnAmt"
        v-model="Irs1040Schedule8812.CalcFromW2AndReturnAmt"
        :div-style="'position:absolute;top:865px;left:616px'"
        name="CalcFromW2AndReturnAmt"
        :width="107"
        :line="'11'"
      />
      <p
        style="position:absolute;top:866px;left:97px;white-space:nowrap"
        class="ft114"
      >
        Add lines 9 and
        10&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:865px;left:593px;white-space:nowrap"
        class="ft113"
      >
        <b>11</b>
      </p>
      <p
        style="position:absolute;top:887px;left:62px;white-space:nowrap"
        class="ft113"
      >
        <b>12&#160;</b>
      </p>
      <money-input
        id="CalcAmtFromRetPlusTaxWhldAmt"
        v-model="Irs1040Schedule8812.CalcAmtFromRetPlusTaxWhldAmt"
        :div-style="'position:absolute;top:918px;left:616px'"
        name="CalcAmtFromRetPlusTaxWhldAmt"
        :width="107"
        :line="'12'"
      />
      <p
        style="position:absolute;top:885px;left:97px;white-space:nowrap"
        class="ft122"
      >
        <b>1040 and&#160;<br />1040-SR filers:</b>
      </p>
      <p
        style="position:absolute;top:885px;left:194px;white-space:nowrap"
        class="ft120"
      >
        Enter the total of the amounts from Form 1040 or 1040-SR, line&#160;<br />18a,
        and Schedule 3 (Form 1040 or 1040-SR), line 11.
      </p>
      <p
        style="position:absolute;top:919px;left:97px;white-space:nowrap"
        class="ft113"
      >
        <b>1040-NR filers:&#160;&#160;</b>Enter the amount from Form 1040-NR,
        line 67.&#160;
      </p>
      <p
        style="position:absolute;top:880px;left:557px;white-space:nowrap"
        class="ft117"
      >
        }
      </p>
      <p
        style="position:absolute;top:919px;left:593px;white-space:nowrap"
        class="ft113"
      >
        <b>12</b>
      </p>
      <p
        style="position:absolute;top:937px;left:62px;white-space:nowrap"
        class="ft113"
      >
        <b>13&#160;</b>
      </p>
      <p
        style="position:absolute;top:938px;left:97px;white-space:nowrap"
        class="ft114"
      >
        Subtract line 12 from line 11. If zero or less, enter
        -0-&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:937px;left:733px;white-space:nowrap"
        class="ft113"
      >
        <b>13</b>
      </p>
      <money-input
        id="CalculatedDifferenceAmt"
        v-model="Irs1040Schedule8812.CalculatedDifferenceAmt"
        :div-style="'position:absolute;top:937px;left:757px'"
        name="CalculatedDifferenceAmt"
        :line="13"
      />
      <p
        style="position:absolute;top:955px;left:62px;white-space:nowrap"
        class="ft113"
      >
        <b>14</b>
      </p>
      <p
        style="position:absolute;top:956px;left:97px;white-space:nowrap"
        class="ft114"
      >
        Enter the&#160;<b>larger</b>&#160;of line 8 or line
        13&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:955px;left:733px;white-space:nowrap"
        class="ft113"
      >
        <b>14</b>
      </p>
      <p
        style="position:absolute;top:972px;left:97px;white-space:nowrap"
        class="ft113"
      >
        <b>Next,&#160;</b>enter the&#160;<b>smaller&#160;</b>of line 5 or line
        14 on line 15.&#160;
      </p>
      <money-input
        id="LargerCalcIncomeOrDiffAmt"
        v-model="Irs1040Schedule8812.LargerCalcIncomeOrDiffAmt"
        :div-style="'position:absolute;top:955px;left:757px'"
        name="LargerCalcIncomeOrDiffAmt"
        :line="14"
      />
      <p
        style="position:absolute;top:991px;left:59px;white-space:nowrap;color:white"
        class="ft112"
      >
        <b>Part III</b>
      </p>
      <p
        style="position:absolute;top:991px;left:129px;white-space:nowrap"
        class="ft10"
      >
        <b>Additional Child Tax Credit&#160;</b>
      </p>
      <p
        style="position:absolute;top:1009px;left:62px;white-space:nowrap"
        class="ft113"
      >
        <b>15</b>
      </p>
      <p
        style="position:absolute;top:1009px;left:97px;white-space:nowrap"
        class="ft113"
      >
        <b>This is your additional child tax credit&#160;&#160;</b
        >.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:1009px;left:733px;white-space:nowrap"
        class="ft113"
      >
        <b>15</b>
      </p>
      <money-input
        id="AdditionalChildTaxCreditAmt"
        v-model="Irs1040Schedule8812.AdditionalChildTaxCreditAmt"
        :div-style="'position:absolute;top:1009px;left:757px'"
        name="AdditionalChildTaxCreditAmt"
        :line="15"
        @change.native="update8812"
      />
      <p
        style="position:absolute;top:1084px;left:709px;white-space:nowrap"
        class="ft15"
      >
        ◀
      </p>
      <p
        style="position:absolute;top:1065px;left:666px;white-space:nowrap"
        class="ft18"
      >
        . . . . . . . . .&#160;
      </p>
      <p
        style="position:absolute;top:1059px;left:673px;white-space:nowrap"
        class="ft19"
      >
        <b>1040</b>
      </p>
      <p
        style="position:absolute;top:1057px;left:695px;white-space:nowrap"
        class="ft11"
      >
        <b>&#160;&#160;</b>
      </p>
      <p
        style="position:absolute;top:1072px;left:664px;white-space:nowrap"
        class="ft19"
      >
        <b>1040-SR&#160;</b>
      </p>
      <p
        style="position:absolute;top:1085px;left:664px;white-space:nowrap"
        class="ft19"
      >
        <b>1040-NR</b>
      </p>
      <p
        style="position:absolute;top:1079px;left:666px;white-space:nowrap"
        class="ft18"
      >
        . . . . . . . . .&#160;
      </p>
      <p
        style="position:absolute;top:1036px;left:734px;white-space:nowrap"
        class="ft118"
      >
        <i>Enter this amount on&#160;</i>
      </p>
      <p
        style="position:absolute;top:1046px;left:734px;white-space:nowrap"
        class="ft118"
      >
        <i>Form 1040, line 18b;&#160;</i>
      </p>
      <p
        style="position:absolute;top:1057px;left:734px;white-space:nowrap"
        class="ft118"
      >
        <i>Form 1040-SR, line 18b; or&#160;</i>
      </p>
      <p
        style="position:absolute;top:1067px;left:734px;white-space:nowrap"
        class="ft118"
      >
        <i>Form 1040-NR, line 64.</i>
      </p>
      <p
        style="position:absolute;top:1119px;left:54px;white-space:nowrap"
        class="ft11"
      >
        <b
          >XOB For Paperwork Reduction Act Notice, see your tax return
          instructions.</b
        >
      </p>
      <p
        style="position:absolute;top:1121px;left:505px;white-space:nowrap"
        class="ft12"
      >
        Cat. No. 0000/1736
      </p>
      <p
        style="position:absolute;top:1121px;left:645px;white-space:nowrap"
        class="ft19"
      >
        <b>Schedule 8812 (Form 1040 or 1040-SR) 2019</b>
      </p>
    </div>
  </div>
</template>
<script>
import { formService } from '~/services/form-service'
import { IRS1040_UPDATED, SCHEDULE8812_UPDATED } from '~/events/event'
import MoneyInput from '~/components/Currency/MoneyInput'
export default {
  name: 'Irs1040Schedule8812',
  components: { MoneyInput },
  data() {
    return {
      Irs1040Schedule8812: {}
    }
  },
  mounted() {
    this.Irs1040Schedule8812.name =
      this.$store.state.attachments.Irs1040.firstName +
      ' ' +
      this.$store.state.attachments.Irs1040.lastName
    this.Irs1040Schedule8812.ssn = this.$store.state.attachments.Irs1040.ssn
    formService.$on(IRS1040_UPDATED, (data) => {
      this.Irs1040Schedule8812.ssn = data.ssn
      this.Irs1040Schedule8812.name = data.firstName + ' ' + data.lastName
      this.$forceUpdate()
    })
  },
  methods: {
    update8812() {
      formService.$emit(SCHEDULE8812_UPDATED, this.Irs1040Schedule8812)
    }
  }
}
</script>
<style scoped>
@import '@/assets/styles/form.css';
#page1-div {
  background-image: url('../../static/form-assets/schedule8812.png');
}
.year {
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
</style>
