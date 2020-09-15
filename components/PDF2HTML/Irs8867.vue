<template>
  <!-- ==================== IRS Form 8867 ==================== -->
  <div
    id="pdf-pages"
    style="font-size: 11px;
    font-family: QuickType, Arial, Helvetica, sans-serif"
  >
    <div id="page1-div" style="position:relative;width:917px;height:1187px;">
      <!-- <img
        width="917"
        height="1187"
        src="irs8867001.png"
        alt="background image"
      /> -->
      <p
        style="position:absolute;top:70px;left:54px;white-space:nowrap"
        class="ft10"
      >
        Form &#160;
      </p>
      <p
        style="position:absolute;top:45px;left:84px;white-space:nowrap;font-size:33px"
        class="ft11"
      >
        <b>8867</b>
      </p>
      <p
        style="position:absolute;top:98px;left:54px;white-space:nowrap"
        class="ft10"
      >
        Department of the Treasury &#160;
      </p>
      <p
        style="position:absolute;top:109px;left:54px;white-space:nowrap"
        class="ft10"
      >
        Internal Revenue Service&#160;
      </p>
      <p
        style="position:absolute;top:49px;left:271px;white-space:nowrap;font-size:22px;"
        class="ft12"
      >
        <strong>Paid Preparer’s Due Diligence Checklist</strong>
      </p>
      <p
        style="position:absolute;top:71px;left:192px;white-space:nowrap;font-size:10px;letter-spacing:-0.2px"
        class="ft13"
      >
        <i
          >Earned Income Credit (EIC), American Opportunity Tax Credit (AOTC),
          Child Tax Credit (CTC) (including the Additional&#160;</i
        >
      </p>
      <p
        style="position:absolute;top:84px;left:211px;white-space:nowrap;font-size:10px;letter-spacing:-0.1px"
        class="ft13"
      >
        <i
          >Child Tax Credit (ACTC) and Credit for Other Dependents (ODC)), and
          Head of Household (HOH) Filing Status</i
        >
      </p>
      <p
        style="position:absolute;top:100px;left:188px;white-space:nowrap"
        class="ft14"
      >
        ▶&#160;
      </p>
      <p
        style="position:absolute;top:97px;left:199px;white-space:nowrap"
        class="ft15"
      >
        <b
          >To be completed by preparer and filed with Form 1040, 1040-SR,
          1040-NR, 1040-PR, or 1040-SS.</b
        >&#160;
      </p>
      <p
        style="position:absolute;top:113px;left:247px;white-space:nowrap"
        class="ft14"
      >
        ▶
      </p>
      <p
        style="position:absolute;top:110px;left:256px;white-space:nowrap"
        class="ft15"
      >
        <b>&#160;Go to&#160;<i>www.irs.gov/Form8867</i></b
        ><b>&#160;for instructions and the latest information.</b>
      </p>
      <p
        style="position:absolute;top:55px;left:750px;white-space:nowrap"
        class="ft10"
      >
        OMB No. 1545-1736
      </p>
      <p
        style="position:absolute;top:68px;left:760px;white-space:nowrap;font-size: 32px;"
        class="ft17"
      >
        <strong><span class="year">20</span>19</strong>
      </p>
      <p
        style="position:absolute;top:102px;left:751px;white-space:nowrap"
        class="ft10"
      >
        Attachment&#160;
      </p>
      <p
        style="position:absolute;top:111px;left:751px;white-space:nowrap"
        class="ft10"
      >
        Sequence No.&#160;
      </p>
      <p
        style="position:absolute;top:110px;left:821px;white-space:nowrap"
        class="ft18"
      >
        <b>70&#160;</b>
      </p>
      <p
        style="position:absolute;top:126px;left:54px;white-space:nowrap"
        class="ft10"
      >
        Taxpayer name(s) shown on return
      </p>
      <div class="input-area" style="position:absolute;top:142px;left:54px">
        <input
          id="PreparerPersonNm"
          v-model="Irs8867.PreparerPersonNm"
          v-uppercase
          name="PreparerPersonNm"
          class="no-outline"
          type="text"
          readonly
          style="width:593px;"
        />
      </div>
      <p
        style="position:absolute;top:126px;left:654px;white-space:nowrap"
        class="ft19"
      >
        <b>Taxpayer identification number</b>
      </p>
      <div class="input-area" style="position:absolute;top:142px;left:649px">
        <input
          id="ssn"
          v-model="Irs8867.ssn"
          v-mask="'###-##-####'"
          name="ssn"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          class="no-outline"
          type="password"
          readonly
          style="width:216px;"
        />
      </div>
      <p
        style="position:absolute;top:163px;left:54px;white-space:nowrap"
        class="ft10"
      >
        Enter preparer’s name and PTIN
      </p>
      <div class="input-area" style="position:absolute;top:177px;left:54px">
        <input
          id="PTIN"
          v-model="Irs8867.PTIN"
          v-mask="'P########'"
          name="PTIN"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          class="no-outline"
          type="password"
          readonly
          style="width:812px;"
        />
      </div>
      <p
        style="position:absolute;top:198px;left:62px;white-space:nowrap;color:white;font-size:12px;"
        class="ft110"
      >
        <b>Part I&#160;</b>
      </p>
      <p
        style="position:absolute;top:199px;left:129px;white-space:nowrap"
        class="ft111"
      >
        <b>Due Diligence Requirements</b>
      </p>
      <p
        style="position:absolute;top:216px;left:54px;white-space:nowrap"
        class="ft113"
      >
        Please&#160;check&#160;the&#160;appropriate&#160;box&#160;for&#160;the&#160;credit(s)&#160;and/or&#160;HOH&#160;filing&#160;status&#160;claimed&#160;on&#160;the&#160;return&#160;and&#160;complete&#160;the&#160;related&#160;Parts&#160;I–V&#160;<br />for
        the benefit(s) claimed (check all that apply).&#160;
      </p>
      <p
        style="position:absolute;top:235px;left:518px;white-space:nowrap"
        class="ft112"
      >
        EIC
      </p>
      <label
        style="position:absolute;top:236px;left:496px;"
        class="checkbox-container"
      >
        <input
          id="EICClaimedInd"
          v-model="Irs8867.EICClaimedInd"
          name="EICClaimedInd"
          data-line-number=""
          class="no-outline checkbox"
          type="checkbox"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:235px;left:562px;"
        class="checkbox-container"
      >
        <input
          id="CTCACTCODCClaimedInd"
          v-model="Irs8867.CTCACTCODCClaimedInd"
          name="CTCACTCODCClaimedInd"
          data-line-number=""
          class="no-outline checkbox"
          type="checkbox"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:235px;left:703px;"
        class="checkbox-container"
      >
        <input
          id="AOTCClaimedInd"
          v-model="Irs8867.AOTCClaimedInd"
          name="AOTCClaimedInd"
          data-line-number=""
          class="no-outline checkbox"
          type="checkbox"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:235px;left:789px;"
        class="checkbox-container"
      >
        <input
          id="HOHFilingStatusInd"
          v-model="Irs8867.HOHFilingStatusInd"
          name="HOHFilingStatusInd"
          data-line-number=""
          class="no-outline checkbox"
          type="checkbox"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:235px;left:583px;white-space:nowrap"
        class="ft112"
      >
        CTC/ACTC/ODC
      </p>
      <p
        style="position:absolute;top:235px;left:724px;white-space:nowrap"
        class="ft112"
      >
        AOTC
      </p>
      <p
        style="position:absolute;top:235px;left:810px;white-space:nowrap"
        class="ft112"
      >
        HOH
      </p>
      <p
        style="position:absolute;top:254px;left:745px;white-space:nowrap"
        class="ft15"
      >
        <b>Yes&#160;</b>
      </p>
      <label
        style="position:absolute;top:271px;left:751px;"
        class="checkbox-container"
      >
        <input
          id="TxpyrProvidedOrObtainedInfoInd"
          v-model="Irs8867.TxpyrProvidedOrObtainedInfoInd"
          name="TxpyrProvidedOrObtainedInfoInd"
          data-line-number="1"
          class="no-outline checkbox"
          type="radio"
          value="true"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:271px;left:794px;"
        class="checkbox-container"
      >
        <input
          id="TxpyrProvidedOrObtainedInfoInd"
          v-model="Irs8867.TxpyrProvidedOrObtainedInfoInd"
          name="TxpyrProvidedOrObtainedInfoInd"
          data-line-number="1"
          class="no-outline checkbox"
          type="radio"
          value="false"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:254px;left:791px;white-space:nowrap"
        class="ft15"
      >
        <b>No&#160;</b>
      </p>
      <p
        style="position:absolute;top:254px;left:831px;white-space:nowrap"
        class="ft15"
      >
        <b>N/A</b>
      </p>
      <p
        style="position:absolute;top:251px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>1</b>
      </p>
      <p
        style="position:absolute;top:252px;left:97px;white-space:nowrap"
        class="ft113"
      >
        Did&#160;&#160;you&#160;&#160;complete&#160;&#160;the&#160;&#160;return&#160;&#160;based&#160;&#160;on&#160;&#160;information&#160;&#160;for&#160;&#160;tax&#160;&#160;year&#160;&#160;2019&#160;&#160;provided&#160;&#160;by&#160;&#160;the&#160;&#160;taxpayer&#160;&#160;or&#160;<br />reasonably
        obtained by
        you?&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:290px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>2</b>
      </p>
      <label
        style="position:absolute;top:343px;left:751px;"
        class="checkbox-container"
      >
        <input
          id="CompleteApplicableWorksheetCd"
          v-model="Irs8867.CompleteApplicableWorksheetCd"
          name="CompleteApplicableWorksheetCd"
          data-line-number="2"
          class="no-outline checkbox"
          type="radio"
          value="YES"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:343px;left:794px;"
        class="checkbox-container"
      >
        <input
          id="CompleteApplicableWorksheetCd"
          v-model="Irs8867.CompleteApplicableWorksheetCd"
          name="CompleteApplicableWorksheetCd"
          data-line-number="2"
          class="no-outline checkbox"
          type="radio"
          value="NO"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:343px;left:838px;"
        class="checkbox-container"
      >
        <input
          id="CompleteApplicableWorksheetCd"
          v-model="Irs8867.CompleteApplicableWorksheetCd"
          name="CompleteApplicableWorksheetCd"
          data-line-number="2"
          class="no-outline checkbox"
          type="radio"
          value="N/A"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:291px;left:97px;white-space:nowrap"
        class="ft113"
      >
        If&#160;&#160;credits&#160;&#160;are&#160;&#160;claimed&#160;&#160;on&#160;&#160;the&#160;&#160;return,&#160;&#160;did&#160;&#160;you&#160;&#160;complete&#160;&#160;the&#160;&#160;applicable&#160;&#160;EIC&#160;&#160;and/or&#160;&#160;CTC/ACTC/ODC&#160;<br />worksheets&#160;found&#160;in&#160;the&#160;Form&#160;1040,&#160;1040-SR,&#160;1040-NR,&#160;1040-PR,&#160;or&#160;1040-SS&#160;instructions,&#160;and/or&#160;the<br />AOTC&#160;worksheet&#160;found&#160;in&#160;the&#160;Form&#160;8863&#160;instructions,&#160;or&#160;your&#160;own&#160;worksheet(s)&#160;that&#160;provides&#160;the&#160;same<br />information,
        and all related forms and schedules for each credit claimed?&#160;
      </p>
      <p
        style="position:absolute;top:341px;left:558px;white-space:nowrap"
        class="ft112"
      >
        .&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:359px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>3</b>
      </p>
      <label
        style="position:absolute;top:452px;left:751px;"
        class="checkbox-container"
      >
        <input
          id="SatisfyKnowledgeRequirementInd"
          v-model="Irs8867.SatisfyKnowledgeRequirementInd"
          name="SatisfyKnowledgeRequirementInd"
          data-line-number="3"
          class="no-outline checkbox"
          type="radio"
          value="true"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:452px;left:794px;"
        class="checkbox-container"
      >
        <input
          id="SatisfyKnowledgeRequirementInd"
          v-model="Irs8867.SatisfyKnowledgeRequirementInd"
          name="SatisfyKnowledgeRequirementInd"
          data-line-number="3"
          class="no-outline checkbox"
          type="radio"
          value="false"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:360px;left:97px;white-space:nowrap"
        class="ft114"
      >
        Did&#160;you&#160;satisfy&#160;the&#160;knowledge&#160;requirement?&#160;To&#160;meet&#160;the&#160;knowledge&#160;requirement,&#160;you&#160;must&#160;do&#160;both&#160;of<br />the
        following.<br />•&#160;Interview&#160;the&#160;taxpayer,&#160;ask&#160;questions,&#160;and&#160;contemporaneously&#160;document&#160;the&#160;taxpayer’s&#160;responses&#160;to&#160;
      </p>
      <p
        style="position:absolute;top:413px;left:109px;white-space:nowrap"
        class="ft112"
      >
        determine that the taxpayer is eligible to claim the credit(s) and/or
        HOH filing status.
      </p>
      <p
        style="position:absolute;top:432px;left:97px;white-space:nowrap"
        class="ft112"
      >
        •&#160;Review&#160;information&#160;to&#160;determine&#160;that&#160;the&#160;taxpayer&#160;is&#160;eligible&#160;to&#160;claim&#160;the&#160;credit(s)&#160;and/or&#160;HOH&#160;filing&#160;
      </p>
      <p
        style="position:absolute;top:449px;left:109px;white-space:nowrap"
        class="ft112"
      >
        status and to compute the amount(s) of any
        credit(s)&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:469px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>4</b>
      </p>
      <label
        style="position:absolute;top:506px;left:751px;"
        class="checkbox-container"
      >
        <input
          id="IncorIncmplInconInfoInd"
          v-model="Irs8867.IncorIncmplInconInfoInd"
          name="IncorIncmplInconInfoInd"
          data-line-number="4"
          class="no-outline checkbox"
          type="radio"
          value="true"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:506px;left:794px;"
        class="checkbox-container"
      >
        <input
          id="IncorIncmplInconInfoInd"
          v-model="Irs8867.IncorIncmplInconInfoInd"
          name="IncorIncmplInconInfoInd"
          data-line-number="4"
          class="no-outline checkbox"
          type="radio"
          value="false"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:470px;left:97px;white-space:nowrap"
        class="ft113"
      >
        Did&#160;&#160;any&#160;&#160;information&#160;&#160;provided&#160;&#160;by&#160;&#160;the&#160;&#160;taxpayer&#160;&#160;or&#160;&#160;a&#160;&#160;third&#160;&#160;party&#160;&#160;for&#160;&#160;use&#160;&#160;in&#160;&#160;preparing&#160;&#160;the&#160;&#160;return,&#160;&#160;or&#160;<br />information&#160;&#160;reasonably&#160;&#160;known&#160;&#160;to&#160;&#160;you,&#160;&#160;appear&#160;&#160;to&#160;&#160;be&#160;&#160;incorrect,&#160;&#160;incomplete,&#160;&#160;or&#160;&#160;inconsistent?&#160;&#160;(If&#160;&#160;“Yes,”<br />answer
        questions 4a and 4b. If “No,” go &#160;to question
        5.)&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <label
        style="position:absolute;top:523px;left:751px;"
        class="checkbox-container"
      >
        <input
          id="MakeInquiryInd"
          v-model="Irs8867.MakeInquiryInd"
          name="MakeInquiryInd"
          data-line-number="4a"
          class="no-outline checkbox"
          type="radio"
          value="true"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:523px;left:794px;"
        class="checkbox-container"
      >
        <input
          id="MakeInquiryInd"
          v-model="Irs8867.MakeInquiryInd"
          name="MakeInquiryInd"
          data-line-number="4a"
          class="no-outline checkbox"
          type="radio"
          value="false"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:523px;left:76px;white-space:nowrap"
        class="ft115"
      >
        <b>a&#160;</b>Did you make reasonable inquiries to determine the
        correct, complete, and consistent information?&#160;&#160;.<br /><b
          >b&#160;</b
        >Did&#160;&#160;you&#160;&#160;contemporaneously&#160;&#160;document&#160;&#160;your&#160;&#160;inquiries?&#160;&#160;(Documentation&#160;&#160;should&#160;&#160;include&#160;&#160;the&#160;&#160;questions
      </p>
      <p
        style="position:absolute;top:558px;left:97px;white-space:nowrap"
        class="ft113"
      >
        you&#160;asked,&#160;whom&#160;you&#160;asked,&#160;when&#160;you&#160;asked,&#160;the&#160;information&#160;that&#160;was&#160;provided,&#160;and&#160;the&#160;impact&#160;the<br />information
        had on your preparation of the
        return.)&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <label
        style="position:absolute;top:578px;left:751px;"
        class="checkbox-container"
      >
        <input
          id="DocumentInquiryInd"
          v-model="Irs8867.DocumentInquiryInd"
          name="DocumentInquiryInd"
          data-line-number="4b"
          class="no-outline checkbox"
          type="radio"
          value="true"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:578px;left:794px;"
        class="checkbox-container"
      >
        <input
          id="DocumentInquiryInd"
          v-model="Irs8867.DocumentInquiryInd"
          name="DocumentInquiryInd"
          data-line-number="4b"
          class="no-outline checkbox"
          type="radio"
          value="false"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:599px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>5</b>
      </p>
      <p
        style="position:absolute;top:600px;left:97px;white-space:nowrap"
        class="ft116"
      >
        Did&#160;you&#160;satisfy&#160;the&#160;record&#160;retention&#160;requirement?&#160;To&#160;meet&#160;the&#160;record&#160;retention&#160;requirement,&#160;you&#160;must&#160;<br />keep&#160;&#160;a&#160;&#160;copy&#160;&#160;of&#160;&#160;your&#160;&#160;documentation&#160;&#160;referenced&#160;&#160;in&#160;&#160;4b,&#160;&#160;a&#160;&#160;copy&#160;&#160;of&#160;&#160;this&#160;&#160;Form&#160;&#160;8867,&#160;&#160;a&#160;&#160;copy&#160;&#160;of&#160;&#160;any<br />applicable&#160;worksheet(s),&#160;a&#160;record&#160;of&#160;how,&#160;when,&#160;and&#160;from&#160;whom&#160;the&#160;information&#160;used&#160;to&#160;prepare&#160;Form<br />8867&#160;and&#160;any&#160;applicable&#160;worksheet(s)&#160;was&#160;obtained,&#160;and&#160;a&#160;copy&#160;of&#160;any&#160;document(s)&#160;provided&#160;by&#160;the<br />taxpayer&#160;&#160;that&#160;&#160;you&#160;&#160;relied&#160;&#160;on&#160;&#160;to&#160;&#160;determine&#160;&#160;eligibility&#160;&#160;for&#160;&#160;the&#160;&#160;credit(s)&#160;&#160;and/or&#160;&#160;HOH&#160;&#160;filing&#160;&#160;status&#160;&#160;or&#160;&#160;to&#160;<br />compute
        the amount(s) of the credit(s)
        &#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.<br />List
        those documents, if any, that you relied on.
      </p>
      <label
        style="position:absolute;top:686px;left:751px;"
        class="checkbox-container"
      >
        <input
          id="SatisfyRecordRetentionRqrInd"
          v-model="Irs8867.SatisfyRecordRetentionRqrInd"
          name="SatisfyRecordRetentionRqrInd"
          data-line-number="5"
          class="no-outline checkbox"
          type="radio"
          value="true"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:686px;left:794px;"
        class="checkbox-container"
      >
        <input
          id="SatisfyRecordRetentionRqrInd"
          v-model="Irs8867.SatisfyRecordRetentionRqrInd"
          name="SatisfyRecordRetentionRqrInd"
          data-line-number="5"
          class="no-outline checkbox"
          type="radio"
          value="false"
        />
        <span class="checkmark"></span>
      </label>
      <div class="input-area" style="position:absolute;top:737px;left:96px">
        <input
          id="WorkPaperDocumentNm"
          v-model="Irs8867.WorkPaperDocumentNm"
          v-uppercase
          name="WorkPaperDocumentNm"
          class="no-outline"
          type="text"
          style="width:628px;"
        />
      </div>
      <p
        style="position:absolute;top:793px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>6</b>
      </p>
      <label
        style="position:absolute;top:829px;left:751px;"
        class="checkbox-container"
      >
        <input
          id="SubstantiateCrEligibilityInd"
          v-model="Irs8867.SubstantiateCrEligibilityInd"
          name="SubstantiateCrEligibilityInd"
          data-line-number="6"
          class="no-outline checkbox"
          type="radio"
          value="true"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:829px;left:794px;"
        class="checkbox-container"
      >
        <input
          id="SubstantiateCrEligibilityInd"
          v-model="Irs8867.SubstantiateCrEligibilityInd"
          name="SubstantiateCrEligibilityInd"
          data-line-number="6"
          class="no-outline checkbox"
          type="radio"
          value="false"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:794px;left:97px;white-space:nowrap"
        class="ft113"
      >
        Did&#160;you&#160;ask&#160;the&#160;taxpayer&#160;whether&#160;he/she&#160;could&#160;provide&#160;documentation&#160;to&#160;substantiate&#160;eligibility&#160;for&#160;the<br />credit(s)&#160;&#160;and/or&#160;&#160;HOH&#160;&#160;filing&#160;&#160;status&#160;&#160;and&#160;&#160;the&#160;&#160;amount(s)&#160;&#160;of&#160;&#160;any&#160;&#160;credit(s)&#160;&#160;claimed&#160;&#160;on&#160;&#160;the&#160;&#160;return&#160;&#160;if&#160;&#160;his/her&#160;<br />return
        is selected for
        audit?&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:847px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>7</b>
      </p>
      <label
        style="position:absolute;top:848px;left:751px;"
        class="checkbox-container"
      >
        <input
          id="PrevDisallowedOrReducedCrCd"
          v-model="Irs8867.PrevDisallowedOrReducedCrCd"
          name="PrevDisallowedOrReducedCrCd"
          data-line-number="7"
          class="no-outline checkbox"
          type="radio"
          value="YES"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:848px;left:794px;"
        class="checkbox-container"
      >
        <input
          id="PrevDisallowedOrReducedCrCd2"
          v-model="Irs8867.PrevDisallowedOrReducedCrCd"
          name="PrevDisallowedOrReducedCrCd"
          data-line-number="7"
          class="no-outline checkbox"
          type="radio"
          value="NO"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:848px;left:838px;"
        class="checkbox-container"
      >
        <input
          id="PrevDisallowedOrReducedCrCd3"
          v-model="Irs8867.PrevDisallowedOrReducedCrCd"
          name="PrevDisallowedOrReducedCrCd"
          data-line-number="7"
          class="no-outline checkbox"
          type="radio"
          value="N/A"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:847px;left:97px;white-space:nowrap"
        class="ft117"
      >
        Did you ask the taxpayer if any of these credits were disallowed or
        reduced in a previous year?&#160;&#160;.&#160;.<br />(If credits were
        disallowed or reduced, go to question 7a; if not, go to question 8.)
      </p>
      <p
        style="position:absolute;top:882px;left:76px;white-space:nowrap"
        class="ft111"
      >
        <b>a&#160;</b>Did you complete the required recertification Form
        8862?&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <label
        style="position:absolute;top:884px;left:751px;"
        class="checkbox-container"
      >
        <input
          id="CompleteRequiredRecertFormCd"
          v-model="Irs8867.CompleteRequiredRecertFormCd"
          name="CompleteRequiredRecertFormCd"
          data-line-number="7a"
          class="no-outline checkbox"
          type="radio"
          value="YES"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:884px;left:794px;"
        class="checkbox-container"
      >
        <input
          id="CompleteRequiredRecertFormCd2"
          v-model="Irs8867.CompleteRequiredRecertFormCd"
          name="CompleteRequiredRecertFormCd"
          data-line-number="7a"
          class="no-outline checkbox"
          type="radio"
          value="NO"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:884px;left:838px;"
        class="checkbox-container"
      >
        <input
          id="CompleteRequiredRecertFormCd3"
          v-model="Irs8867.CompleteRequiredRecertFormCd"
          name="CompleteRequiredRecertFormCd"
          data-line-number="7a"
          class="no-outline checkbox"
          type="radio"
          value="N/A"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:899px;left:68px;white-space:nowrap"
        class="ft111"
      >
        <b>8</b>
      </p>
      <label
        style="position:absolute;top:919px;left:751px;"
        class="checkbox-container"
      >
        <input
          id="QstnToCompleteCorrectSchCCd"
          v-model="Irs8867.QstnToCompleteCorrectSchCCd"
          name="QstnToCompleteCorrectSchCCd"
          data-line-number="8"
          class="no-outline checkbox"
          type="radio"
          value="YES"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:919px;left:794px;"
        class="checkbox-container"
      >
        <input
          id="QstnToCompleteCorrectSchCCd2"
          v-model="Irs8867.QstnToCompleteCorrectSchCCd"
          name="QstnToCompleteCorrectSchCCd"
          data-line-number="8"
          class="no-outline checkbox"
          type="radio"
          value="NO"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:919px;left:838px;"
        class="checkbox-container"
      >
        <input
          id="QstnToCompleteCorrectSchCCd3"
          v-model="Irs8867.QstnToCompleteCorrectSchCCd"
          name="QstnToCompleteCorrectSchCCd"
          data-line-number="8"
          class="no-outline checkbox"
          type="radio"
          value="N/A"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:900px;left:97px;white-space:nowrap"
        class="ft113"
      >
        If&#160;the&#160;taxpayer&#160;is&#160;reporting&#160;self-employment&#160;income,&#160;did&#160;you&#160;ask&#160;questions&#160;to&#160;prepare&#160;a&#160;complete&#160;and&#160;<br />correct
        Schedule C (Form 1040 or
        1040-SR)?&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:939px;left:54px;white-space:nowrap"
        class="ft15"
      >
        <b
          >XOB For Paperwork Reduction Act Notice, see separate
          instructions.&#160;</b
        >
      </p>
      <p
        style="position:absolute;top:941px;left:555px;white-space:nowrap"
        class="ft10"
      >
        Cat. No. 0000/1736
      </p>
      <p
        style="position:absolute;top:940px;left:770px;white-space:nowrap"
        class="ft10"
      >
        Form
      </p>
      <p
        style="position:absolute;top:935px;left:795px;white-space:nowrap"
        class="ft18"
      >
        <b>&#160;8867</b>&#160;(2019)&#160;
      </p>
    </div>
    <div id="page2-div" style="position:relative;width:917px;height:1187px;">
      <img
        width="917"
        height="1187"
        src="irs8867002.png"
        alt="background image"
      />
      <p
        style="position:absolute;top:37px;left:54px;white-space:nowrap"
        class="ft20"
      >
        Form 8867 (2019)
      </p>
      <p
        style="position:absolute;top:38px;left:829px;white-space:nowrap"
        class="ft20"
      >
        Page&#160;
      </p>
      <p
        style="position:absolute;top:34px;left:856px;white-space:nowrap"
        class="ft21"
      >
        <b>2&#160;</b>
      </p>
      <p
        style="position:absolute;top:53px;left:60px;white-space:nowrap;color:white;font-size:12px"
        class="ft22"
      >
        <b>Part II</b>
      </p>
      <p
        style="position:absolute;top:55px;left:129px;white-space:nowrap"
        class="ft23"
      >
        <b>Due Diligence Questions for Returns Claiming EIC&#160;</b>(If the
        return does not claim EIC, go to Part III.)
      </p>
      <p
        style="position:absolute;top:73px;left:68px;white-space:nowrap"
        class="ft23"
      >
        <b>9a&#160;</b
        >Have&#160;you&#160;determined&#160;that&#160;the&#160;taxpayer&#160;is,&#160;in&#160;fact,&#160;eligible&#160;to&#160;claim&#160;the&#160;EIC&#160;for&#160;the&#160;number&#160;of&#160;qualifying&#160;
      </p>
      <label
        style="position:absolute;top:110px;left:751px;"
        class="checkbox-container"
      >
        <input
          id="EICEligibleClaimQlfyChildInd1"
          v-model="Irs8867.EICEligibleClaimQlfyChildInd"
          name="EICEligibleClaimQlfyChildInd"
          data-line-number="9a"
          class="no-outline checkbox"
          type="radio"
          value="true"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:110px;left:794px;"
        class="checkbox-container"
      >
        <input
          id="EICEligibleClaimQlfyChildInd2"
          v-model="Irs8867.EICEligibleClaimQlfyChildInd"
          name="EICEligibleClaimQlfyChildInd"
          data-line-number="9a"
          class="no-outline checkbox"
          type="radio"
          value="false"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:90px;left:97px;white-space:nowrap"
        class="ft27"
      >
        children&#160;claimed,&#160;or&#160;is&#160;eligible&#160;to&#160;claim&#160;the&#160;EIC&#160;without&#160;a&#160;qualifying&#160;child?&#160;(Skip&#160;9b&#160;and&#160;9c&#160;if&#160;the&#160;taxpayer&#160;<br />is
        claiming the EIC and does not have a qualifying
        child.)&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:74px;left:745px;white-space:nowrap"
        class="ft25"
      >
        <b>Yes&#160;</b>
      </p>
      <p
        style="position:absolute;top:74px;left:791px;white-space:nowrap"
        class="ft25"
      >
        <b>No&#160;</b>
      </p>
      <p
        style="position:absolute;top:74px;left:831px;white-space:nowrap"
        class="ft25"
      >
        <b>N/A</b>
      </p>
      <p
        style="position:absolute;top:125px;left:76px;white-space:nowrap"
        class="ft23"
      >
        <b>b&#160;</b
        >Did&#160;you&#160;ask&#160;the&#160;taxpayer&#160;if&#160;the&#160;child&#160;lived&#160;with&#160;the&#160;taxpayer&#160;for&#160;over&#160;half&#160;of&#160;the&#160;year,&#160;even&#160;if&#160;the&#160;taxpayer&#160;
      </p>
      <label
        style="position:absolute;top:145px;left:751px;"
        class="checkbox-container"
      >
        <input
          id="ExplainLiveWithChldRqrClaimInd1"
          v-model="Irs8867.ExplainLiveWithChldRqrClaimInd"
          name="ExplainLiveWithChldRqrClaimInd"
          data-line-number="9b"
          class="no-outline checkbox"
          type="radio"
          value="true"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:145px;left:794px;"
        class="checkbox-container"
      >
        <input
          id="ExplainLiveWithChldRqrClaimInd2"
          v-model="Irs8867.ExplainLiveWithChldRqrClaimInd"
          name="ExplainLiveWithChldRqrClaimInd"
          data-line-number="9b"
          class="no-outline checkbox"
          type="radio"
          value="false"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:143px;left:97px;white-space:nowrap"
        class="ft24"
      >
        has supported the child the entire
        year?&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:161px;left:76px;white-space:nowrap"
        class="ft23"
      >
        <b>c&#160;</b
        >Did&#160;you&#160;explain&#160;to&#160;the&#160;taxpayer&#160;the&#160;rules&#160;about&#160;claiming&#160;the&#160;EIC&#160;when&#160;a&#160;child&#160;is&#160;the&#160;qualifying&#160;child&#160;of
      </p>
      <label
        style="position:absolute;top:181px;left:751px;"
        class="checkbox-container"
      >
        <input
          id="ExplainTiebreakerRulesCd1"
          v-model="Irs8867.ExplainTiebreakerRulesCd"
          name="ExplainTiebreakerRulesCd"
          data-line-number="9c"
          class="no-outline checkbox"
          type="radio"
          value="YES"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:181px;left:794px;"
        class="checkbox-container"
      >
        <input
          id="ExplainTiebreakerRulesCd2"
          v-model="Irs8867.ExplainTiebreakerRulesCd"
          name="ExplainTiebreakerRulesCd"
          data-line-number="9c"
          class="no-outline checkbox"
          type="radio"
          value="NO"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:181px;left:839px;"
        class="checkbox-container"
      >
        <input
          id="ExplainTiebreakerRulesCd2"
          v-model="Irs8867.ExplainTiebreakerRulesCd"
          name="ExplainTiebreakerRulesCd"
          data-line-number="9c"
          class="no-outline checkbox"
          type="radio"
          value="N/A"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:179px;left:97px;white-space:nowrap"
        class="ft24"
      >
        more than one person (tiebreaker
        rules)?&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:199px;left:57px;white-space:nowrap;color:white;font-size:12px"
        class="ft22"
      >
        <b>Part III</b>
      </p>
      <p
        style="position:absolute;top:199px;left:129px;white-space:nowrap"
        class="ft27"
      >
        <b>Due Diligence Questions for Returns Claiming CTC/ACTC/ODC&#160;</b
        >(If the return does not claim CTC, ACTC, or ODC, go&#160;<br />to Part
        IV.)
      </p>
      <p
        style="position:absolute;top:233px;left:61px;white-space:nowrap"
        class="ft23"
      >
        <b>10</b>
      </p>
      <label
        style="position:absolute;top:254px;left:751px;"
        class="checkbox-container"
      >
        <input
          id="USCitizenOrNationalInd1"
          v-model="Irs8867.USCitizenOrNationalInd"
          name="USCitizenOrNationalInd"
          data-line-number="10"
          class="no-outline checkbox"
          type="radio"
          value="true"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:254px;left:794px;"
        class="checkbox-container"
      >
        <input
          id="USCitizenOrNationalInd2"
          v-model="Irs8867.USCitizenOrNationalInd"
          name="USCitizenOrNationalInd"
          data-line-number="10"
          class="no-outline checkbox"
          type="radio"
          value="false"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:234px;left:97px;white-space:nowrap"
        class="ft27"
      >
        Have&#160;you&#160;determined&#160;that&#160;each&#160;qualifying&#160;person&#160;for&#160;the&#160;CTC/ACTC/ODC&#160;is&#160;the&#160;taxpayer’s&#160;dependent&#160;who&#160;is&#160;<br />a
        citizen, national, or resident of the United
        States?&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:236px;left:745px;white-space:nowrap"
        class="ft25"
      >
        <b>Yes&#160;</b>
      </p>
      <p
        style="position:absolute;top:236px;left:791px;white-space:nowrap"
        class="ft25"
      >
        <b>No&#160;</b>
      </p>
      <p
        style="position:absolute;top:236px;left:831px;white-space:nowrap"
        class="ft25"
      >
        <b>N/A</b>
      </p>
      <p
        style="position:absolute;top:271px;left:61px;white-space:nowrap"
        class="ft23"
      >
        <b>11</b>
      </p>
      <label
        style="position:absolute;top:307px;left:751px;"
        class="checkbox-container"
      >
        <input
          id="ExplainLiveWithChldRqrClaimCd1"
          v-model="Irs8867.ExplainLiveWithChldRqrClaimCd"
          name="ExplainLiveWithChldRqrClaimCd"
          data-line-number="11"
          class="no-outline checkbox"
          type="radio"
          value="YES"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:307px;left:794px;"
        class="checkbox-container"
      >
        <input
          id="ExplainLiveWithChldRqrClaimCd2"
          v-model="Irs8867.ExplainLiveWithChldRqrClaimCd"
          name="ExplainLiveWithChldRqrClaimCd"
          data-line-number="11"
          class="no-outline checkbox"
          type="radio"
          value="NO"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:307px;left:838px;"
        class="checkbox-container"
      >
        <input
          id="ExplainLiveWithChldRqrClaimCd3"
          v-model="Irs8867.ExplainLiveWithChldRqrClaimCd"
          name="ExplainLiveWithChldRqrClaimCd"
          data-line-number="11"
          class="no-outline checkbox"
          type="radio"
          value="N/A"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:272px;left:97px;white-space:nowrap"
        class="ft27"
      >
        Did&#160;you&#160;explain&#160;to&#160;the&#160;taxpayer&#160;that&#160;he/she&#160;may&#160;not&#160;claim&#160;the&#160;CTC/ACTC&#160;if&#160;the&#160;taxpayer&#160;has&#160;not&#160;lived<br />with&#160;the&#160;child&#160;for&#160;over&#160;half&#160;of&#160;the&#160;year,&#160;even&#160;if&#160;the&#160;taxpayer&#160;has&#160;supported&#160;the&#160;child,&#160;unless&#160;the&#160;child’s&#160;<br />custodial
        parent has released a claim to exemption for the child?
        &#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:325px;left:61px;white-space:nowrap"
        class="ft23"
      >
        <b>12</b>
      </p>
      <label
        style="position:absolute;top:361px;left:751px;"
        class="checkbox-container"
      >
        <input
          id="ExplainRuleClmCrDivPrnts8332Cd1"
          v-model="Irs8867.ExplainRuleClmCrDivPrnts8332Cd"
          name="ExplainRuleClmCrDivPrnts8332Cd"
          data-line-number="12"
          class="no-outline checkbox"
          type="radio"
          value="YES"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:361px;left:794px;"
        class="checkbox-container"
      >
        <input
          id="ExplainRuleClmCrDivPrnts8332Cd2"
          v-model="Irs8867.ExplainRuleClmCrDivPrnts8332Cd"
          name="ExplainRuleClmCrDivPrnts8332Cd"
          data-line-number="12"
          class="no-outline checkbox"
          type="radio"
          value="NO"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:361px;left:838px;"
        class="checkbox-container"
      >
        <input
          id="ExplainRuleClmCrDivPrnts8332Cd3"
          v-model="Irs8867.ExplainRuleClmCrDivPrnts8332Cd"
          name="ExplainRuleClmCrDivPrnts8332Cd"
          data-line-number="12"
          class="no-outline checkbox"
          type="radio"
          value="N/A"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:326px;left:97px;white-space:nowrap"
        class="ft27"
      >
        Did&#160;&#160;you&#160;&#160;explain&#160;&#160;to&#160;&#160;the&#160;&#160;taxpayer&#160;&#160;the&#160;&#160;rules&#160;&#160;about&#160;&#160;claiming&#160;&#160;the&#160;&#160;CTC/ACTC/ODC&#160;&#160;for&#160;&#160;a&#160;&#160;child&#160;&#160;of&#160;&#160;divorced&#160;&#160;or&#160;<br />separated&#160;parents&#160;(or&#160;parents&#160;who&#160;live&#160;apart),&#160;including&#160;any&#160;requirement&#160;to&#160;attach&#160;a&#160;Form&#160;8332&#160;or&#160;similar&#160;<br />statement
        to the
        return?&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:379px;left:57px;white-space:nowrap;color:white;font-size:12px"
        class="ft22"
      >
        <b>Part IV</b>
      </p>
      <p
        style="position:absolute;top:379px;left:129px;white-space:nowrap"
        class="ft23"
      >
        <b>Due Diligence Questions for Returns Claiming AOTC&#160;</b>(If the
        return does not claim AOTC, go to Part V.)
      </p>
      <p
        style="position:absolute;top:395px;left:61px;white-space:nowrap"
        class="ft23"
      >
        <b>13</b>
      </p>
      <label
        style="position:absolute;top:416px;left:794px;"
        class="checkbox-container"
      >
        <input
          id="SubstProvQlfyTuitionExpnssInd2"
          v-model="Irs8867.SubstProvQlfyTuitionExpnssInd"
          name="SubstProvQlfyTuitionExpnssInd"
          data-line-number="13"
          class="no-outline checkbox"
          type="radio"
          value="true"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:416px;left:838px;"
        class="checkbox-container"
      >
        <input
          id="SubstProvQlfyTuitionExpnssInd3"
          v-model="Irs8867.SubstProvQlfyTuitionExpnssInd"
          name="SubstProvQlfyTuitionExpnssInd"
          data-line-number="13"
          class="no-outline checkbox"
          type="radio"
          value="false"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:396px;left:97px;white-space:nowrap"
        class="ft27"
      >
        Did&#160;the&#160;taxpayer&#160;provide&#160;substantiation&#160;for&#160;the&#160;credit,&#160;such&#160;as&#160;a&#160;Form&#160;1098-T&#160;and/or&#160;receipts&#160;for&#160;the&#160;qualified&#160;<br />tuition
        and related expenses for the claimed
        AOTC?&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:398px;left:788px;white-space:nowrap"
        class="ft25"
      >
        <b>Yes&#160;</b>
      </p>
      <p
        style="position:absolute;top:398px;left:834px;white-space:nowrap"
        class="ft25"
      >
        <b>No&#160;</b>
      </p>
      <p
        style="position:absolute;top:432px;left:59px;white-space:nowrap;color:white;font-size:12px"
        class="ft22"
      >
        <b>Part V</b>
      </p>
      <p
        style="position:absolute;top:433px;left:129px;white-space:nowrap"
        class="ft23"
      >
        <b>Due Diligence Questions for Claiming HOH&#160;</b>(If the return does
        not claim HOH filing status, go to Part VI.)
      </p>
      <p
        style="position:absolute;top:449px;left:61px;white-space:nowrap"
        class="ft23"
      >
        <b>14</b>
      </p>
      <label
        style="position:absolute;top:470px;left:794px;"
        class="checkbox-container"
      >
        <input
          id="EligibleClaimHOHInd2"
          v-model="Irs8867.EligibleClaimHOHInd"
          name="EligibleClaimHOHInd"
          data-line-number="14"
          class="no-outline checkbox"
          type="radio"
          value="true"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:470px;left:838px;"
        class="checkbox-container"
      >
        <input
          id="EligibleClaimHOHInd3"
          v-model="Irs8867.EligibleClaimHOHInd"
          name="EligibleClaimHOHInd"
          data-line-number="14"
          class="no-outline checkbox"
          type="radio"
          value="false"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:450px;left:97px;white-space:nowrap"
        class="ft27"
      >
        Have&#160;you&#160;determined&#160;that&#160;the&#160;taxpayer&#160;was&#160;unmarried&#160;or&#160;considered&#160;unmarried&#160;on&#160;the&#160;last&#160;day&#160;of&#160;the&#160;tax&#160;year&#160;<br />and
        provided more than half of the cost of keeping up a home for the year
        for a qualifying person?&#160;&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:452px;left:788px;white-space:nowrap"
        class="ft25"
      >
        <b>Yes&#160;</b>
      </p>
      <p
        style="position:absolute;top:452px;left:834px;white-space:nowrap"
        class="ft25"
      >
        <b>No&#160;</b>
      </p>
      <p
        style="position:absolute;top:486px;left:57px;white-space:nowrap;color:white;font-size:12px"
        class="ft22"
      >
        <b>Part VI</b>
      </p>
      <p
        style="position:absolute;top:487px;left:129px;white-space:nowrap"
        class="ft23"
      >
        <b>Eligibility Certification</b>
      </p>
      <p
        style="position:absolute;top:510px;left:97px;white-space:nowrap"
        class="ft20"
      >
        ▶&#160;
      </p>
      <p
        style="position:absolute;top:507px;left:111px;white-space:nowrap"
        class="ft23"
      >
        <b
          >You will have complied with all due diligence requirements for
          claiming the applicable credit(s) and/or HOH filing&#160;</b
        >
      </p>
      <p
        style="position:absolute;top:523px;left:112px;white-space:nowrap"
        class="ft28"
      >
        <b
          >status on the return of the taxpayer identified above if you:<br /></b
        >A. Interview the taxpayer, ask adequate questions, contemporaneously
        document the taxpayer’s responses on the return or&#160;
      </p>
      <p
        style="position:absolute;top:561px;left:130px;white-space:nowrap"
        class="ft27"
      >
        in your notes, review adequate information to determine if the taxpayer
        is eligible to claim the credit(s) and/or HOH filing&#160;<br />status
        and to compute the amount(s) of the credit(s);
      </p>
      <p
        style="position:absolute;top:597px;left:112px;white-space:nowrap"
        class="ft24"
      >
        B. Complete this Form 8867 truthfully and accurately and complete the
        actions described in this checklist for any applicable&#160;
      </p>
      <p
        style="position:absolute;top:613px;left:130px;white-space:nowrap"
        class="ft24"
      >
        credit(s) claimed and HOH filing status, if claimed;
      </p>
      <p
        style="position:absolute;top:631px;left:112px;white-space:nowrap"
        class="ft24"
      >
        C. Submit Form 8867 in the manner required;&#160;
      </p>
      <p
        style="position:absolute;top:631px;left:389px;white-space:nowrap"
        class="ft23"
      >
        <b>and</b>
      </p>
      <p
        style="position:absolute;top:651px;left:112px;white-space:nowrap"
        class="ft24"
      >
        D. Keep all five of the following records for 3 years from the latest of
        the dates specified in the Form 8867 instructions under&#160;
      </p>
      <p
        style="position:absolute;top:667px;left:130px;white-space:nowrap"
        class="ft27"
      >
        <i>Document Retention.<br /></i>1. A copy of this Form 8867.<br />2. The
        applicable worksheet(s) or your own worksheet(s) for any credit(s)
        claimed.<br />3.&#160;Copies of any documents provided by the taxpayer
        on which you relied to determine the taxpayer’s eligibility for
        the&#160;
      </p>
      <p
        style="position:absolute;top:737px;left:145px;white-space:nowrap"
        class="ft24"
      >
        credit(s) and/or HOH filing status and to compute the amount(s) of the
        credit(s).
      </p>
      <p
        style="position:absolute;top:759px;left:130px;white-space:nowrap"
        class="ft24"
      >
        4. A record of how, when, and from whom the information used to prepare
        this form and the applicable worksheet(s) was&#160;
      </p>
      <p
        style="position:absolute;top:775px;left:145px;white-space:nowrap"
        class="ft24"
      >
        obtained.
      </p>
      <p
        style="position:absolute;top:792px;left:130px;white-space:nowrap"
        class="ft24"
      >
        5.&#160;A record of any additional information you relied upon,
        including questions you asked and the taxpayer’s responses, to&#160;
      </p>
      <p
        style="position:absolute;top:809px;left:145px;white-space:nowrap"
        class="ft24"
      >
        determine the taxpayer’s eligibility for the credit(s) and/or HOH filing
        status and to compute the amount(s) of the credit(s).
      </p>
      <p
        style="position:absolute;top:832px;left:97px;white-space:nowrap"
        class="ft20"
      >
        ▶&#160;
      </p>
      <p
        style="position:absolute;top:829px;left:111px;white-space:nowrap"
        class="ft23"
      >
        <b
          >If you have not complied with all due diligence requirements, you may
          have to pay a $530 penalty for each failure to&#160;</b
        >
      </p>
      <p
        style="position:absolute;top:845px;left:112px;white-space:nowrap"
        class="ft23"
      >
        <b
          >comply related to a claim of an applicable credit or HOH filing
          status.</b
        >
      </p>
      <p
        style="position:absolute;top:863px;left:61px;white-space:nowrap"
        class="ft23"
      >
        <b>15</b>
      </p>
      <label
        style="position:absolute;top:884px;left:794px;"
        class="checkbox-container"
      >
        <input
          id="CrEligibilityCertificationInd2"
          v-model="Irs8867.CrEligibilityCertificationInd"
          name="CrEligibilityCertificationInd"
          data-line-number="15"
          class="no-outline checkbox"
          type="radio"
          value="true"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:884px;left:838px;"
        class="checkbox-container"
      >
        <input
          id="CrEligibilityCertificationInd3"
          v-model="Irs8867.CrEligibilityCertificationInd"
          name="CrEligibilityCertificationInd"
          data-line-number="15"
          class="no-outline checkbox"
          type="radio"
          value="false"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:864px;left:97px;white-space:nowrap"
        class="ft27"
      >
        Do&#160;you&#160;certify&#160;that&#160;all&#160;of&#160;the&#160;answers&#160;on&#160;this&#160;Form&#160;8867&#160;are,&#160;to&#160;the&#160;best&#160;of&#160;your&#160;knowledge,&#160;true,&#160;correct,&#160;and&#160;<br />complete?&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:866px;left:788px;white-space:nowrap"
        class="ft25"
      >
        <b>Yes&#160;</b>
      </p>
      <p
        style="position:absolute;top:866px;left:834px;white-space:nowrap"
        class="ft25"
      >
        <b>No&#160;</b>
      </p>
      <p
        style="position:absolute;top:904px;left:770px;white-space:nowrap"
        class="ft20"
      >
        Form
      </p>
      <p
        style="position:absolute;top:899px;left:795px;white-space:nowrap"
        class="ft21"
      >
        <b>&#160;8867</b>&#160;(2019)&#160;
      </p>
    </div>
  </div>
</template>
<script>
import { formService } from '~/services/form-service'
import { IRS1040_UPDATED } from '~/events/event'
export default {
  name: 'Irs8867',
  data() {
    return {
      Irs8867: {}
    }
  },
  mounted() {
    this.Irs8867.PreparerPersonNm =
      this.$store.state.attachments.Irs1040.firstName +
      ' ' +
      this.$store.state.attachments.Irs1040.lastName
    this.Irs8867.ssn = this.$store.state.attachments.Irs1040.ssn
    this.Irs8867.ModifiedAGIAmt = this.$store.state.attachments.Irs1040.AdjustedGrossIncomeAmt
    formService.$on(IRS1040_UPDATED, (data) => {
      if (data) {
        this.Irs8867.PreparerPersonNm = data.firstName + ' ' + data.lastName
        this.Irs8867.ssn = this.$store.state.attachments.Irs1040.ssn
        this.$forceUpdate()
      }
    })
  }
}
</script>
<style scoped>
@import '@/assets/styles/form.css';
#page1-div {
  background-image: url('../../static/form-assets/irs8867001.png');
}
#page2-div {
  background-image: url('../../static/form-assets/irs8867002.png');
}
.year {
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
</style>
