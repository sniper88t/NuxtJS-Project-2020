<template>
  <!-- ==================== IRS Form 1040 Schedule EIC ==================== -->
  <div
    id="pdf-pages"
    style="font-size: 11px;
    font-family: QuickType, Arial, Helvetica, sans-serif"
  >
    <div id="page1-div" style="position:relative;width:917px;height:1187px;">
      <!-- <img
        width="917"
        height="1187"
        src="irs1040Scheduleeic001.png"
        alt="background image"
      /> -->
      <p
        style="position:absolute;top:52px;left:54px;white-space:nowrap;font-size:15px"
        class="ft127"
      >
        <strong>SCHEDULE EIC</strong>
      </p>
      <p
        style="position:absolute;top:70px;left:54px;white-space:nowrap"
        class="ft127"
      >
        <b>(Form 1040 or 1040-SR)</b>
      </p>
      <p
        style="position:absolute;top:117px;left:54px;white-space:nowrap;font-size:10;letter-spacing: -0.2px;"
        class="ft12"
      >
        Department of the Treasury &#160;
      </p>
      <p
        style="position:absolute;top:129px;left:54px;white-space:nowrap;font-size:9px"
        class="ft12"
      >
        Internal Revenue Service (99)&#160;
      </p>
      <p
        style="position:absolute;top:50px;left:357px;white-space:nowrap;font-size:22px"
        class="ft13"
      >
        Earned Income Credit
      </p>
      <p
        style="position:absolute;top:77px;left:366px;white-space:nowrap;font-size:12px"
        class="ft14"
      >
        Qualifying Child Information
      </p>
      <p
        style="position:absolute;top:102px;left:191px;white-space:nowrap"
        class="ft15"
      >
        ▶
      </p>
      <p
        style="position:absolute;top:100px;left:200px;white-space:nowrap"
        class="ft16"
      >
        &#160;
      </p>
      <p
        style="position:absolute;top:100px;left:203px;white-space:nowrap"
        class="ft11"
      >
        <b
          >Complete and attach to Form 1040 or 1040-SR only if you have a &#160;
          &#160;&#160;</b
        >
      </p>
      <p
        style="position:absolute;top:114px;left:205px;white-space:nowrap"
        class="ft11"
      >
        <b>qualifying child.</b>
      </p>
      <p
        style="position:absolute;top:131px;left:191px;white-space:nowrap"
        class="ft15"
      >
        ▶
      </p>
      <p
        style="position:absolute;top:128px;left:200px;white-space:nowrap"
        class="ft16"
      >
        &#160;
      </p>
      <p
        style="position:absolute;top:128px;left:203px;white-space:nowrap"
        class="ft11"
      >
        <b>Go to &#160;<i>www.irs.gov/ScheduleEIC&#160;</i></b
        ><b>for the latest information</b><i>.</i>
      </p>
      <p
        style="position:absolute;top:70px;left:602px;white-space:nowrap"
        class="ft19"
      >
        <b>1040&#160;&#160;</b>
      </p>
      <p
        style="position:absolute;top:89px;left:595px;white-space:nowrap"
        class="ft19"
      >
        <b>1040-SR&#160;</b>
      </p>
      <p
        style="position:absolute;top:81px;left:597px;white-space:nowrap"
        class="ft110"
      >
        . . . . . . . . .&#160;
      </p>
      <p
        style="position:absolute;top:108px;left:643px;white-space:nowrap"
        class="ft111"
      >
        <b>EIC&#160;</b>
      </p>
      <p
        style="position:absolute;top:67px;left:640px;white-space:nowrap"
        class="ft112"
      >
        ◀
      </p>
      <p
        style="position:absolute;top:55px;left:750px;white-space:nowrap"
        class="ft12"
      >
        OMB No. 1545-1736
      </p>
      <p
        style="position:absolute;top:76px;left:760px;white-space:nowrap;font-size: 30px;"
        class="ft113"
      >
        <strong><span class="year">20</span>19</strong>
      </p>
      <p
        style="position:absolute;top:115px;left:752px;white-space:nowrap"
        class="ft12"
      >
        Attachment &#160;&#160;
      </p>
      <p
        style="position:absolute;top:126px;left:752px;white-space:nowrap"
        class="ft12"
      >
        Sequence No.&#160;
      </p>
      <p
        style="position:absolute;top:125px;left:822px;white-space:nowrap;font-size:13px"
        class="ft10"
      >
        <b>43</b>
      </p>
      <p
        style="position:absolute;top:146px;left:54px;white-space:nowrap"
        class="ft12"
      >
        Name(s) shown on return&#160;
      </p>
      <div class="input-area" style="position:absolute;top:161px;left:54px">
        <input
          id="name"
          v-model="Irs1040ScheduleEic.name"
          name="name"
          class="no-outline"
          type="text"
          readonly
          style="width:648px;"
        />
      </div>
      <p
        style="position:absolute;top:146px;left:708px;white-space:nowrap"
        class="ft114"
      >
        <b>Your social security number&#160;</b>
      </p>
      <div class="input-area" style="position:absolute;top:161px;left:703px">
        <input
          id="ssn"
          v-model="Irs1040ScheduleEic.ssn"
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
        style="position:absolute;top:186px;left:54px;white-space:nowrap"
        class="ft115"
      >
        <i><b>Before you begin:&#160;</b></i>
      </p>
      <p
        style="position:absolute;top:183px;left:259px;white-space:nowrap"
        class="ft116"
      >
        • See the instructions for Form 1040 or 1040-SR, line 18a, to make sure
        that&#160;<b>(a)</b>&#160;you can take the EIC,
        and&#160;<b>(b)</b>&#160;
      </p>
      <p
        style="position:absolute;top:200px;left:268px;white-space:nowrap"
        class="ft116"
      >
        you have a qualifying child.&#160;
      </p>
      <p
        style="position:absolute;top:219px;left:259px;white-space:nowrap"
        class="ft116"
      >
        • Be sure the child’s name on line 1 and social security number (SSN) on
        line 2 agree with the child’s social security card.&#160;
      </p>
      <p
        style="position:absolute;top:235px;left:268px;white-space:nowrap"
        class="ft128"
      >
        Otherwise, at the time we process your return, we may reduce or disallow
        your EIC. If the name or SSN on the child’s&#160;<br />social security
        card is not correct, call the Social Security Administration at
        1-800-772-1213. &#160;
      </p>
      <p
        style="position:absolute;top:277px;left:57px;white-space:nowrap;font-size:46px;color:white"
        class="ft118"
      >
        ▲
      </p>
      <p
        style="position:absolute;top:288px;left:76px;white-space:nowrap;font-size:30px;color:#00a7f0"
        class="ft119"
      >
        !
      </p>
      <p
        style="position:absolute;top:319px;left:58px;white-space:nowrap"
        class="ft120"
      >
        <b>CAUTION</b>
      </p>
      <p
        style="position:absolute;top:281px;left:119px;white-space:nowrap"
        class="ft129"
      >
        <i
          >• You can't claim the EIC for a child who didn't live with you for
          more than half of the year.&#160;<br />• If you take the EIC even
          though you are not eligible, you may not be allowed to take the credit
          for up to 10 years. See the instructions for details.&#160;<br />• It
          will take us longer to process your return and issue your refund if
          you do not fill in all lines that apply for each qualifying
          child.&#160;</i
        >
      </p>
      <p
        style="position:absolute;top:347px;left:54px;white-space:nowrap;font-size:19px;color:#00a7f0"
        class="ft122"
      >
        <b>Qualifying Child Information</b>
      </p>
      <p
        style="position:absolute;top:349px;left:378px;white-space:nowrap"
        class="ft123"
      >
        <b>Child 1&#160;</b>
      </p>
      <p
        style="position:absolute;top:349px;left:561px;white-space:nowrap"
        class="ft123"
      >
        <b>Child 2&#160;</b>
      </p>
      <p
        style="position:absolute;top:349px;left:745px;white-space:nowrap"
        class="ft123"
      >
        <b>Child 3</b>
      </p>
      <p
        style="position:absolute;top:382px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>1 &#160; Child’s name&#160;</b>
      </p>
      <p
        style="position:absolute;top:403px;left:76px;white-space:nowrap"
        class="ft116"
      >
        If you have more than three qualifying&#160;
      </p>
      <p
        style="position:absolute;top:417px;left:76px;white-space:nowrap"
        class="ft116"
      >
        children, you have to list only three to get&#160;
      </p>
      <p
        style="position:absolute;top:430px;left:76px;white-space:nowrap"
        class="ft116"
      >
        the maximum credit.&#160;
      </p>
      <p
        style="position:absolute;top:383px;left:326px;white-space:nowrap"
        class="ft12"
      >
        First name &#160; &#160; &#160; &#160; &#160; &#160; &#160; Last
        name&#160;
      </p>
      <!-- Qualifying Child Information Repeating Group -->
      <div class="input-area" style="position:absolute;top:431px;left:314px">
        <input
          id="childFirstAndLastName"
          v-model="QualifyingChildInformation.childFirstAndLastName"
          name="childFirstAndLastName"
          class="no-outline"
          type="text"
          data-line-number="1"
          style="width:182px;"
        />
      </div>
      <div class="input-area" style="position:absolute;top:602px;left:314px">
        <input
          id="qualifyingChildSSN"
          v-model="QualifyingChildInformation.qualifyingChildSSN"
          v-mask="'###-##-####'"
          name="qualifyingChildSSN"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          class="no-outline"
          type="text"
          style="width:182px;"
        />
      </div>
      <div class="input-area" style="position:absolute;top:638px;left:365px">
        <input
          id="childBirthYr"
          v-model="QualifyingChildInformation.childBirthYr"
          v-mask="'####'"
          name="childBirthYr"
          placeholder="YYYY"
          class="no-outline"
          type="text"
          style="width:122px;"
        />
      </div>
      <!-- Ref line 4a first element -->
      <label
        style="position:absolute;top:721px;left:325px;"
        class="checkbox-container"
      >
        <input
          id="beneficiaryInd-0"
          v-model="QualifyingChildInformation.childIsAStudentUnder24Ind"
          name="beneficiaryInd"
          data-line-number="4a"
          class="no-outline checkbox"
          type="radio"
          value="1"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:721px;left:411px;"
        class="checkbox-container"
      >
        <input
          id="beneficiaryInd-0"
          v-model="QualifyingChildInformation.childIsAStudentUnder24Ind"
          name="beneficiaryInd"
          data-line-number="4a"
          class="no-outline checkbox"
          type="radio"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <!-- Ref line 4b first element -->
      <label
        style="position:absolute;top:802px;left:325px;"
        class="checkbox-container"
      >
        <input
          id="childPermanentlyDisabledInd-0"
          v-model="QualifyingChildInformation.childPermanentlyDisabledInd"
          name="childPermanentlyDisabledInd"
          data-line-number="4b"
          class="no-outline checkbox"
          type="radio"
          value="1"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:802px;left:411px;"
        class="checkbox-container"
      >
        <input
          id="childPermanentlyDisabledInd-0"
          v-model="QualifyingChildInformation.childPermanentlyDisabledInd"
          name="childPermanentlyDisabledInd"
          data-line-number="4b"
          class="no-outline checkbox"
          type="radio"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <!-- Ref line 5 -->
      <div style="position:absolute;top:918px;left:314px;">
        <select
          v-model="QualifyingChildInformation.ChildRelationshipCd"
          v-uppercase
          name="state"
          title="Line 5. Child 1. Child's relationship to you."
          style="width:182px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
        >
          <option value=" "></option>
          <option
            v-for="relationship in childRelationships"
            :key="relationship"
            :value="relationship"
            >{{ relationship }}</option
          >
        </select>
      </div>
      <!-- Ref line 6 -->
      <div style="position:absolute;top:1053px;left:367px;">
        <select
          v-model="QualifyingChildInformation.MonthsChildLivedWithYouCnt"
          v-uppercase
          name="state"
          title="Line 6. Number of months child lived with you in the United States during 2019. If the child lived with you for more than half of 2019 but less than 7 months, enter '7'. If the child was born or died in 2019 and your home was the child’s home for more than half the time he or she was alive during 2019, enter '12'. Do not enter more than 12
