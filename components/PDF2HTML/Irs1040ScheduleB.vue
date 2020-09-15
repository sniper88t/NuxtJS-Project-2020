<!--========================= IRS 1040 Schedule B ==========================-->
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
        src="irs1040Scheduleb1.png"
        alt="background image"
      /> -->
      <p
        style="position:absolute;top:52px;left:54px;white-space:nowrap"
        class="ft115"
      >
        <b>SCHEDULE B&#160;<br />(Form 1040 or 1040-SR)&#160;</b>
      </p>
      <p
        style="position:absolute;top:101px;left:54px;white-space:nowrap"
        class="ft12"
      >
        Department of the Treasury &#160;
      </p>
      <p
        style="position:absolute;top:111px;left:54px;white-space:nowrap;font-size:9.5px;letter-spacing:-1"
        class="ft12"
      >
        Internal Revenue Service (99)&#160;
      </p>
      <p
        style="position:absolute;top:58px;left:311px;white-space:nowrap"
        class="ft13"
      >
        Interest and Ordinary Dividends
      </p>
      <p
        style="position:absolute;top:94px;left:244px;white-space:nowrap"
        class="ft14"
      >
        &#160;▶<b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:93px;left:258px;white-space:nowrap"
        class="ft11"
      >
        <b>Go to&#160;<i>www.irs.gov/ScheduleB&#160;</i></b
        ><b>for instructions and the latest information.</b>&#160;&#160;
      </p>
      <p
        style="position:absolute;top:109px;left:361px;white-space:nowrap"
        class="ft14"
      >
        ▶&#160;
      </p>
      <p
        style="position:absolute;top:107px;left:372px;white-space:nowrap"
        class="ft11"
      >
        <b>Attach to Form 1040 or 1040-SR.</b>
      </p>
      <p
        style="position:absolute;top:55px;left:750px;white-space:nowrap"
        class="ft12"
      >
        OMB No. 1545-1736
      </p>
      <p
        style="position:absolute;top:71px;left:760px;white-space:nowrap;font-size:30px;"
        class="ft18"
      >
        <strong> <span class="year">20</span>19</strong>
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
        style="position:absolute;top:107px;left:822px;white-space:nowrap"
        class="ft10"
      >
        <b>08</b>&#160;
      </p>
      <p
        style="position:absolute;top:129px;left:54px;white-space:nowrap"
        class="ft12"
      >
        Name(s) shown on return
      </p>
      <div class="input-area" style="position:absolute;top:142px;left:54px">
        <input
          id="name"
          v-model="Irs1040ScheduleB.name"
          name="name"
          class="no-outline"
          type="text"
          readonly
          style="width:648px;"
        />
      </div>
      <p
        style="position:absolute;top:128px;left:708px;white-space:nowrap"
        class="ft110"
      >
        <b>Your social security number</b>
      </p>
      <div class="input-area" style="position:absolute;top:142px;left:703px">
        <input
          id="ssn"
          v-model="Irs1040ScheduleB.ssn"
          v-mask="'###-##-####'"
          name="ssn"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          class="no-outline"
          type="password"
          readonly
          style="width:162px;"
        />
      </div>
      <p
        style="position:absolute;top:162px;left:54px;white-space:nowrap"
        class="ft116"
      >
        <b>Part I</b>&#160;<br /><b>Interest</b>&#160;
      </p>
      <p
        style="position:absolute;top:213px;left:54px;white-space:nowrap"
        class="ft112"
      >
        &#160;&#160;
      </p>
      <p
        style="position:absolute;top:226px;left:54px;white-space:nowrap"
        class="ft112"
      >
        (See instructions&#160;
      </p>
      <p
        style="position:absolute;top:239px;left:54px;white-space:nowrap"
        class="ft112"
      >
        and the &#160;
      </p>
      <p
        style="position:absolute;top:251px;left:54px;white-space:nowrap"
        class="ft112"
      >
        instructions for &#160;
      </p>
      <p
        style="position:absolute;top:264px;left:54px;white-space:nowrap"
        class="ft112"
      >
        Forms 1040 and&#160;
      </p>
      <p
        style="position:absolute;top:277px;left:54px;white-space:nowrap"
        class="ft112"
      >
        1040-SR, line 2b.)&#160;
      </p>
      <p
        style="position:absolute;top:289px;left:54px;white-space:nowrap"
        class="ft11"
      >
        <b>&#160;&#160;</b>
      </p>
      <p
        style="position:absolute;top:302px;left:54px;white-space:nowrap"
        class="ft11"
      >
        <b>Note:&#160;</b>If you&#160;<b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:315px;left:54px;white-space:nowrap"
        class="ft112"
      >
        received a Form&#160;
      </p>
      <p
        style="position:absolute;top:315px;left:144px;white-space:nowrap"
        class="ft11"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:328px;left:54px;white-space:nowrap"
        class="ft112"
      >
        1099-INT, Form&#160;
      </p>
      <p
        style="position:absolute;top:328px;left:142px;white-space:nowrap"
        class="ft11"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:341px;left:54px;white-space:nowrap"
        class="ft112"
      >
        1099-OID, or&#160;
      </p>
      <p
        style="position:absolute;top:340px;left:127px;white-space:nowrap"
        class="ft11"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:353px;left:54px;white-space:nowrap"
        class="ft112"
      >
        substitute &#160;
      </p>
      <p
        style="position:absolute;top:366px;left:54px;white-space:nowrap"
        class="ft112"
      >
        statement from&#160;
      </p>
      <p
        style="position:absolute;top:379px;left:54px;white-space:nowrap"
        class="ft112"
      >
        a brokerage firm, &#160;
      </p>
      <p
        style="position:absolute;top:392px;left:54px;white-space:nowrap"
        class="ft112"
      >
        list the firm’s &#160;
      </p>
      <p
        style="position:absolute;top:404px;left:54px;white-space:nowrap"
        class="ft112"
      >
        name as the&#160;
      </p>
      <p
        style="position:absolute;top:417px;left:54px;white-space:nowrap"
        class="ft112"
      >
        payer and enter &#160;
      </p>
      <p
        style="position:absolute;top:430px;left:54px;white-space:nowrap"
        class="ft112"
      >
        the total interest &#160;
      </p>
      <p
        style="position:absolute;top:443px;left:54px;white-space:nowrap"
        class="ft112"
      >
        shown on that &#160;
      </p>
      <p
        style="position:absolute;top:455px;left:54px;white-space:nowrap"
        class="ft112"
      >
        form.&#160;
      </p>
      <p
        style="position:absolute;top:167px;left:165px;white-space:nowrap"
        class="ft113"
      >
        <b>1&#160;</b>
      </p>
      <p
        style="position:absolute;top:183px;left:173px;white-space:nowrap"
        class="ft117"
      >
        <b>&#160;<br />&#160;</b>
      </p>
      <p
        style="position:absolute;top:166px;left:194px;white-space:nowrap"
        class="ft118"
      >
        List&#160;&#160;name&#160;&#160;of&#160;&#160;payer.&#160;&#160;If&#160;&#160;any&#160;&#160;interest&#160;&#160;is&#160;&#160;from&#160;&#160;a&#160;&#160;seller-financed&#160;&#160;mortgage&#160;&#160;and&#160;&#160;the&#160;<br />buyer&#160;used&#160;the&#160;property&#160;as&#160;a&#160;personal&#160;residence,&#160;see&#160;the&#160;instructions&#160;and&#160;list&#160;this&#160;<br />interest
        first. Also, show that buyer’s social security number and address&#160;▶
      </p>
      <p
        style="position:absolute;top:305px;left:714px;white-space:nowrap"
        class="ft113"
      >
        <b>1&#160;</b>
      </p>
      <div class="input-area" style="position:absolute;top:215px;left:192px">
        <input
          id="InterestPayerName"
          v-model="Irs1040ScheduleB.InterestPayerName"
          name="InterestPayerName"
          class="no-outline"
          type="text"
          style="width:499px;height:18px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:235px;left:192px">
        <input
          id="InterestPayerName1"
          v-model="Irs1040ScheduleB.InterestPayerName1"
          name="InterestPayerName1"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:254px;left:192px">
        <input
          id="InterestPayerName2"
          v-model="Irs1040ScheduleB.InterestPayerName2"
          name="InterestPayerName2"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:272px;left:192px">
        <input
          id="InterestPayerName3"
          v-model="Irs1040ScheduleB.InterestPayerName3"
          name="InterestPayerName3"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:290px;left:192px">
        <input
          id="InterestPayerName4"
          v-model="Irs1040ScheduleB.InterestPayerName4"
          name="InterestPayerName4"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:308px;left:192px">
        <input
          id="InterestPayerName5"
          v-model="Irs1040ScheduleB.InterestPayerName5"
          name="InterestPayerName5"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:326px;left:192px">
        <input
          id="InterestPayerName6"
          v-model="Irs1040ScheduleB.InterestPayerName6"
          name="InterestPayerName6"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:344px;left:192px">
        <input
          id="InterestPayerName7"
          v-model="Irs1040ScheduleB.InterestPayerName7"
          name="InterestPayerName7"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:361px;left:192px">
        <input
          id="InterestPayerName8"
          v-model="Irs1040ScheduleB.InterestPayerName8"
          name="InterestPayerName8"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:379px;left:192px">
        <input
          id="InterestPayerName9"
          v-model="Irs1040ScheduleB.InterestPayerName9"
          name="InterestPayerName9"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:397px;left:192px">
        <input
          id="InterestPayerName10"
          v-model="Irs1040ScheduleB.InterestPayerName10"
          name="InterestPayerName10"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:415px;left:192px">
        <input
          id="InterestPayerName11"
          v-model="Irs1040ScheduleB.InterestPayerName11"
          name="InterestPayerName11"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:433px;left:192px">
        <input
          id="InterestPayerName12"
          v-model="Irs1040ScheduleB.InterestPayerName12"
          name="InterestPayerName12"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:451px;left:192px">
        <input
          id="InterestPayerName13"
          v-model="Irs1040ScheduleB.InterestPayerName13"
          name="InterestPayerName13"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <p
        style="position:absolute;top:162px;left:774px;white-space:nowrap"
        class="ft113"
      >
        <b>Amount</b>
      </p>
      <money-input
        v-model="Irs1040ScheduleB.InterestAmt"
        name="InterestAmt"
        :div-style="'position:absolute;top:216px;left:735px'"
        :width="130"
        :height="18"
        :line="'1'"
      />
      <money-input
        v-model="Irs1040ScheduleB.InterestAmt1"
        name="InterestAmt1"
        :div-style="'position:absolute;top:236px;left:735px'"
        :width="130"
        :height="16"
        :line="'1'"
      />
      <money-input
        v-model="Irs1040ScheduleB.InterestAmt2"
        name="InterestAmt2"
        :div-style="'position:absolute;top:254px;left:735px'"
        :width="130"
        :height="16"
        :line="'1'"
      />
      <money-input
        v-model="Irs1040ScheduleB.InterestAmt3"
        name="InterestAmt3"
        :div-style="'position:absolute;top:272px;left:735px'"
        :width="130"
        :height="16"
        :line="'1'"
      />
      <money-input
        v-model="Irs1040ScheduleB.InterestAmt4"
        name="InterestAmt4"
        :div-style="'position:absolute;top:290px;left:735px'"
        :width="130"
        :height="16"
        :line="'1'"
      />
      <money-input
        v-model="Irs1040ScheduleB.InterestAmt5"
        name="InterestAmt5"
        :div-style="'position:absolute;top:308px;left:735px'"
        :width="130"
        :height="16"
        :line="'1'"
      />
      <money-input
        v-model="Irs1040ScheduleB.InterestAmt6"
        name="InterestAmt6"
        :div-style="'position:absolute;top:326px;left:735px'"
        :width="130"
        :height="16"
        :line="'1'"
      />
      <money-input
        v-model="Irs1040ScheduleB.InterestAmt7"
        name="InterestAmt7"
        :div-style="'position:absolute;top:344px;left:735px'"
        :width="130"
        :height="16"
        :line="'1'"
      />
      <money-input
        v-model="Irs1040ScheduleB.InterestAmt8"
        name="InterestAmt8"
        :div-style="'position:absolute;top:362px;left:735px'"
        :width="130"
        :height="16"
        :line="'1'"
      />
      <money-input
        v-model="Irs1040ScheduleB.InterestAmt9"
        name="InterestAmt9"
        :div-style="'position:absolute;top:380px;left:735px'"
        :width="130"
        :height="16"
        :line="'1'"
      />
      <money-input
        v-model="Irs1040ScheduleB.InterestAmt10"
        name="InterestAmt10"
        :div-style="'position:absolute;top:398px;left:735px'"
        :width="130"
        :height="16"
        :line="'1'"
      />
      <money-input
        v-model="Irs1040ScheduleB.InterestAmt11"
        name="InterestAmt11"
        :div-style="'position:absolute;top:416px;left:735px'"
        :width="130"
        :height="16"
        :line="'1'"
      />
      <money-input
        v-model="Irs1040ScheduleB.InterestAmt12"
        name="InterestAmt12"
        :div-style="'position:absolute;top:434px;left:735px'"
        :width="130"
        :height="16"
        :line="'1'"
      />
      <money-input
        v-model="Irs1040ScheduleB.InterestAmt13"
        name="InterestAmt13"
        :div-style="'position:absolute;top:452px;left:735px'"
        :width="130"
        :height="16"
        :line="'1'"
      />
      <p
        style="position:absolute;top:469px;left:165px;white-space:nowrap"
        class="ft113"
      >
        <b>2&#160;</b>
      </p>
      <div class="input-area" style="position:absolute;top:470px;left:735px">
        <money
          id="TaxableInterestSubtotalAmt"
          v-model="Irs1040ScheduleB.TaxableInterestSubtotalAmt"
          name="TaxableInterestSubtotalAmt"
          data-line-number="2"
          class="no-outline"
          type="text"
          style="width:130px; height:16px"
        />
      </div>
      <p
        style="position:absolute;top:469px;left:194px;white-space:nowrap"
        class="ft114"
      >
        Add the amounts on line
        1&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;
      </p>
      <p
        style="position:absolute;top:469px;left:714px;white-space:nowrap"
        class="ft113"
      >
        <b>2&#160;</b>
      </p>
      <p
        style="position:absolute;top:489px;left:165px;white-space:nowrap"
        class="ft113"
      >
        <b>3&#160;</b>
      </p>
      <p
        style="position:absolute;top:505px;left:173px;white-space:nowrap"
        class="ft113"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:489px;left:194px;white-space:nowrap"
        class="ft118"
      >
        Excludable&#160;&#160;interest&#160;&#160;on&#160;&#160;series&#160;&#160;EE&#160;&#160;and&#160;&#160;I&#160;&#160;U.S.&#160;&#160;savings&#160;&#160;bonds&#160;&#160;issued&#160;&#160;after&#160;&#160;1989.&#160;<br />Attach
        Form
        8815&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;
      </p>
      <p
        style="position:absolute;top:505px;left:714px;white-space:nowrap"
        class="ft113"
      >
        <b>3&#160;</b>
      </p>
      <div class="input-area" style="position:absolute;top:505px;left:735px">
        <money
          id="ExcludableSavingsBondIntAmt"
          v-model="Irs1040ScheduleB.ExcludableSavingsBondIntAmt"
          name="ExcludableSavingsBondIntAmt"
          data-line-number="3"
          class="no-outline"
          type="text"
          style="width:130px; height:16px"
        />
      </div>
      <p
        style="position:absolute;top:524px;left:165px;white-space:nowrap"
        class="ft113"
      >
        <b>4&#160;</b>
      </p>
      <p
        style="position:absolute;top:540px;left:173px;white-space:nowrap"
        class="ft113"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:525px;left:194px;white-space:nowrap"
        class="ft118"
      >
        Subtract&#160;line&#160;3&#160;from&#160;line&#160;2.&#160;Enter&#160;the&#160;result&#160;here&#160;and&#160;on&#160;Form&#160;1040&#160;or&#160;1040-SR,&#160;<br />line&#160;2b
      </p>
      <p
        style="position:absolute;top:541px;left:252px;white-space:nowrap"
        class="ft114"
      >
        .&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;▶
      </p>
      <p
        style="position:absolute;top:541px;left:714px;white-space:nowrap"
        class="ft113"
      >
        <b>4&#160;</b>
      </p>
      <div class="input-area" style="position:absolute;top:542px;left:735px">
        <money
          id="CalculatedTotalTaxableIntAmt"
          v-model="Irs1040ScheduleB.CalculatedTotalTaxableIntAmt"
          name="CalculatedTotalTaxableIntAmt"
          data-line-number="4"
          class="no-outline"
          type="text"
          style="width:130px; height:16px"
          @change.native="IrsScheduleBUpdated"
        />
      </div>
      <p
        style="position:absolute;top:559px;left:151px;white-space:nowrap"
        class="ft113"
      >
        <b>Note:</b>&#160; If line 4 is over $1,500, you must complete Part
        III.&#160;
      </p>
      <p
        style="position:absolute;top:558px;left:774px;white-space:nowrap"
        class="ft113"
      >
        <b>Amount&#160;</b>
      </p>
      <p
        style="position:absolute;top:576px;left:54px;white-space:nowrap"
        class="ft120"
      >
        <b>Part II&#160;<br />Ordinary &#160;<br />Dividends</b>
      </p>
      <p
        style="position:absolute;top:645px;left:54px;white-space:nowrap"
        class="ft112"
      >
        &#160;&#160;
      </p>
      <p
        style="position:absolute;top:658px;left:54px;white-space:nowrap"
        class="ft112"
      >
        (See instructions&#160;
      </p>
      <p
        style="position:absolute;top:671px;left:54px;white-space:nowrap"
        class="ft112"
      >
        and the&#160;
      </p>
      <p
        style="position:absolute;top:683px;left:54px;white-space:nowrap"
        class="ft112"
      >
        instructions for&#160;
      </p>
      <p
        style="position:absolute;top:696px;left:54px;white-space:nowrap"
        class="ft112"
      >
        Forms 1040 and&#160;
      </p>
      <p
        style="position:absolute;top:709px;left:54px;white-space:nowrap"
        class="ft112"
      >
        1040-SR, line 3b.)&#160;
      </p>
      <p
        style="position:absolute;top:721px;left:54px;white-space:nowrap"
        class="ft11"
      >
        <b>&#160;&#160;</b>
      </p>
      <p
        style="position:absolute;top:734px;left:54px;white-space:nowrap"
        class="ft11"
      >
        <b>Note:&#160;</b>If you&#160;
      </p>
      <p
        style="position:absolute;top:747px;left:54px;white-space:nowrap"
        class="ft112"
      >
        received a Form&#160;
      </p>
      <p
        style="position:absolute;top:760px;left:54px;white-space:nowrap"
        class="ft112"
      >
        1099-DIV or&#160;
      </p>
      <p
        style="position:absolute;top:773px;left:54px;white-space:nowrap"
        class="ft112"
      >
        substitute&#160;
      </p>
      <p
        style="position:absolute;top:785px;left:54px;white-space:nowrap"
        class="ft112"
      >
        statement from&#160;
      </p>
      <p
        style="position:absolute;top:798px;left:54px;white-space:nowrap"
        class="ft112"
      >
        a brokerage firm,&#160;
      </p>
      <p
        style="position:absolute;top:811px;left:54px;white-space:nowrap"
        class="ft112"
      >
        list the firm’s&#160;
      </p>
      <p
        style="position:absolute;top:824px;left:54px;white-space:nowrap"
        class="ft112"
      >
        name as the&#160;
      </p>
      <p
        style="position:absolute;top:836px;left:54px;white-space:nowrap"
        class="ft112"
      >
        payer and enter&#160;
      </p>
      <p
        style="position:absolute;top:849px;left:54px;white-space:nowrap"
        class="ft112"
      >
        the ordinary&#160;
      </p>
      <p
        style="position:absolute;top:862px;left:54px;white-space:nowrap"
        class="ft112"
      >
        dividends shown&#160;
      </p>
      <p
        style="position:absolute;top:875px;left:54px;white-space:nowrap"
        class="ft112"
      >
        on that form.&#160;
      </p>
      <p
        style="position:absolute;top:577px;left:165px;white-space:nowrap"
        class="ft113"
      >
        <b>5&#160;</b>
      </p>
      <p
        style="position:absolute;top:579px;left:194px;white-space:nowrap"
        class="ft112"
      >
        List name of payer&#160;&#160;▶
      </p>
      <p
        style="position:absolute;top:708px;left:714px;white-space:nowrap"
        class="ft113"
      >
        <b>5&#160;</b>
      </p>
      <div class="input-area" style="position:absolute;top:577px;left:313px">
        <input
          id="DividendsPayerName"
          v-model="Irs1040ScheduleB.DividendsPayerName"
          name="DividendsPayerName"
          class="no-outline"
          type="text"
          style="width:378px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:595px;left:192px">
        <input
          id="DividendsPayerName1"
          v-model="Irs1040ScheduleB.DividendsPayerName1"
          name="DividendsPayerName1"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:613px;left:192px">
        <input
          id="DividendsPayerName2"
          v-model="Irs1040ScheduleB.DividendsPayerName2"
          name="DividendsPayerName2"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:631px;left:192px">
        <input
          id="DividendsPayerName3"
          v-model="Irs1040ScheduleB.DividendsPayerName3"
          name="DividendsPayerName3"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:649px;left:192px">
        <input
          id="DividendsPayerName4"
          v-model="Irs1040ScheduleB.DividendsPayerName4"
          name="DividendsPayerName4"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:667px;left:192px">
        <input
          id="DividendsPayerName5"
          v-model="Irs1040ScheduleB.DividendsPayerName5"
          name="DividendsPayerName5"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:685px;left:192px">
        <input
          id="DividendsPayerName6"
          v-model="Irs1040ScheduleB.DividendsPayerName6"
          name="DividendsPayerName6"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:703px;left:192px">
        <input
          id="DividendsPayerName7"
          v-model="Irs1040ScheduleB.DividendsPayerName7"
          name="DividendsPayerName7"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:721px;left:192px">
        <input
          id="DividendsPayerName8"
          v-model="Irs1040ScheduleB.DividendsPayerName8"
          name="DividendsPayerName8"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:739px;left:192px">
        <input
          id="DividendsPayerName9"
          v-model="Irs1040ScheduleB.DividendsPayerName9"
          name="DividendsPayerName9"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:757px;left:192px">
        <input
          id="DividendsPayerName10"
          v-model="Irs1040ScheduleB.DividendsPayerName10"
          name="DividendsPayerName10"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:775px;left:192px">
        <input
          id="DividendsPayerName11"
          v-model="Irs1040ScheduleB.DividendsPayerName11"
          name="DividendsPayerName11"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:793px;left:192px">
        <input
          id="DividendsPayerName12"
          v-model="Irs1040ScheduleB.DividendsPayerName12"
          name="DividendsPayerName12"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:811px;left:192px">
        <input
          id="DividendsPayerName13"
          v-model="Irs1040ScheduleB.DividendsPayerName13"
          name="DividendsPayerName13"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:829px;left:192px">
        <input
          id="DividendsPayerName14"
          v-model="Irs1040ScheduleB.DividendsPayerName14"
          name="DividendsPayerName14"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:847px;left:192px">
        <input
          id="DividendsPayerName15"
          v-model="Irs1040ScheduleB.DividendsPayerName15"
          name="DividendsPayerName15"
          class="no-outline"
          type="text"
          style="width:499px;height:16px"
        />
      </div>
      <money-input
        v-model="Irs1040ScheduleB.OrdinaryDividendSubtotalAmt"
        name="OrdinaryDividendSubtotalAmt"
        :div-style="'position:absolute;top:578px;left:735px'"
        :width="130"
        :height="16"
        :line="'5'"
      />
      <money-input
        v-model="Irs1040ScheduleB.OrdinaryDividendSubtotalAmt1"
        name="OrdinaryDividendSubtotalAmt1"
        :div-style="'position:absolute;top:596px;left:735px'"
        :width="130"
        :height="16"
        :line="'5'"
      />
      <money-input
        v-model="Irs1040ScheduleB.OrdinaryDividendSubtotalAmt2"
        name="OrdinaryDividendSubtotalAmt2"
        :div-style="'position:absolute;top:614px;left:735px'"
        :width="130"
        :height="16"
        :line="'5'"
      />
      <money-input
        v-model="Irs1040ScheduleB.OrdinaryDividendSubtotalAmt3"
        name="OrdinaryDividendSubtotalAmt3"
        :div-style="'position:absolute;top:632px;left:735px'"
        :width="130"
        :height="16"
        :line="'5'"
      />
      <money-input
        v-model="Irs1040ScheduleB.OrdinaryDividendSubtotalAmt4"
        name="OrdinaryDividendSubtotalAmt4"
        :div-style="'position:absolute;top:650px;left:735px'"
        :width="130"
        :height="16"
        :line="'5'"
      />
      <money-input
        v-model="Irs1040ScheduleB.OrdinaryDividendSubtotalAmt5"
        name="OrdinaryDividendSubtotalAmt5"
        :div-style="'position:absolute;top:668px;left:735px'"
        :width="130"
        :height="16"
        :line="'5'"
      />
      <money-input
        v-model="Irs1040ScheduleB.OrdinaryDividendSubtotalAmt6"
        name="OrdinaryDividendSubtotalAmt6"
        :div-style="'position:absolute;top:686px;left:735px'"
        :width="130"
        :height="16"
        :line="'5'"
      />
      <money-input
        v-model="Irs1040ScheduleB.OrdinaryDividendSubtotalAmt7"
        name="OrdinaryDividendSubtotalAmt7"
        :div-style="'position:absolute;top:704px;left:735px'"
        :width="130"
        :height="16"
        :line="'5'"
      />
      <money-input
        v-model="Irs1040ScheduleB.OrdinaryDividendSubtotalAmt8"
        name="OrdinaryDividendSubtotalAmt8"
        :div-style="'position:absolute;top:722px;left:735px'"
        :width="130"
        :height="16"
        :line="'5'"
      />
      <money-input
        v-model="Irs1040ScheduleB.OrdinaryDividendSubtotalAmt9"
        name="OrdinaryDividendSubtotalAmt9"
        :div-style="'position:absolute;top:740px;left:735px'"
        :width="130"
        :height="16"
        :line="'5'"
      />
      <money-input
        v-model="Irs1040ScheduleB.OrdinaryDividendSubtotalAmt10"
        name="OrdinaryDividendSubtotalAmt10"
        :div-style="'position:absolute;top:758px;left:735px'"
        :width="130"
        :height="16"
        :line="'5'"
      />
      <money-input
        v-model="Irs1040ScheduleB.OrdinaryDividendSubtotalAmt11"
        name="OrdinaryDividendSubtotalAmt11"
        :div-style="'position:absolute;top:776px;left:735px'"
        :width="130"
        :height="16"
        :line="'5'"
      />
      <money-input
        v-model="Irs1040ScheduleB.OrdinaryDividendSubtotalAmt12"
        name="OrdinaryDividendSubtotalAmt12"
        :div-style="'position:absolute;top:794px;left:735px'"
        :width="130"
        :height="16"
        :line="'5'"
      />
      <money-input
        v-model="Irs1040ScheduleB.OrdinaryDividendSubtotalAmt13"
        name="OrdinaryDividendSubtotalAmt13"
        :div-style="'position:absolute;top:812px;left:735px'"
        :width="130"
        :height="16"
        :line="'5'"
      />
      <money-input
        v-model="Irs1040ScheduleB.OrdinaryDividendSubtotalAmt14"
        name="OrdinaryDividendSubtotalAmt14"
        :div-style="'position:absolute;top:830px;left:735px'"
        :width="130"
        :height="16"
        :line="'5'"
      />
      <money-input
        v-model="Irs1040ScheduleB.OrdinaryDividendSubtotalAmt15"
        name="OrdinaryDividendSubtotalAmt15"
        :div-style="'position:absolute;top:848px;left:735px'"
        :width="130"
        :height="16"
        :line="'5'"
      />
      <p
        style="position:absolute;top:867px;left:165px;white-space:nowrap"
        class="ft113"
      >
        <b>6&#160;</b>
      </p>
      <div class="input-area" style="position:absolute;top:884px;left:735px">
        <money
          id="TotalOrdinaryDividendsAmt"
          v-model="Irs1040ScheduleB.TotalOrdinaryDividendsAmt"
          name="TotalOrdinaryDividendsAmt"
          data-line-number="6"
          class="no-outline"
          type="text"
          style="width:130px; height:16px"
          @change.native="IrsScheduleBUpdated"
        />
      </div>
      <p
        style="position:absolute;top:883px;left:173px;white-space:nowrap"
        class="ft113"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:867px;left:194px;white-space:nowrap"
        class="ft118"
      >
        Add&#160;the&#160;amounts&#160;on&#160;line&#160;5.&#160;Enter&#160;the&#160;total&#160;here&#160;and&#160;on&#160;Form&#160;1040&#160;or&#160;1040-SR,&#160;<br />line&#160;3b&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;▶
      </p>
      <p
        style="position:absolute;top:883px;left:714px;white-space:nowrap"
        class="ft113"
      >
        <b>6&#160;</b>
      </p>
      <p
        style="position:absolute;top:901px;left:151px;white-space:nowrap"
        class="ft113"
      >
        <b>Note: &#160;</b>If line 6 is over $1,500, you must complete Part
        III.&#160;
      </p>
      <p
        style="position:absolute;top:918px;left:54px;white-space:nowrap"
        class="ft111"
      >
        <b>Part III</b>
      </p>
      <p
        style="position:absolute;top:951px;left:54px;white-space:nowrap"
        class="ft111"
      >
        <b>Foreign &#160;</b>
      </p>
      <p
        style="position:absolute;top:969px;left:54px;white-space:nowrap"
        class="ft111"
      >
        <b>Accounts &#160;</b>
      </p>
      <p
        style="position:absolute;top:987px;left:54px;white-space:nowrap"
        class="ft111"
      >
        <b>and Trusts</b>
      </p>
      <p
        style="position:absolute;top:1005px;left:54px;white-space:nowrap"
        class="ft11"
      >
        <b>&#160;&#160;</b>
      </p>
      <p
        style="position:absolute;top:1018px;left:54px;white-space:nowrap"
        class="ft11"
      >
        <b>Caution:</b>&#160;If&#160;
      </p>
      <p
        style="position:absolute;top:1032px;left:54px;white-space:nowrap"
        class="ft112"
      >
        required, failure
      </p>
      <p
        style="position:absolute;top:1032px;left:138px;white-space:nowrap"
        class="ft11"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:1046px;left:54px;white-space:nowrap"
        class="ft112"
      >
        to file FinCEN&#160;
      </p>
      <p
        style="position:absolute;top:1059px;left:54px;white-space:nowrap"
        class="ft112"
      >
        Form 114 may&#160;
      </p>
      <p
        style="position:absolute;top:1073px;left:54px;white-space:nowrap"
        class="ft112"
      >
        result in&#160;
      </p>
      <p
        style="position:absolute;top:1086px;left:54px;white-space:nowrap"
        class="ft112"
      >
        substantial&#160;
      </p>
      <p
        style="position:absolute;top:1100px;left:54px;white-space:nowrap"
        class="ft112"
      >
        penalties. See&#160;
      </p>
      <p
        style="position:absolute;top:1113px;left:54px;white-space:nowrap"
        class="ft112"
      >
        instructions.
      </p>
      <p
        style="position:absolute;top:920px;left:151px;white-space:nowrap"
        class="ft114"
      >
        You must complete this part if you&#160;
      </p>
      <p
        style="position:absolute;top:919px;left:362px;white-space:nowrap"
        class="ft113"
      >
        <b>(a)</b>&#160;had over $1,500 of taxable interest or ordinary
        dividends;&#160;<b>(b)</b>&#160;had a&#160;
      </p>
      <p
        style="position:absolute;top:936px;left:151px;white-space:nowrap"
        class="ft114"
      >
        foreign account; or&#160;
      </p>
      <p
        style="position:absolute;top:935px;left:269px;white-space:nowrap"
        class="ft113"
      >
        <b>(c)</b>&#160;received a distribution from, or were a grantor of, or a
        transferor to, a foreign trust.&#160;
      </p>
      <p
        style="position:absolute;top:929px;left:803px;white-space:nowrap"
        class="ft113"
      >
        <b>Yes&#160;&#160;&#160;&#160;No</b>
      </p>
      <label
        style="position:absolute;top:991px;left:810px;"
        class="checkbox-container"
      >
        <input
          id="ForeignAccountsQuestionInd-0"
          v-model="Irs1040ScheduleB.ForeignAccountsQuestionInd"
          name="ForeignAccountsQuestionInd"
          data-line-number="7a"
          class="no-outline checkbox"
          type="radio"
          value="true"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:991px;left:843px;"
        class="checkbox-container"
      >
        <input
          id="ForeignAccountsQuestionInd-1"
          v-model="Irs1040ScheduleB.ForeignAccountsQuestionInd"
          name="ForeignAccountsQuestionInd"
          data-line-number="7a"
          class="no-outline checkbox"
          type="radio"
          value="false"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:959px;left:165px;white-space:nowrap"
        class="ft113"
      >
        <b>7&#160;</b>
      </p>
      <p
        style="position:absolute;top:975px;left:173px;white-space:nowrap"
        class="ft117"
      >
        <b>&#160;<br />&#160;</b>
      </p>
      <p
        style="position:absolute;top:959px;left:173px;white-space:nowrap"
        class="ft117"
      >
        <b>a&#160;<br />&#160;&#160;</b>
      </p>
      <p
        style="position:absolute;top:959px;left:194px;white-space:nowrap"
        class="ft118"
      >
        At&#160;any&#160;time&#160;during&#160;2019,&#160;did&#160;you&#160;have&#160;a&#160;financial&#160;interest&#160;in&#160;or&#160;signature&#160;authority&#160;over&#160;a&#160;financial<br />account&#160;(such&#160;as&#160;a&#160;bank&#160;account,&#160;securities&#160;account,&#160;or&#160;brokerage&#160;account)&#160;located&#160;in&#160;a&#160;foreign<br />country?
        See
        instructions&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.<br />If&#160;&#160;“Yes,”&#160;&#160;are&#160;&#160;you&#160;&#160;required&#160;&#160;to&#160;&#160;file&#160;&#160;FinCEN&#160;&#160;Form&#160;&#160;114,&#160;&#160;Report&#160;&#160;of&#160;&#160;Foreign&#160;&#160;Bank&#160;&#160;and&#160;&#160;Financial<br />Accounts&#160;&#160;(FBAR),&#160;&#160;to&#160;&#160;report&#160;&#160;that&#160;&#160;financial&#160;&#160;interest&#160;&#160;or&#160;&#160;signature&#160;&#160;authority?&#160;&#160;See&#160;&#160;FinCEN&#160;&#160;Form&#160;&#160;114<br />and&#160;its&#160;instructions&#160;for&#160;filing&#160;requirements&#160;and&#160;exceptions&#160;to&#160;those&#160;requirements&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:1065px;left:173px;white-space:nowrap"
        class="ft117"
      >
        <b>b&#160;<br />&#160;</b>
      </p>
      <label
        style="position:absolute;top:1044px;left:810px;"
        class="checkbox-container"
      >
        <input
          id="FinCENForm114Ind-0"
          v-model="Irs1040ScheduleB.FinCENForm114Ind"
          name="FinCENForm114Ind"
          data-line-number="7a"
          class="no-outline checkbox"
          type="radio"
          value="true"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:1044px;left:843px;"
        class="checkbox-container"
      >
        <input
          id="FinCENForm114Ind-1"
          v-model="Irs1040ScheduleB.FinCENForm114Ind"
          name="FinCENForm114Ind"
          data-line-number="7a"
          class="no-outline checkbox"
          type="radio"
          value="false"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:1065px;left:194px;white-space:nowrap"
        class="ft118"
      >
        If&#160;&#160;you&#160;&#160;are&#160;&#160;required&#160;&#160;to&#160;&#160;file&#160;&#160;FinCEN&#160;&#160;Form&#160;&#160;114,&#160;&#160;enter&#160;&#160;the&#160;&#160;name&#160;&#160;of&#160;&#160;the&#160;&#160;foreign&#160;&#160;country&#160;&#160;where&#160;&#160;the&#160;<br />financial
        account is located &#160;▶
      </p>
      <div class="input-area" style="position:absolute;top:1081px;left:379px">
        <input
          id="ForeignCountryCd"
          v-model="Irs1040ScheduleB.ForeignCountryCd"
          name="ForeignCountryCd"
          class="no-outline"
          data-line-number="7b"
          type="text"
          style="width:412px;height:16px"
        />
      </div>
      <p
        style="position:absolute;top:1100px;left:165px;white-space:nowrap"
        class="ft113"
      >
        <b>8&#160;</b>
      </p>
      <label
        style="position:absolute;top:1117px;left:810px;"
        class="checkbox-container"
      >
        <input
          id="ForeignTrustQuestionInd-0"
          v-model="Irs1040ScheduleB.ForeignTrustQuestionInd"
          name="ForeignTrustQuestionInd"
          data-line-number="8"
          class="no-outline checkbox"
          type="radio"
          value="true"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:1117px;left:843px;"
        class="checkbox-container"
      >
        <input
          id="ForeignTrustQuestionInd-1"
          v-model="Irs1040ScheduleB.ForeignTrustQuestionInd"
          name="ForeignTrustQuestionInd"
          data-line-number="8"
          class="no-outline checkbox"
          type="radio"
          value="false"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:1116px;left:173px;white-space:nowrap"
        class="ft113"
      >
        <b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:1100px;left:194px;white-space:nowrap"
        class="ft118"
      >
        During&#160;&#160;2019,&#160;&#160;did&#160;&#160;you&#160;&#160;receive&#160;&#160;a&#160;&#160;distribution&#160;&#160;from,&#160;&#160;or&#160;&#160;were&#160;&#160;you&#160;&#160;the&#160;&#160;grantor&#160;&#160;of,&#160;&#160;or&#160;&#160;transferor&#160;&#160;to,&#160;&#160;a&#160;<br />foreign
        trust? If “Yes,” you may have to file Form 3520. See
        instructions&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:1137px;left:54px;white-space:nowrap"
        class="ft11"
      >
        <b
          >XOB For Paperwork Reduction Act Notice, see your tax return
          instructions.&#160;</b
        >
      </p>
      <p
        style="position:absolute;top:1139px;left:501px;white-space:nowrap"
        class="ft12"
      >
        Cat. No. 0000/1736&#160;
      </p>
      <p
        style="position:absolute;top:1137px;left:632px;white-space:nowrap"
        class="ft11"
      >
        <b>Schedule B (Form 1040 or 1040-SR) 2019&#160;</b>
      </p>
    </div>
  </div>
</template>
<script>
import MoneyInput from '~/components/Currency/MoneyInput'
import { formService } from '~/services/form-service'
import { IRS1040_UPDATED, SCHEDULEB_UPDATED } from '~/events/event'
export default {
  components: { MoneyInput },
  data() {
    return {
      Irs1040ScheduleB: {}
    }
  },
  mounted() {
    this.Irs1040ScheduleB.name =
      this.$store.state.attachments.Irs1040.firstName +
      ' ' +
      this.$store.state.attachments.Irs1040.lastName
    this.Irs1040ScheduleB.ssn = this.$store.state.attachments.Irs1040.ssn
    formService.$on(IRS1040_UPDATED, (data) => {
      this.Irs1040ScheduleB.ssn = data.ssn
      this.Irs1040ScheduleB.name = data.firstName + ' ' + data.lastName
      this.$forceUpdate()
    })
  },
  methods: {
    IrsScheduleBUpdated() {
      formService.$emit(SCHEDULEB_UPDATED, this.Irs1040ScheduleB)
    }
  }
}
</script>
<style scoped>
@import '@/assets/styles/form.css';
#page1-div {
  background-image: url('../../static/form-assets/scheduleb.png');
}

.year {
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
</style>