months."
          style="width:56px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
        >
          <option value=" "></option>
          <option v-for="month in months" :key="month" :value="month">{{
            month
          }}</option>
        </select>
      </div>
      <!-- Qualifying Child 2 -->
      <div class="input-area" style="position:absolute;top:431px;left:497px">
        <input
          id="childFirstAndLastName2"
          v-model="QualifyingChildInformation.childFirstAndLastName2"
          name="childFirstAndLastName2"
          class="no-outline"
          type="text"
          data-line-number="1"
          style="width:182px;"
        />
      </div>
      <div class="input-area" style="position:absolute;top:602px;left:497px">
        <input
          id="qualifyingChildSSN2"
          v-model="QualifyingChildInformation.qualifyingChildSSN2"
          v-mask="'###-##-####'"
          name="qualifyingChildSSN2"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          class="no-outline"
          type="text"
          style="width:182px;"
        />
      </div>
      <div class="input-area" style="position:absolute;top:638px;left:548px">
        <input
          id="childBirthYr2"
          v-model="QualifyingChildInformation.childBirthYr2"
          v-mask="'####'"
          name="childBirthYr2"
          placeholder="YYYY"
          class="no-outline"
          type="text"
          style="width:122px;"
        />
      </div>
      <!-- Ref line 4a first element -->
      <label
        style="position:absolute;top:721px;left:507px;"
        class="checkbox-container"
      >
        <input
          id="beneficiaryInd-2"
          v-model="QualifyingChildInformation.childIsAStudentUnder24Ind2"
          name="beneficiaryInd2"
          data-line-number="4a"
          class="no-outline checkbox"
          type="radio"
          value="1"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:721px;left:595px;"
        class="checkbox-container"
      >
        <input
          id="beneficiaryInd-2"
          v-model="QualifyingChildInformation.childIsAStudentUnder24Ind2"
          name="beneficiaryInd2"
          data-line-number="4a"
          class="no-outline checkbox"
          type="radio"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <!-- Ref line 4b first element -->
      <label
        style="position:absolute;top:802px;left:507px;"
        class="checkbox-container"
      >
        <input
          id="childPermanentlyDisabledInd-2"
          v-model="QualifyingChildInformation.childPermanentlyDisabledInd2"
          name="childPermanentlyDisabledInd2"
          data-line-number="4b"
          class="no-outline checkbox"
          type="radio"
          value="1"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:802px;left:595px;"
        class="checkbox-container"
      >
        <input
          id="childPermanentlyDisabledInd-2"
          v-model="QualifyingChildInformation.childPermanentlyDisabledInd2"
          name="childPermanentlyDisabledInd2"
          data-line-number="4b"
          class="no-outline checkbox"
          type="radio"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <!-- Ref line 5 -->
      <div style="position:absolute;top:918px;left:498px;">
        <select
          v-model="QualifyingChildInformation.ChildRelationshipCd2"
          v-uppercase
          name="state"
          title="Line 5. Child 2. Child's relationship to you."
          style="width:182px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
        >
          <option value=" "></option>
          <option
            v-for="relationship in childRelationships"
            :key="relationship"
            :value="relationship"
            >{{ relationship }}</option
          >
        </select>
      </div>
      <!-- Ref line 6 -->
      <div style="position:absolute;top:1053px;left:551px;">
        <select
          v-model="QualifyingChildInformation.MonthsChildLivedWithYouCnt2"
          v-uppercase
          name="MonthsChildLivedWithYouCnt2"
          title="Line 6. Number of months child lived with you in the United States during 2019. If the child lived with you for more than half of 2019 but less than 7 months, enter '7'. If the child was born or died in 2019 and your home was the child’s home for more than half the time he or she was alive during 2019, enter '12'. Do not enter more than 12
months."
          style="width:56px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
        >
          <option value=" "></option>
          <option v-for="month in months" :key="month" :value="month">{{
            month
          }}</option>
        </select>
      </div>
      <!-- Qualifying Child 3 -->
      <div class="input-area" style="position:absolute;top:431px;left:681px">
        <input
          id="childFirstAndLastName3"
          v-model="QualifyingChildInformation.childFirstAndLastName3"
          name="childFirstAndLastName3"
          class="no-outline"
          type="text"
          data-line-number="1"
          style="width:182px;"
        />
      </div>
      <div class="input-area" style="position:absolute;top:602px;left:681px">
        <input
          id="qualifyingChildSSN3"
          v-model="QualifyingChildInformation.qualifyingChildSSN3"
          v-mask="'###-##-####'"
          name="qualifyingChildSSN3"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          class="no-outline"
          type="text"
          style="width:182px;"
        />
      </div>
      <div class="input-area" style="position:absolute;top:638px;left:734px">
        <input
          id="childBirthYr"
          v-model="QualifyingChildInformation.childBirthYr3"
          v-mask="'####'"
          name="childBirthYr3"
          placeholder="YYYY"
          class="no-outline"
          type="text"
          style="width:122px;"
        />
      </div>
      <!-- Ref line 4a first element -->
      <label
        style="position:absolute;top:721px;left:692px;"
        class="checkbox-container"
      >
        <input
          id="beneficiaryInd-0"
          v-model="QualifyingChildInformation.childIsAStudentUnder24Ind3"
          name="beneficiaryInd3"
          data-line-number="4a"
          class="no-outline checkbox"
          type="radio"
          value="1"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:721px;left:778px;"
        class="checkbox-container"
      >
        <input
          id="beneficiaryInd-0"
          v-model="QualifyingChildInformation.childIsAStudentUnder24Ind3"
          name="beneficiaryInd3"
          data-line-number="4a"
          class="no-outline checkbox"
          type="radio"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <!-- Ref line 4b first element -->
      <label
        style="position:absolute;top:802px;left:692px;"
        class="checkbox-container"
      >
        <input
          id="childPermanentlyDisabledInd-0"
          v-model="QualifyingChildInformation.childPermanentlyDisabledInd3"
          name="childPermanentlyDisabledInd3"
          data-line-number="4b"
          class="no-outline checkbox"
          type="radio"
          value="1"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:802px;left:778px;"
        class="checkbox-container"
      >
        <input
          id="childPermanentlyDisabledInd-0"
          v-model="QualifyingChildInformation.childPermanentlyDisabledInd3"
          name="childPermanentlyDisabledInd3"
          data-line-number="4b"
          class="no-outline checkbox"
          type="radio"
          value="0"
        />
        <span class="checkmark"></span>
      </label>
      <!-- Ref line 5 -->
      <div style="position:absolute;top:918px;left:681px;">
        <select
          v-model="QualifyingChildInformation.ChildRelationshipCd3"
          v-uppercase
          name="state"
          title="Select State"
          style="width:182px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
        >
          <option value=" "></option>
          <option
            v-for="relationship in childRelationships"
            :key="relationship"
            :value="relationship"
            >{{ relationship }}</option
          >
        </select>
      </div>
      <!-- Ref line 6 -->
      <div style="position:absolute;top:1053px;left:736px;">
        <select
          v-model="QualifyingChildInformation.MonthsChildLivedWithYouCnt3"
          v-uppercase
          name="state"
          title="Select State"
          style="width:56px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
        >
          <option value=" "></option>
          <option v-for="month in months" :key="month" :value="month">{{
            month
          }}</option>
        </select>
      </div>
      <p
        style="position:absolute;top:383px;left:510px;white-space:nowrap"
        class="ft12"
      >
        First name &#160; &#160; &#160; &#160; &#160; &#160; &#160; Last
        name&#160;
      </p>
      <p
        style="position:absolute;top:383px;left:694px;white-space:nowrap"
        class="ft12"
      >
        First name &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;
        &#160; &#160;Last name&#160;
      </p>
      <p
        style="position:absolute;top:454px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>2 &#160; Child’s SSN&#160;</b>
      </p>
      <p
        style="position:absolute;top:478px;left:76px;white-space:nowrap"
        class="ft116"
      >
        The child must have an SSN as defined in&#160;
      </p>
      <p
        style="position:absolute;top:493px;left:76px;white-space:nowrap"
        class="ft116"
      >
        the instructions for Form 1040 or &#160; &#160; &#160;&#160;
      </p>
      <p
        style="position:absolute;top:508px;left:76px;white-space:nowrap"
        class="ft116"
      >
        1040-SR, line 18a, unless the child was&#160;
      </p>
      <p
        style="position:absolute;top:523px;left:76px;white-space:nowrap"
        class="ft116"
      >
        born and died in 2019. If your child was&#160;
      </p>
      <p
        style="position:absolute;top:538px;left:76px;white-space:nowrap"
        class="ft116"
      >
        born and died in 2019 and did not have an&#160;
      </p>
      <p
        style="position:absolute;top:553px;left:76px;white-space:nowrap"
        class="ft116"
      >
        SSN, enter “Died” on this line and attach a&#160;
      </p>
      <p
        style="position:absolute;top:568px;left:76px;white-space:nowrap"
        class="ft116"
      >
        copy of the child’s birth certificate, death&#160;
      </p>
      <p
        style="position:absolute;top:583px;left:76px;white-space:nowrap"
        class="ft116"
      >
        certificate, or hospital medical records&#160;
      </p>
      <p
        style="position:absolute;top:598px;left:76px;white-space:nowrap"
        class="ft116"
      >
        showing a live birth.&#160;
      </p>
      <p
        style="position:absolute;top:625px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>3 &#160; Child’s year of birth&#160;</b>
      </p>
      <p
        style="position:absolute;top:640px;left:321px;white-space:nowrap"
        class="ft116"
      >
        Year&#160;
      </p>
      <p
        style="position:absolute;top:660px;left:318px;white-space:nowrap"
        class="ft124"
      >
        <i>If born after 2000&#160;</i>
      </p>
      <p
        style="position:absolute;top:660px;left:406px;white-space:nowrap"
        class="ft125"
      >
        <i><b>and</b>&#160;the child is&#160;</i>
      </p>
      <p
        style="position:absolute;top:671px;left:318px;white-space:nowrap"
        class="ft124"
      >
        <i>younger than you (or your spouse, if&#160;</i>
      </p>
      <p
        style="position:absolute;top:681px;left:318px;white-space:nowrap"
        class="ft124"
      >
        <i>filing jointly), skip lines 4a and 4b;&#160;</i>
      </p>
      <p
        style="position:absolute;top:692px;left:318px;white-space:nowrap"
        class="ft124"
      >
        <i>go to line 5.&#160;</i>
      </p>
      <p
        style="position:absolute;top:640px;left:505px;white-space:nowrap"
        class="ft116"
      >
        Year&#160;
      </p>
      <p
        style="position:absolute;top:660px;left:501px;white-space:nowrap"
        class="ft124"
      >
        <i>If born after 2000</i>
      </p>
      <p
        style="position:absolute;top:660px;left:587px;white-space:nowrap"
        class="ft125"
      >
        <i><b>&#160;and</b>&#160;the child is&#160;</i>
      </p>
      <p
        style="position:absolute;top:671px;left:501px;white-space:nowrap"
        class="ft124"
      >
        <i>younger than you (or your spouse, if&#160;</i>
      </p>
      <p
        style="position:absolute;top:681px;left:501px;white-space:nowrap"
        class="ft124"
      >
        <i>filing jointly), skip lines 4a and 4b;&#160;</i>
      </p>
      <p
        style="position:absolute;top:692px;left:501px;white-space:nowrap"
        class="ft124"
      >
        <i>go to line 5.&#160;</i>
      </p>
      <p
        style="position:absolute;top:640px;left:688px;white-space:nowrap"
        class="ft116"
      >
        Year&#160;
      </p>
      <p
        style="position:absolute;top:660px;left:685px;white-space:nowrap"
        class="ft124"
      >
        <i>If born after 2000&#160;</i>
      </p>
      <p
        style="position:absolute;top:660px;left:774px;white-space:nowrap"
        class="ft125"
      >
        <i><b>and&#160;</b>the child is&#160;</i>
      </p>
      <p
        style="position:absolute;top:671px;left:685px;white-space:nowrap"
        class="ft124"
      >
        <i>younger than you (or your spouse, if&#160;</i>
      </p>
      <p
        style="position:absolute;top:681px;left:685px;white-space:nowrap"
        class="ft124"
      >
        <i>filing jointly), skip lines 4a and 4b;&#160;</i>
      </p>
      <p
        style="position:absolute;top:692px;left:685px;white-space:nowrap"
        class="ft124"
      >
        <i>go to line 5.&#160;</i>
      </p>
      <p
        style="position:absolute;top:715px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>4&#160;a&#160;</b>Was the child under age 24 at the end of&#160;
      </p>
      <p
        style="position:absolute;top:731px;left:76px;white-space:nowrap"
        class="ft116"
      >
        2019, a student, and younger than you (or&#160;
      </p>
      <p
        style="position:absolute;top:745px;left:76px;white-space:nowrap"
        class="ft116"
      >
        your spouse, if filing jointly)?&#160;
      </p>
      <p
        style="position:absolute;top:727px;left:356px;white-space:nowrap"
        class="ft117"
      >
        <b>Yes.</b>
      </p>
      <p
        style="position:absolute;top:753px;left:322px;white-space:nowrap"
        class="ft126"
      >
        <i><b>&#160;Go to &#160;</b></i>
      </p>
      <p
        style="position:absolute;top:768px;left:322px;white-space:nowrap"
        class="ft126"
      >
        <i><b>&#160;line 5.&#160;</b></i>
      </p>
      <p
        style="position:absolute;top:727px;left:443px;white-space:nowrap"
        class="ft117"
      >
        <b>No.</b>
      </p>
      <p
        style="position:absolute;top:753px;left:410px;white-space:nowrap"
        class="ft126"
      >
        <i><b>Go to line 4b.&#160;</b></i>
      </p>
      <p
        style="position:absolute;top:727px;left:540px;white-space:nowrap"
        class="ft117"
      >
        <b>Yes.</b>
      </p>
      <p
        style="position:absolute;top:753px;left:506px;white-space:nowrap"
        class="ft126"
      >
        <i><b>&#160;Go to&#160;</b></i>
      </p>
      <p
        style="position:absolute;top:768px;left:506px;white-space:nowrap"
        class="ft126"
      >
        <i><b>&#160;line 5.&#160;</b></i>
      </p>
      <p
        style="position:absolute;top:727px;left:626px;white-space:nowrap"
        class="ft117"
      >
        <b>No.</b>
      </p>
      <p
        style="position:absolute;top:753px;left:594px;white-space:nowrap"
        class="ft126"
      >
        <i><b>Go to line 4b.&#160;</b></i>
      </p>
      <p
        style="position:absolute;top:727px;left:724px;white-space:nowrap"
        class="ft117"
      >
        <b>Yes.</b>
      </p>
      <p
        style="position:absolute;top:753px;left:689px;white-space:nowrap"
        class="ft126"
      >
        <i><b>&#160;Go to&#160;</b></i>
      </p>
      <p
        style="position:absolute;top:768px;left:689px;white-space:nowrap"
        class="ft126"
      >
        <i><b>&#160;line 5.&#160;</b></i>
      </p>
      <p
        style="position:absolute;top:727px;left:810px;white-space:nowrap"
        class="ft117"
      >
        <b>No.</b>
      </p>
      <p
        style="position:absolute;top:753px;left:778px;white-space:nowrap"
        class="ft126"
      >
        <i><b>Go to line 4b.&#160;</b></i>
      </p>
      <p
        style="position:absolute;top:794px;left:65px;white-space:nowrap"
        class="ft10"
      >
        <b>b&#160;</b>Was the child permanently and totally&#160;
      </p>
      <p
        style="position:absolute;top:809px;left:76px;white-space:nowrap"
        class="ft116"
      >
        disabled during any part of 2019?&#160;
      </p>
      <p
        style="position:absolute;top:808px;left:356px;white-space:nowrap"
        class="ft117"
      >
        <b>Yes.</b>
      </p>
      <p
        style="position:absolute;top:834px;left:322px;white-space:nowrap"
        class="ft126"
      >
        <i><b>&#160;Go to&#160;</b></i>
      </p>
      <p
        style="position:absolute;top:849px;left:322px;white-space:nowrap"
        class="ft126"
      >
        <i><b>&#160;line 5.</b></i>
      </p>
      <p
        style="position:absolute;top:808px;left:443px;white-space:nowrap"
        class="ft117"
      >
        <b>No.</b>
      </p>
      <p
        style="position:absolute;top:834px;left:400px;white-space:nowrap"
        class="ft116"
      >
        The&#160;child&#160;is&#160;not&#160;a&#160;
      </p>
      <p
        style="position:absolute;top:849px;left:400px;white-space:nowrap"
        class="ft116"
      >
        qualifying child.&#160;
      </p>
      <p
        style="position:absolute;top:808px;left:540px;white-space:nowrap"
        class="ft117"
      >
        <b>Yes.</b>
      </p>
      <p
        style="position:absolute;top:834px;left:506px;white-space:nowrap"
        class="ft126"
      >
        <i><b>&#160;Go to&#160;</b></i>
      </p>
      <p
        style="position:absolute;top:849px;left:506px;white-space:nowrap"
        class="ft126"
      >
        <i><b>&#160;line 5.</b></i>
      </p>
      <p
        style="position:absolute;top:808px;left:626px;white-space:nowrap"
        class="ft117"
      >
        <b>No.</b>
      </p>
      <p
        style="position:absolute;top:834px;left:583px;white-space:nowrap"
        class="ft116"
      >
        The&#160;child&#160;is&#160;not&#160;a&#160;
      </p>
      <p
        style="position:absolute;top:849px;left:583px;white-space:nowrap"
        class="ft116"
      >
        qualifying child.&#160;
      </p>
      <p
        style="position:absolute;top:808px;left:724px;white-space:nowrap"
        class="ft117"
      >
        <b>Yes.</b>
      </p>
      <p
        style="position:absolute;top:834px;left:689px;white-space:nowrap"
        class="ft126"
      >
        <i><b>&#160;Go to&#160;</b></i>
      </p>
      <p
        style="position:absolute;top:849px;left:689px;white-space:nowrap"
        class="ft126"
      >
        <i><b>&#160;line 5.</b></i>
      </p>
      <p
        style="position:absolute;top:808px;left:810px;white-space:nowrap"
        class="ft117"
      >
        <b>No.</b>
      </p>
      <p
        style="position:absolute;top:834px;left:767px;white-space:nowrap"
        class="ft116"
      >
        The&#160;child&#160;is&#160;not&#160;a&#160;
      </p>
      <p
        style="position:absolute;top:849px;left:767px;white-space:nowrap"
        class="ft116"
      >
        qualifying child.&#160;
      </p>
      <p
        style="position:absolute;top:877px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>5&#160;Child’s relationship to you &#160;</b>
      </p>
      <p
        style="position:absolute;top:900px;left:76px;white-space:nowrap"
        class="ft116"
      >
        (for example, son, daughter, grandchild,&#160;
      </p>
      <p
        style="position:absolute;top:914px;left:76px;white-space:nowrap"
        class="ft116"
      >
        niece, nephew, eligible foster child, etc.)&#160;
      </p>
      <p
        style="position:absolute;top:941px;left:54px;white-space:nowrap"
        class="ft10"
      >
        <b>6 &#160; Number of months child lived&#160;</b>
      </p>
      <p
        style="position:absolute;top:956px;left:74px;white-space:nowrap"
        class="ft10"
      >
        <b>with you in the United States&#160;</b>
      </p>
      <p
        style="position:absolute;top:971px;left:74px;white-space:nowrap"
        class="ft10"
      >
        <b>during 2019</b>
      </p>
      <p
        style="position:absolute;top:1004px;left:76px;white-space:nowrap"
        class="ft116"
      >
        • If the child lived with you for more than&#160;
      </p>
      <p
        style="position:absolute;top:1018px;left:76px;white-space:nowrap"
        class="ft116"
      >
        half of 2019 but less than 7 months, &#160;
      </p>
      <p
        style="position:absolute;top:1031px;left:76px;white-space:nowrap"
        class="ft130"
      >
        enter “7.”&#160;<br />• If the child was born or died in 2019 and&#160;
      </p>
      <p
        style="position:absolute;top:1064px;left:76px;white-space:nowrap"
        class="ft116"
      >
        your home was the child’s home for more&#160;
      </p>
      <p
        style="position:absolute;top:1077px;left:76px;white-space:nowrap"
        class="ft116"
      >
        than half the time he or she was alive&#160;
      </p>
      <p
        style="position:absolute;top:1091px;left:76px;white-space:nowrap"
        class="ft116"
      >
        during 2019, enter “12.”
      </p>
      <p
        style="position:absolute;top:1054px;left:432px;white-space:nowrap"
        class="ft116"
      >
        months&#160;
      </p>
      <p
        style="position:absolute;top:1071px;left:322px;white-space:nowrap"
        class="ft131"
      >
        <i>Do not enter more than 12&#160;<br />months.&#160;</i>
      </p>
      <p
        style="position:absolute;top:1054px;left:616px;white-space:nowrap"
        class="ft116"
      >
        months&#160;
      </p>
      <p
        style="position:absolute;top:1071px;left:506px;white-space:nowrap"
        class="ft131"
      >
        <i>Do not enter more than 12&#160;<br />months.&#160;</i>
      </p>
      <p
        style="position:absolute;top:1054px;left:799px;white-space:nowrap"
        class="ft116"
      >
        months&#160;
      </p>
      <p
        style="position:absolute;top:1071px;left:689px;white-space:nowrap"
        class="ft131"
      >
        <i>Do not enter more than 12&#160;<br />months.&#160;</i>
      </p>
      <p
        style="position:absolute;top:1108px;left:54px;white-space:nowrap"
        class="ft11"
      >
        <b>XOB For Paperwork Reduction Act Notice, see your tax&#160;</b>
      </p>
      <p
        style="position:absolute;top:1122px;left:54px;white-space:nowrap"
        class="ft11"
      >
        <b>return instructions.&#160;</b>
      </p>
      <p
        style="position:absolute;top:1112px;left:473px;white-space:nowrap"
        class="ft12"
      >
        Cat. No. 0000/1736
      </p>
      <p
        style="position:absolute;top:1111px;left:651px;white-space:nowrap"
        class="ft114"
      >
        <b>Schedule EIC (Form 1040 or 1040-SR) 2019</b>
      </p>
      <p
        style="position:absolute;top:1110px;left:864px;white-space:nowrap"
        class="ft11"
      >
        <b>&#160;</b>
      </p>
    </div>
  </div>
</template>
<script>
import { formService } from '~/services/form-service'
import { IRS1040_UPDATED } from '~/events/event'
import { childRelationships, months } from '~/services/child-relationship.js'
export default {
  name: 'Irs1040ScheduleEic',
  data() {
    return {
      Irs1040ScheduleEic: {
        QualifyingChildInformation: []
      },
      QualifyingChildInformation: {},
      childRelationships,
      months
    }
  },
  mounted() {
    this.Irs1040ScheduleEic.name =
      this.$store.state.attachments.Irs1040.firstName +
      ' ' +
      this.$store.state.attachments.Irs1040.lastName
    this.Irs1040ScheduleEic.ssn = this.$store.state.attachments.Irs1040.ssn
    formService.$on(IRS1040_UPDATED, (data) => {
      this.Irs1040ScheduleEic.ssn = data.ssn
      this.Irs1040ScheduleEic.name = data.firstName + ' ' + data.lastName
    })
    this.$forceUpdate()
  }
}
</script>
<style scoped>
@import '@/assets/styles/form.css';
#page1-div {
  background-image: url('../../static/form-assets/scheduleeic.png');
}
.year {
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
.checkmark {
  position: absolute;
  top: 1px;
  left: -1px;
  height: 23px;
  width: 25px;
  border: 1px solid;
  background-color: #fff;
}
.checkbox-container .checkmark:after {
  left: 8px;
  top: 3px;
  width: 6px;
  height: 12px;
  border: solid #000;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
