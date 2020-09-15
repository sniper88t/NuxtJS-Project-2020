<template>
  <div
    id="pdf-pages"
    style="font-size: 11px;font-family: QuickType, Arial, Helvetica, sans-serif"
  >
    <div id="page1-div" style="position:relative;width:917px;height:1187px;">
      <!-- <img
        width="917"
        height="1187"
        src="irsf8283001.png"
        alt="background image"
      /> -->
      <p
        style="position:absolute;top:70px;left:54px;white-space:nowrap"
        class="ft10"
      >
        Form &#160; &#160;
      </p>
      <p
        style="position:absolute;top:45px;left:90px;white-space:nowrap;font-size: 30px;"
        class="ft11"
      >
        <b>8283&#160;</b>
      </p>
      <p
        style="position:absolute;top:85px;left:54px;white-space:nowrap"
        class="ft113"
      >
        (Rev. November 2019)&#160;
      </p>
      <p
        style="position:absolute;top:99px;left:54px;white-space:nowrap;font-size:10px"
        class="ft113"
      >
        Department of the Treasury &#160;
      </p>
      <p
        style="position:absolute;top:112px;left:54px;white-space:nowrap"
        class="ft10"
      >
        Internal Revenue Service&#160;
      </p>
      <p
        style="position:absolute;top:50px;left:301px;white-space:nowrap;font-size:20px"
        class="ft12"
      >
        <strong>Noncash Charitable Contributions</strong>
      </p>
      <p
        style="position:absolute;top:81px;left:218px;white-space:nowrap"
        class="ft13"
      >
        ▶
      </p>
      <p
        style="position:absolute;top:77px;left:227px;white-space:nowrap"
        class="ft14"
      >
        &#160;&#160;<b
          >Attach one or more Forms 8283 to your tax return if you claimed a
          total deduction&#160;</b
        >&#160;
      </p>
      <p
        style="position:absolute;top:93px;left:344px;white-space:nowrap"
        class="ft15"
      >
        <b>of over $500 for all contributed property.</b>
      </p>
      <p
        style="position:absolute;top:113px;left:246px;white-space:nowrap"
        class="ft13"
      >
        ▶
      </p>
      <p
        style="position:absolute;top:108px;left:255px;white-space:nowrap"
        class="ft14"
      >
        &#160;&#160;<b>Go to&#160;<i>www.irs.gov/Form8283&#160;</i></b
        ><b>for instructions and the latest information.</b>
      </p>
      <p
        style="position:absolute;top:64px;left:750px;white-space:nowrap"
        class="ft10"
      >
        OMB No. 1545-1736
      </p>
      <p
        style="position:absolute;top:93px;left:752px;white-space:nowrap"
        class="ft10"
      >
        Attachment &#160;&#160;
      </p>
      <p
        style="position:absolute;top:105px;left:752px;white-space:nowrap"
        class="ft10"
      >
        Sequence No.&#160;
      </p>
      <p
        style="position:absolute;top:100px;left:822px;white-space:nowrap"
        class="ft17"
      >
        <b>155</b>
      </p>
      <p
        style="position:absolute;top:126px;left:54px;white-space:nowrap"
        class="ft10"
      >
        Name(s) shown on your income tax return&#160;
      </p>
      <div class="input-area" style="position:absolute;top:142px;left:54px">
        <input
          id="name"
          v-model="Irs8283.name"
          name="name"
          class="no-outline"
          type="text"
          readonly
          style="width:680px;"
        />
      </div>
      <p
        style="position:absolute;top:126px;left:740px;white-space:nowrap"
        class="ft18"
      >
        <b>Identifying number&#160;</b>
      </p>
      <div class="input-area" style="position:absolute;top:142px;left:735px">
        <input
          id="ssn"
          v-model="Irs8283.ssn"
          v-mask="'###-##-####'"
          name="ssn"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          class="no-outline"
          type="password"
          readonly
          style="width:130px;"
        />
      </div>
      <p
        style="position:absolute;top:164px;left:54px;white-space:nowrap"
        class="ft114"
      >
        <b>Note:&#160;</b>Figure the amount of your contribution deduction
        before completing this form. See your tax return instructions.&#160;
      </p>
      <p
        style="position:absolute;top:181px;left:54px;white-space:nowrap"
        class="ft114"
      >
        <b
          >Section&#160;&#160;A.&#160;&#160;Donated&#160;&#160;Property&#160;&#160;of&#160;&#160;$5,000&#160;&#160;or&#160;&#160;Less&#160;&#160;and&#160;&#160;Publicly&#160;&#160;Traded&#160;&#160;Securities—</b
        >List&#160;&#160;in&#160;&#160;this&#160;&#160;section&#160;&#160;<b>only&#160;&#160;</b>an<b>&#160;&#160;</b>item&#160;&#160;(or&#160;&#160;groups&#160;&#160;of&#160;
      </p>
      <p
        style="position:absolute;top:196px;left:126px;white-space:nowrap"
        class="ft110"
      >
        similar&#160;items)&#160;for&#160;which&#160;you&#160;claimed&#160;a&#160;deduction&#160;of&#160;$5,000&#160;or&#160;less.&#160;Also&#160;list&#160;publicly&#160;traded&#160;securities&#160;and&#160;certain&#160;other&#160;
      </p>
      <p
        style="position:absolute;top:211px;left:126px;white-space:nowrap"
        class="ft110"
      >
        property even if the deduction is more than $5,000 (see
        instructions).&#160;
      </p>
      <p
        style="position:absolute;top:235px;left:62px;white-space:nowrap;color:white"
        class="ft111"
      >
        <b>Part I&#160;</b>
      </p>
      <p
        style="position:absolute;top:233px;left:129px;white-space:nowrap"
        class="ft112"
      >
        &#160;
      </p>
      <p
        style="position:absolute;top:233px;left:133px;white-space:nowrap"
        class="ft17"
      >
        <b>Information on Donated Property—</b>If you need more space, attach a
        statement.&#160;
      </p>
      <p
        style="position:absolute;top:269px;left:66px;white-space:nowrap"
        class="ft19"
      >
        <b>1&#160;</b>
      </p>
      <p
        style="position:absolute;top:265px;left:148px;white-space:nowrap"
        class="ft18"
      >
        <b>(a)&#160;</b>&#160;Name and address of the&#160;<b>&#160;&#160;</b>
      </p>
      <!-- Information on Donated Property 1A -->
      <p style="position:absolute;top:307px;left:88px;">
        Name
        <input
          v-model="
            informationOnDonatedProperty.DoneeOrganizationName
              .BusinessNameLine1Txt
          "
          v-uppercase
          class="no-outline"
          type="text"
          title="Employee's City"
          data-line-number="f"
          style="text-align:left;width:226px; height:17px"
        />
      </p>
      <div
        class="input-area city-town"
        style="position:absolute;top:325px;left:88px"
      >
        <input
          v-model="
            informationOnDonatedProperty.DoneeOrganizationFrgnAddress
              .AddressLine1Txt
          "
          v-uppercase
          class="no-outline"
          type="text"
          placeholder="Street"
          title="Stree address"
          data-line-number="f"
          style="text-align:left;width:80px; height:16px"
        />
        <input
          v-model="
            informationOnDonatedProperty.DoneeOrganizationFrgnAddress.CityNm
          "
          v-uppercase
          class="no-outline"
          type="text"
          title="Employee's City"
          placeholder="City"
          data-line-number="f"
          style="text-align:left;width:60px; height:16px"
        />
        <select
          v-model="
            informationOnDonatedProperty.DoneeOrganizationFrgnAddress
              .StateAbbreviationCd
          "
          v-uppercase
          name="state"
          title="Select State"
          style="width:50px;height:16px;border:none;background-color: #f1f4ff;"
          class="no-outline"
        >
          <option value=" "></option>
          <option v-for="state in stateList" :key="state" :value="state">{{
            state
          }}</option>
        </select>
        <input
          v-model="
            informationOnDonatedProperty.DoneeOrganizationFrgnAddress.ZIPCd
          "
          v-mask="'#####'"
          class="no-outline"
          name="ZIPCd"
          type="number"
          title="Employee's ZIP Code"
          data-line-number="f"
          placeholder="ZIP"
          style="text-align:left;width:58px; height:16px"
        />
      </div>
      <label
        style="position:absolute;top:307px;left:469px;"
        class="checkbox-container"
      >
        <input
          id="MarriedFilingSeparatelyExcInd"
          v-model="informationOnDonatedProperty.DonatedPropertyVehicleInd"
          name="MarriedFilingSeparatelyExcInd"
          class="no-outline checkbox"
          type="checkbox"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <div
        class="input-area city-town"
        style="position:absolute;top:323px;left:346px"
      >
        <input
          v-model="informationOnDonatedProperty.VIN"
          v-uppercase
          class="no-outline"
          type="text"
          maxlength="17"
          title="Line 1A(b). Enter the vehicle identification number."
          data-line-number="f"
          style="text-align:left;width:257px; height:18px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:323px;left:605px">
        <input
          v-model="informationOnDonatedProperty.DonatedPropertyDesc"
          v-uppercase
          class="no-outline"
          data-line-number="1A(c)"
          type="text"
          maxlength="17"
          title="Line 1A(c).
          Description and condition of donated property.)"
          style="text-align:left;width:259px; height:18px"
        />
      </div>
      <!-- Information on Donated Property 1B -->
      <p style="position:absolute;top:343px;left:88px;">
        Name
        <input
          v-model="
            informationOnDonatedProperty.DoneeOrganizationName
              .BusinessNameLine1Txt2
          "
          v-uppercase
          class="no-outline"
          type="text"
          title="Employee's City"
          data-line-number="f"
          style="text-align:left;width:226px; height:17px"
        />
      </p>
      <div
        class="input-area city-town"
        style="position:absolute;top:361px;left:88px"
      >
        <input
          v-model="
            informationOnDonatedProperty.DoneeOrganizationFrgnAddress
              .AddressLine1Txt2
          "
          v-uppercase
          class="no-outline"
          type="text"
          placeholder="Street"
          title="Stree address"
          data-line-number="f"
          style="text-align:left;width:80px; height:16px"
        />
        <input
          v-model="
            informationOnDonatedProperty.DoneeOrganizationFrgnAddress.CityNm2
          "
          v-uppercase
          class="no-outline"
          type="text"
          title="Employee's City"
          placeholder="City"
          data-line-number="f"
          style="text-align:left;width:60px; height:16px"
        />
        <select
          v-model="
            informationOnDonatedProperty.DoneeOrganizationFrgnAddress
              .StateAbbreviationCd2
          "
          v-uppercase
          name="state"
          title="Select State"
          style="width:50px;height:16px;border:none;background-color: #f1f4ff;"
          class="no-outline"
        >
          <option value=" "></option>
          <option v-for="state in stateList" :key="state" :value="state">{{
            state
          }}</option>
        </select>
        <input
          v-model="
            informationOnDonatedProperty.DoneeOrganizationFrgnAddress.ZIPCd2
          "
          v-mask="'#####'"
          class="no-outline"
          name="ZIPCd"
          type="number"
          title="Employee's ZIP Code"
          data-line-number="f"
          placeholder="ZIP"
          style="text-align:left;width:58px; height:16px"
        />
      </div>
      <label
        style="position:absolute;top:344px;left:469px;"
        class="checkbox-container"
      >
        <input
          id="MarriedFilingSeparatelyExcInd2"
          v-model="informationOnDonatedProperty.DonatedPropertyVehicleInd2"
          name="MarriedFilingSeparatelyExcInd2"
          class="no-outline checkbox"
          type="checkbox"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <div
        class="input-area city-town"
        style="position:absolute;top:360px;left:346px"
      >
        <input
          v-model="informationOnDonatedProperty.VIN2"
          v-uppercase
          class="no-outline"
          type="text"
          maxlength="17"
          title="Line 1A(b). Enter the vehicle identification number."
          data-line-number="f"
          style="text-align:left;width:257px; height:18px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:360px;left:605px">
        <input
          v-model="informationOnDonatedProperty.DonatedPropertyDesc2"
          v-uppercase
          class="no-outline"
          data-line-number="1A(c)"
          type="text"
          maxlength="17"
          title="Line 1A(c).
          Description and condition of donated property.)"
          style="text-align:left;width:259px; height:18px"
        />
      </div>
      <!-- Information on Donated Property 1C -->
      <p style="position:absolute;top:379px;left:88px;">
        Name
        <input
          v-model="
            informationOnDonatedProperty.DoneeOrganizationName
              .BusinessNameLine1Txt3
          "
          v-uppercase
          class="no-outline"
          type="text"
          title="Employee's City"
          data-line-number="f"
          style="text-align:left;width:226px; height:17px"
        />
      </p>
      <div
        class="input-area city-town"
        style="position:absolute;top:397px;left:88px"
      >
        <input
          v-model="
            informationOnDonatedProperty.DoneeOrganizationFrgnAddress
              .AddressLine1Txt3
          "
          v-uppercase
          class="no-outline"
          type="text"
          placeholder="Street"
          title="Stree address"
          data-line-number="f"
          style="text-align:left;width:80px; height:16px"
        />
        <input
          v-model="
            informationOnDonatedProperty.DoneeOrganizationFrgnAddress.CityNm3
          "
          v-uppercase
          class="no-outline"
          type="text"
          title="Employee's City"
          placeholder="City"
          data-line-number="f"
          style="text-align:left;width:60px; height:16px"
        />
        <select
          v-model="
            informationOnDonatedProperty.DoneeOrganizationFrgnAddress
              .StateAbbreviationCd3
          "
          v-uppercase
          name="state"
          title="Select State"
          style="width:50px;height:16px;border:none;background-color: #f1f4ff;"
          class="no-outline"
        >
          <option value=" "></option>
          <option v-for="state in stateList" :key="state" :value="state">{{
            state
          }}</option>
        </select>
        <input
          v-model="
            informationOnDonatedProperty.DoneeOrganizationFrgnAddress.ZIPCd3
          "
          v-mask="'#####'"
          class="no-outline"
          name="ZIPCd"
          type="number"
          title="Employee's ZIP Code"
          data-line-number="f"
          placeholder="ZIP"
          style="text-align:left;width:58px; height:16px"
        />
      </div>
      <label
        style="position:absolute;top:380px;left:469px;"
        class="checkbox-container"
      >
        <input
          id="MarriedFilingSeparatelyExcInd2"
          v-model="informationOnDonatedProperty.DonatedPropertyVehicleInd3"
          name="MarriedFilingSeparatelyExcInd2"
          class="no-outline checkbox"
          type="checkbox"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <div
        class="input-area city-town"
        style="position:absolute;top:396px;left:346px"
      >
        <input
          v-model="informationOnDonatedProperty.VIN3"
          v-uppercase
          class="no-outline"
          type="text"
          maxlength="17"
          title="Line 1A(b). Enter the vehicle identification number."
          data-line-number="f"
          style="text-align:left;width:257px; height:18px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:396px;left:605px">
        <input
          v-model="informationOnDonatedProperty.DonatedPropertyDesc3"
          v-uppercase
          class="no-outline"
          data-line-number="1A(c)"
          type="text"
          maxlength="17"
          title="Line 1A(c).
          Description and condition of donated property.)"
          style="text-align:left;width:259px; height:18px"
        />
      </div>
      <!-- Information on Donated Property 1D -->
      <p style="position:absolute;top:415px;left:88px;">
        Name
        <input
          v-model="
            informationOnDonatedProperty.DoneeOrganizationName
              .BusinessNameLine1Txt4
          "
          v-uppercase
          class="no-outline"
          type="text"
          title="Employee's City"
          data-line-number="f"
          style="text-align:left;width:226px; height:17px"
        />
      </p>
      <div
        class="input-area city-town"
        style="position:absolute;top:433px;left:88px"
      >
        <input
          v-model="
            informationOnDonatedProperty.DoneeOrganizationFrgnAddress
              .AddressLine1Txt4
          "
          v-uppercase
          class="no-outline"
          type="text"
          placeholder="Street"
          title="Stree address"
          data-line-number="f"
          style="text-align:left;width:80px; height:16px"
        />
        <input
          v-model="
            informationOnDonatedProperty.DoneeOrganizationFrgnAddress.CityNm4
          "
          v-uppercase
          class="no-outline"
          type="text"
          title="Employee's City"
          placeholder="City"
          data-line-number="f"
          style="text-align:left;width:60px; height:16px"
        />
        <select
          v-model="
            informationOnDonatedProperty.DoneeOrganizationFrgnAddress
              .StateAbbreviationCd4
          "
          v-uppercase
          name="state"
          title="Select State"
          style="width:50px;height:16px;border:none;background-color: #f1f4ff;"
          class="no-outline"
        >
          <option value=" "></option>
          <option v-for="state in stateList" :key="state" :value="state">{{
            state
          }}</option>
        </select>
        <input
          v-model="
            informationOnDonatedProperty.DoneeOrganizationFrgnAddress.ZIPCd4
          "
          v-mask="'#####'"
          class="no-outline"
          name="ZIPCd"
          type="number"
          title="Employee's ZIP Code"
          data-line-number="f"
          placeholder="ZIP"
          style="text-align:left;width:58px; height:16px"
        />
      </div>
      <label
        style="position:absolute;top:415px;left:470px;"
        class="checkbox-container"
      >
        <input
          id="MarriedFilingSeparatelyExcInd2"
          v-model="informationOnDonatedProperty.DonatedPropertyVehicleInd4"
          name="MarriedFilingSeparatelyExcInd2"
          class="no-outline checkbox"
          type="checkbox"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <div
        class="input-area city-town"
        style="position:absolute;top:431px;left:346px"
      >
        <input
          v-model="informationOnDonatedProperty.VIN4"
          v-uppercase
          class="no-outline"
          type="text"
          maxlength="17"
          title="Line 1A(b). Enter the vehicle identification number."
          data-line-number="f"
          style="text-align:left;width:257px; height:18px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:432px;left:605px">
        <input
          v-model="informationOnDonatedProperty.DonatedPropertyDesc4"
          v-uppercase
          class="no-outline"
          data-line-number="1A(c)"
          type="text"
          maxlength="17"
          title="Line 1A(c).
          Description and condition of donated property.)"
          style="text-align:left;width:259px; height:18px"
        />
      </div>
      <!-- Information on Donated Property 1E -->
      <p style="position:absolute;top:451px;left:88px;">
        Name
        <input
          v-model="
            informationOnDonatedProperty.DoneeOrganizationName
              .BusinessNameLine1Txt5
          "
          v-uppercase
          class="no-outline"
          type="text"
          title="Employee's City"
          data-line-number="f"
          style="text-align:left;width:226px; height:17px"
        />
      </p>
      <div
        class="input-area city-town"
        style="position:absolute;top:469px;left:88px"
      >
        <input
          v-model="
            informationOnDonatedProperty.DoneeOrganizationFrgnAddress
              .AddressLine1Txt5
          "
          v-uppercase
          class="no-outline"
          type="text"
          placeholder="Street"
          title="Stree address"
          data-line-number="f"
          style="text-align:left;width:80px; height:16px"
        />
        <input
          v-model="
            informationOnDonatedProperty.DoneeOrganizationFrgnAddress.CityNm5
          "
          v-uppercase
          class="no-outline"
          type="text"
          title="Employee's City"
          placeholder="City"
          data-line-number="f"
          style="text-align:left;width:60px; height:16px"
        />
        <select
          v-model="
            informationOnDonatedProperty.DoneeOrganizationFrgnAddress
              .StateAbbreviationCd5
          "
          v-uppercase
          name="state"
          title="Select State"
          style="width:50px;height:16px;border:none;background-color: #f1f4ff;"
          class="no-outline"
        >
          <option value=" "></option>
          <option v-for="state in stateList" :key="state" :value="state">{{
            state
          }}</option>
        </select>
        <input
          v-model="
            informationOnDonatedProperty.DoneeOrganizationFrgnAddress.ZIPCd5
          "
          v-mask="'#####'"
          class="no-outline"
          name="ZIPCd"
          type="number"
          title="Employee's ZIP Code"
          data-line-number="f"
          placeholder="ZIP"
          style="text-align:left;width:58px; height:16px"
        />
      </div>
      <label
        style="position:absolute;top:452px;left:470px;"
        class="checkbox-container"
      >
        <input
          id="MarriedFilingSeparatelyExcInd5"
          v-model="informationOnDonatedProperty.DonatedPropertyVehicleInd5"
          name="MarriedFilingSeparatelyExcInd5"
          class="no-outline checkbox"
          type="checkbox"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <div
        class="input-area city-town"
        style="position:absolute;top:467px;left:346px"
      >
        <input
          v-model="informationOnDonatedProperty.VIN5"
          v-uppercase
          class="no-outline"
          type="text"
          maxlength="17"
          title="Line 1A(b). Enter the vehicle identification number."
          data-line-number="f"
          style="text-align:left;width:257px; height:18px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:468px;left:605px">
        <input
          v-model="informationOnDonatedProperty.DonatedPropertyDesc5"
          v-uppercase
          class="no-outline"
          data-line-number="1A(c)"
          type="text"
          maxlength="17"
          title="Line 1A(c).
          Description and condition of donated property.)"
          style="text-align:left;width:259px; height:18px"
        />
      </div>
      <p
        style="position:absolute;top:278px;left:171px;white-space:nowrap"
        class="ft10"
      >
        donee organization
      </p>
      <p
        style="position:absolute;top:258px;left:352px;white-space:nowrap"
        class="ft18"
      >
        <b>(b)&#160;</b>If donated property is a vehicle (see
        instructions),&#160;
      </p>
      <p
        style="position:absolute;top:271px;left:357px;white-space:nowrap"
        class="ft10"
      >
        check the box. Also enter the vehicle identification&#160;
      </p>
      <p
        style="position:absolute;top:284px;left:376px;white-space:nowrap"
        class="ft10"
      >
        number (unless Form 1098-C is attached).
      </p>
      <p
        style="position:absolute;top:252px;left:617px;white-space:nowrap"
        class="ft18"
      >
        <b>(c) &#160;</b>Description and condition of donated property&#160;<b
          >&#160;&#160;</b
        >
      </p>
      <p
        style="position:absolute;top:265px;left:623px;white-space:nowrap"
        class="ft10"
      >
        (For a vehicle, enter the year, make, model, and&#160;
      </p>
      <p
        style="position:absolute;top:278px;left:635px;white-space:nowrap"
        class="ft10"
      >
        mileage. For securities and other property, &#160; &#160; &#160; &#160;
        &#160;&#160;
      </p>
      <p
        style="position:absolute;top:290px;left:695px;white-space:nowrap"
        class="ft10"
      >
        see instructions.)&#160;
      </p>
      <p
        style="position:absolute;top:316px;left:66px;white-space:nowrap"
        class="ft19"
      >
        <b>A&#160;</b>
      </p>
      <p
        style="position:absolute;top:352px;left:65px;white-space:nowrap"
        class="ft19"
      >
        <b>B&#160;</b>
      </p>
      <p
        style="position:absolute;top:388px;left:65px;white-space:nowrap"
        class="ft19"
      >
        <b>C&#160;</b>
      </p>
      <p
        style="position:absolute;top:424px;left:65px;white-space:nowrap"
        class="ft19"
      >
        <b>D&#160;</b>
      </p>
      <p
        style="position:absolute;top:460px;left:66px;white-space:nowrap"
        class="ft19"
      >
        <b>E&#160;</b>
      </p>
      <p
        style="position:absolute;top:485px;left:54px;white-space:nowrap"
        class="ft19"
      >
        <b>Note:&#160;</b>If the amount you claimed as a deduction for an item
        is $500 or less, you do not have to complete columns (e), (f), and
        (g).&#160;
      </p>
      <p
        style="position:absolute;top:508px;left:100px;white-space:nowrap"
        class="ft18"
      >
        <b>(d) &#160;</b>Date of the&#160;<b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:521px;left:107px;white-space:nowrap"
        class="ft10"
      >
        contribution&#160;
      </p>
      <!-- Line A  -->
      <div class="input-area" style="position:absolute;top:541px;left:87px">
        <input
          v-model="PropertyInformation.ContributionDt"
          class="no-outline"
          type="date"
          title="Line A(d). Date of the contribution."
          style="text-align:left;width:96px; height:17px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:541px;left:184px">
        <input
          v-model="PropertyInformation.DonorAcquiredDt"
          v-uppercase
          class="no-outline DonorAcquiredDt"
          type="text"
          title="Line A(e). Date acquired by donor. Enter the date as 'mm/yy'. If
        you are donating a group of similar items and you acquired the items on
        various dates (but have held all the items for at least 12 months), you
        can enter 'VARIOUS'."
          style="text-align:left;width:96px; height:17px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:541px;left:281px">
        <input
          v-model="PropertyInformation.DonorAcquisitionDesc"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line A(f). How acquired by donor."
          style="text-align:left;width:140px; height:17px"
        />
      </div>
      <money-input
        v-model="PropertyInformation.DonorCostOrAdjustedBasisAmt"
        :line="'A(g)'"
        :width="106"
        :div-style="'position:absolute;top:541px;left:423px'"
        title="Line A(g). Donor's cost or adjusted basis."
      />
      <money-input
        v-model="PropertyInformation.FairMarketValueAmt"
        :line="'A(h)'"
        :width="106"
        :div-style="'position:absolute;top:541px;left:531px'"
        title="Line A(g). Donor's cost or adjusted basis."
      />
      <div class="input-area" style="position:absolute;top:541px;left:638px">
        <input
          v-model="PropertyInformation.FairMarketValueMethodDesc"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line A(i). Method used to determine the fair market value."
          style="text-align:left;width:226px; height:17px"
        />
      </div>
      <!-- Line B  -->
      <div class="input-area" style="position:absolute;top:559px;left:87px">
        <input
          v-model="PropertyInformation.ContributionDt2"
          class="no-outline"
          type="date"
          title="Line A(d). Date of the contribution."
          style="text-align:left;width:96px; height:17px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:559px;left:184px">
        <input
          v-model="PropertyInformation.DonorAcquiredDt2"
          v-uppercase
          class="no-outline DonorAcquiredDt"
          type="text"
          title="Line A(e). Date acquired by donor. Enter the date as 'mm/yy'. If
        you are donating a group of similar items and you acquired the items on
        various dates (but have held all the items for at least 12 months), you
        can enter 'VARIOUS'."
          style="text-align:left;width:96px; height:17px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:559px;left:281px">
        <input
          v-model="PropertyInformation.DonorAcquisitionDesc2"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line A(f). How acquired by donor."
          style="text-align:left;width:140px; height:17px"
        />
      </div>
      <money-input
        v-model="PropertyInformation.DonorCostOrAdjustedBasisAmt2"
        :line="'A(g)'"
        :width="106"
        :div-style="'position:absolute;top:559px;left:423px'"
        title="Line A(g). Donor's cost or adjusted basis."
      />
      <money-input
        v-model="PropertyInformation.FairMarketValueAmt2"
        :line="'A(h)'"
        :width="106"
        :div-style="'position:absolute;top:559px;left:531px'"
        title="Line A(g). Donor's cost or adjusted basis."
      />
      <div class="input-area" style="position:absolute;top:559px;left:638px">
        <input
          v-model="PropertyInformation.FairMarketValueMethodDesc2"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line A(i). Method used to determine the fair market value."
          style="text-align:left;width:226px; height:17px"
        />
      </div>
      <!-- Line C  -->
      <div class="input-area" style="position:absolute;top:577px;left:87px">
        <input
          v-model="PropertyInformation.ContributionDt3"
          class="no-outline"
          type="date"
          title="Line A(d). Date of the contribution."
          style="text-align:left;width:96px; height:17px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:577px;left:184px">
        <input
          v-model="PropertyInformation.DonorAcquiredDt3"
          v-uppercase
          class="no-outline DonorAcquiredDt"
          type="text"
          title="Line A(e). Date acquired by donor. Enter the date as 'mm/yy'. If
        you are donating a group of similar items and you acquired the items on
        various dates (but have held all the items for at least 12 months), you
        can enter 'VARIOUS'."
          style="text-align:left;width:96px; height:17px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:577px;left:281px">
        <input
          v-model="PropertyInformation.DonorAcquisitionDesc3"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line A(f). How acquired by donor."
          style="text-align:left;width:140px; height:17px"
        />
      </div>
      <money-input
        v-model="PropertyInformation.DonorCostOrAdjustedBasisAmt3"
        :line="'A(g)'"
        :width="106"
        :div-style="'position:absolute;top:577px;left:423px'"
        title="Line A(g). Donor's cost or adjusted basis."
      />
      <money-input
        v-model="PropertyInformation.FairMarketValueAmt3"
        :line="'A(h)'"
        :width="106"
        :div-style="'position:absolute;top:577px;left:531px'"
        title="Line A(g). Donor's cost or adjusted basis."
      />
      <div class="input-area" style="position:absolute;top:577px;left:638px">
        <input
          v-model="PropertyInformation.FairMarketValueMethodDesc3"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line A(i). Method used to determine the fair market value."
          style="text-align:left;width:226px; height:17px"
        />
      </div>
      <!-- Line D  -->
      <div class="input-area" style="position:absolute;top:595px;left:87px">
        <input
          v-model="PropertyInformation.ContributionDt4"
          class="no-outline"
          type="date"
          title="Line A(d). Date of the contribution."
          style="text-align:left;width:96px; height:17px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:595px;left:184px">
        <input
          v-model="PropertyInformation.DonorAcquiredDt4"
          v-uppercase
          class="no-outline DonorAcquiredDt"
          type="text"
          title="Line A(e). Date acquired by donor. Enter the date as 'mm/yy'. If
        you are donating a group of similar items and you acquired the items on
        various dates (but have held all the items for at least 12 months), you
        can enter 'VARIOUS'."
          style="text-align:left;width:96px; height:17px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:595px;left:281px">
        <input
          v-model="PropertyInformation.DonorAcquisitionDesc4"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line A(f). How acquired by donor."
          style="text-align:left;width:140px; height:17px"
        />
      </div>
      <money-input
        v-model="PropertyInformation.DonorCostOrAdjustedBasisAmt4"
        :line="'A(g)'"
        :width="106"
        :div-style="'position:absolute;top:595px;left:423px'"
        title="Line A(g). Donor's cost or adjusted basis."
      />
      <money-input
        v-model="PropertyInformation.FairMarketValueAmt4"
        :line="'A(h)'"
        :width="106"
        :div-style="'position:absolute;top:595px;left:531px'"
        title="Line A(g). Donor's cost or adjusted basis."
      />
      <div class="input-area" style="position:absolute;top:595px;left:638px">
        <input
          v-model="PropertyInformation.FairMarketValueMethodDesc4"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line A(i). Method used to determine the fair market value."
          style="text-align:left;width:226px; height:17px"
        />
      </div>
      <!-- Line E  -->
      <div class="input-area" style="position:absolute;top:613px;left:87px">
        <input
          v-model="PropertyInformation.ContributionDt5"
          class="no-outline"
          type="date"
          title="Line A(d). Date of the contribution."
          style="text-align:left;width:96px; height:17px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:613px;left:184px">
        <input
          v-model="PropertyInformation.DonorAcquiredDt5"
          v-uppercase
          class="no-outline DonorAcquiredDt"
          type="text"
          title="Line A(e). Date acquired by donor. Enter the date as 'mm/yy'. If
        you are donating a group of similar items and you acquired the items on
        various dates (but have held all the items for at least 12 months), you
        can enter 'VARIOUS'."
          style="text-align:left;width:96px; height:17px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:613px;left:281px">
        <input
          v-model="PropertyInformation.DonorAcquisitionDesc5"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line A(f). How acquired by donor."
          style="text-align:left;width:140px; height:17px"
        />
      </div>
      <money-input
        v-model="PropertyInformation.DonorCostOrAdjustedBasisAmt5"
        :line="'A(g)'"
        :width="106"
        :div-style="'position:absolute;top:613px;left:423px'"
        title="Line A(g). Donor's cost or adjusted basis."
      />
      <money-input
        v-model="PropertyInformation.FairMarketValueAmt5"
        :line="'A(h)'"
        :width="106"
        :div-style="'position:absolute;top:613px;left:531px'"
        title="Line A(g). Donor's cost or adjusted basis."
      />
      <div class="input-area" style="position:absolute;top:613px;left:638px">
        <input
          v-model="PropertyInformation.FairMarketValueMethodDesc5"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line A(i). Method used to determine the fair market value."
          style="text-align:left;width:226px; height:17px"
        />
      </div>
      <p
        style="position:absolute;top:508px;left:190px;white-space:nowrap"
        class="ft18"
      >
        <b>(e) &#160;</b>Date acquired&#160;<b>&#160;&#160;</b>
      </p>
      <p
        style="position:absolute;top:521px;left:189px;white-space:nowrap"
        class="ft10"
      >
        by donor (mo., yr.)&#160;
      </p>
      <p
        style="position:absolute;top:508px;left:310px;white-space:nowrap"
        class="ft18"
      >
        <b>(f) &#160;</b>How acquired&#160;<b>&#160;&#160;</b>
      </p>
      <p
        style="position:absolute;top:521px;left:330px;white-space:nowrap"
        class="ft10"
      >
        by donor&#160;
      </p>
      <p
        style="position:absolute;top:508px;left:436px;white-space:nowrap"
        class="ft18"
      >
        <b>(g) &#160;</b>Donor’s cost&#160;<b>&#160;&#160;</b>
      </p>
      <p
        style="position:absolute;top:521px;left:435px;white-space:nowrap"
        class="ft10"
      >
        or adjusted basis&#160;
      </p>
      <p
        style="position:absolute;top:520px;left:518px;white-space:nowrap"
        class="ft18"
      >
        <b>&#160;</b>&#160;
      </p>
      <p
        style="position:absolute;top:508px;left:534px;white-space:nowrap"
        class="ft18"
      >
        <b>(h) &#160;</b>Fair market value&#160;<b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:521px;left:544px;white-space:nowrap"
        class="ft10"
      >
        (see instructions)&#160;
      </p>
      <p
        style="position:absolute;top:520px;left:626px;white-space:nowrap"
        class="ft18"
      >
        <b>&#160;</b>&#160;
      </p>
      <p
        style="position:absolute;top:508px;left:681px;white-space:nowrap"
        class="ft18"
      >
        <b>(i) &#160;</b>Method used to determine&#160;<b>&#160;&#160;</b>
      </p>
      <p
        style="position:absolute;top:521px;left:703px;white-space:nowrap"
        class="ft10"
      >
        the fair market value&#160;
      </p>
      <p
        style="position:absolute;top:541px;left:66px;white-space:nowrap"
        class="ft115"
      >
        <b>A</b>
      </p>
      <p
        style="position:absolute;top:560px;left:66px;white-space:nowrap"
        class="ft115"
      >
        <b>B</b>
      </p>
      <p
        style="position:absolute;top:578px;left:66px;white-space:nowrap"
        class="ft115"
      >
        <b>C</b>
      </p>
      <p
        style="position:absolute;top:596px;left:66px;white-space:nowrap"
        class="ft115"
      >
        <b>D</b>
      </p>
      <p
        style="position:absolute;top:614px;left:66px;white-space:nowrap"
        class="ft115"
      >
        <b>E</b>
      </p>
      <p
        style="position:absolute;top:631px;left:60px;white-space:nowrap;color:white"
        class="ft111"
      >
        <b>Part II&#160;</b>
      </p>
      <p
        style="position:absolute;top:630px;left:129px;white-space:nowrap"
        class="ft17"
      >
        <b
          >Partial&#160;&#160;Interests&#160;&#160;and&#160;&#160;Restricted&#160;&#160;Use&#160;&#160;Property—</b
        >Complete&#160;&#160;lines&#160;&#160;2a&#160;&#160;through&#160;&#160;2e&#160;&#160;if&#160;&#160;you&#160;&#160;gave&#160;&#160;less&#160;&#160;than&#160;&#160;an&#160;
      </p>
      <p
        style="position:absolute;top:647px;left:129px;white-space:nowrap"
        class="ft112"
      >
        entire&#160;&#160;interest&#160;&#160;in&#160;&#160;a&#160;&#160;property&#160;&#160;listed&#160;&#160;in&#160;&#160;Part&#160;&#160;I.&#160;&#160;Complete&#160;&#160;lines&#160;&#160;3a&#160;&#160;through&#160;&#160;3c&#160;&#160;if&#160;&#160;conditions&#160;&#160;were&#160;&#160;placed&#160;&#160;on&#160;&#160;a&#160;
      </p>
      <p
        style="position:absolute;top:663px;left:129px;white-space:nowrap"
        class="ft112"
      >
        contribution listed in Part I; also attach the required statement (see
        instructions).&#160;
      </p>
      <p
        style="position:absolute;top:685px;left:68px;white-space:nowrap"
        class="ft19"
      >
        <b>2a&#160;</b>Enter the letter from Part I that identifies the property
        for which you gave less than an entire interest<b>&#160;</b>▶
      </p>
      <div style="position:absolute;top:686px;left:724px;">
        <input
          id="partialInterest"
          v-model="PropertyInformation.partialInterest"
          v-uppercase
          name="ControlNum"
          data-line-number="12a"
          class="no-outline"
          style="width:141px;height:16px"
          type="text"
        />
      </div>
      <money-input
        v-model="informationOnDonatedProperty.totalDeductionClaimedThisTYAmt"
        :line="'2b'"
        :width="142"
        :div-style="'position:absolute;top:721px;left:722px'"
        title="Line 2b(1). Total amount claimed as a deduction for the property listed in Part I for this tax year."
      />
      <money-input
        v-model="informationOnDonatedProperty.totalDeductionClaimedPrTYAmt"
        :line="'2'"
        :width="142"
        :div-style="'position:absolute;top:739px;left:722px'"
        title="Line 2b(2). Total amount claimed as a deduction for the property listed in Part I for any prior tax years."
      />
      <p
        style="position:absolute;top:703px;left:97px;white-space:nowrap"
        class="ft110"
      >
        If Part II applies to more than one property, attach a separate
        statement.&#160;
      </p>
      <p
        style="position:absolute;top:721px;left:76px;white-space:nowrap"
        class="ft19"
      >
        <b>b&#160;&#160;</b>Total amount claimed as a deduction for the property
        listed in Part I:&#160;<b>(1)&#160;&#160;</b>For this tax year &#160;
        &#160; &#160; &#160; &#160; &#160; &#160;▶
      </p>
      <p
        style="position:absolute;top:739px;left:518px;white-space:nowrap"
        class="ft19"
      >
        <b>(2)&#160;&#160;</b>For any prior tax years &#160; &#160;▶
      </p>
      <p
        style="position:absolute;top:755px;left:76px;white-space:nowrap"
        class="ft19"
      >
        <b>c&#160;</b>Name and address of each organization to which any such
        contribution was made in a prior year (complete only if different &#160;
      </p>
      <div style="position:absolute;top:809px;left:98px;">
        <input
          id="partialInterest"
          v-model="
            informationOnDonatedProperty.OrganizationNm.BusinessNameLine1Txt
          "
          v-uppercase
          name="ControlNum"
          data-line-number="12a"
          class="no-outline"
          style="width:768px;height:19px"
          type="text"
        />
      </div>
      <p
        style="position:absolute;top:773px;left:97px;white-space:nowrap"
        class="ft114"
      >
        from the donee organization above):&#160;<br />Name of charitable
        organization (donee)
      </p>
      <p
        style="position:absolute;top:792px;left:284px;white-space:nowrap"
        class="ft14"
      >
        &#160;
      </p>
      <p
        style="position:absolute;top:828px;left:97px;white-space:nowrap"
        class="ft10"
      >
        Address (number, street, and room or suite no.)&#160;
      </p>
      <div
        class="input-area city-town"
        style="position:absolute;top:846px;left:98px;"
      >
        <input
          v-model="
            informationOnDonatedProperty.OrganizatonUSAddress.AddressLine1Txt
          "
          v-uppercase
          class="no-outline"
          type="text"
          title="Stree address"
          data-line-number="f"
          style="text-align:left;width:768px; height:18px"
        />
      </div>
      <div
        class="input-area city-town"
        style="position:absolute;top:882px;left:98px;"
      >
        <input
          v-model="informationOnDonatedProperty.OrganizatonUSAddress.CityNm"
          v-uppercase
          class="no-outline"
          type="text"
          title="Employee's City"
          data-line-number="f"
          style="text-align:left;width:572px; height:18px"
        />
        <select
          v-model="
            informationOnDonatedProperty.OrganizatonUSAddress
              .StateAbbreviationCd
          "
          v-uppercase
          name="state"
          title="Select State"
          style="width:100px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
        >
          <option value=" "></option>
          <option v-for="state in stateList" :key="state" :value="state">{{
            state
          }}</option>
        </select>
        <input
          v-model="informationOnDonatedProperty.OrganizatonUSAddress.ZIPCd"
          v-mask="'#####'"
          class="no-outline"
          name="ZIPCd"
          type="number"
          title="Employee's ZIP Code"
          data-line-number="f"
          style="text-align:left;width:90px; height:18px"
        />
      </div>
      <p
        style="position:absolute;top:865px;left:97px;white-space:nowrap"
        class="ft10"
      >
        City or town, state, and ZIP code&#160;
      </p>
      <p
        style="position:absolute;top:901px;left:76px;white-space:nowrap"
        class="ft116"
      >
        <b>d&#160;&#160;</b>For tangible property, enter the place where the
        property is located or kept&#160;▶<br /><b>e&#160;&#160;</b>Name of any
        person, other than the donee organization, having actual possession of
        the property&#160;▶
      </p>
      <div class="input-area" style="position:absolute;top:901px;left:572px;">
        <input
          v-model="informationOnDonatedProperty.TangiblePropertyLocationTxt"
          v-uppercase
          class="no-outline"
          type="text"
          title="Stree address"
          data-line-number="2d"
          style="text-align:left;width:293px; height:16px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:901px;left:572px;">
        <input
          v-model="informationOnDonatedProperty.TangiblePropertyLocationTxt"
          v-uppercase
          class="no-outline"
          type="text"
          title="Stree address"
          data-line-number="2d"
          style="text-align:left;width:163px; height:16px"
        />
      </div>
      <div
        class="input-area city-town"
        style="position:absolute;top:935px;left:98px;"
      >
        <input
          v-model="
            informationOnDonatedProperty.PersonPossessingPropBusName
              .BusinessNameLine1Txt
          "
          v-uppercase
          class="no-outline"
          type="text"
          title="Stree address"
          data-line-number="2e"
          style="text-align:left;width:768px; height:18px"
        />
      </div>
      <label
        style="position:absolute;top:992px;left:807px;"
        class="checkbox-container"
      >
        <input
          id="DonatedPropertyRestrictionInd"
          v-model="informationOnDonatedProperty.DonatedPropertyRestrictionInd"
          name="DonatedPropertyRestrictionInd"
          class="no-outline checkbox"
          type="radio"
          value="true"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:992px;left:840px;"
        class="checkbox-container"
      >
        <input
          id="DonatedPropertyRestrictionInd1"
          v-model="informationOnDonatedProperty.DonatedPropertyRestrictionInd"
          name="DonatedPropertyRestrictionInd"
          class="no-outline checkbox"
          type="radio"
          value="false"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:1063px;left:807px;"
        class="checkbox-container"
      >
        <input
          id="DonatedPropertyRightsGivenInd"
          v-model="informationOnDonatedProperty.DonatedPropertyRightsGivenInd"
          name="DonatedPropertyRightsGivenInd"
          class="no-outline checkbox"
          type="radio"
          value="true"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:1063px;left:840px;"
        class="checkbox-container"
      >
        <input
          id="DonatedPropertyRightsGivenInd1"
          v-model="informationOnDonatedProperty.DonatedPropertyRightsGivenInd"
          name="DonatedPropertyRightsGivenInd"
          class="no-outline checkbox"
          type="radio"
          value="false"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:1081px;left:807px;"
        class="checkbox-container"
      >
        <input
          id="DonatedPropertyLimitingRstrInd"
          v-model="informationOnDonatedProperty.DonatedPropertyLimitingRstrInd"
          name="DonatedPropertyLimitingRstrInd"
          class="no-outline checkbox"
          type="radio"
          value="true"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:1081px;left:840px;"
        class="checkbox-container"
      >
        <input
          id="DonatedPropertyLimitingRstrInd1"
          v-model="informationOnDonatedProperty.DonatedPropertyLimitingRstrInd"
          name="DonatedPropertyLimitingRstrInd"
          class="no-outline checkbox"
          type="radio"
          value="false"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:971px;left:68px;white-space:nowrap"
        class="ft19"
      >
        <b>3a&#160;</b
        >Is&#160;&#160;there&#160;&#160;a&#160;&#160;restriction,&#160;&#160;either&#160;&#160;temporary&#160;&#160;or&#160;&#160;permanent,&#160;&#160;on&#160;&#160;the&#160;&#160;donee’s&#160;&#160;right&#160;&#160;to&#160;&#160;use&#160;&#160;or&#160;&#160;dispose&#160;&#160;of&#160;&#160;the&#160;&#160;donated&#160;
      </p>
      <p
        style="position:absolute;top:989px;left:97px;white-space:nowrap"
        class="ft110"
      >
        property?&#160;&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:973px;left:803px;white-space:nowrap"
        class="ft19"
      >
        <b>Yes&#160;&#160;No&#160;</b>
      </p>
      <p
        style="position:absolute;top:1010px;left:76px;white-space:nowrap"
        class="ft19"
      >
        <b>b&#160;&#160;</b
        >Did&#160;&#160;you&#160;&#160;give&#160;&#160;to&#160;&#160;anyone&#160;&#160;(other&#160;&#160;than&#160;&#160;the&#160;&#160;donee&#160;&#160;organization&#160;&#160;or&#160;&#160;another&#160;&#160;organization&#160;&#160;participating&#160;&#160;with&#160;&#160;the&#160;&#160;donee&#160;
      </p>
      <p
        style="position:absolute;top:1028px;left:97px;white-space:nowrap"
        class="ft117"
      >
        organization&#160;in&#160;cooperative&#160;fundraising)&#160;the&#160;right&#160;to&#160;the&#160;income&#160;from&#160;the&#160;donated&#160;property&#160;or&#160;to&#160;the&#160;possession&#160;of&#160;<br />the&#160;property,&#160;including&#160;the&#160;right&#160;to&#160;vote&#160;donated&#160;securities,&#160;to&#160;acquire&#160;the&#160;property&#160;by&#160;purchase&#160;or&#160;otherwise,&#160;or&#160;to&#160;<br />designate
        the person having such income, possession, or right to
        acquire?&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:1079px;left:76px;white-space:nowrap"
        class="ft19"
      >
        <b>c&#160;&#160;</b>Is there a restriction limiting the donated property
        for a particular use?&#160;
      </p>
      <p
        style="position:absolute;top:1080px;left:540px;white-space:nowrap"
        class="ft110"
      >
        .&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.&#160;.
      </p>
      <p
        style="position:absolute;top:1101px;left:54px;white-space:nowrap"
        class="ft15"
      >
        <b
          >XOB For Paperwork Reduction Act Notice, see separate instructions.</b
        >
      </p>
      <p
        style="position:absolute;top:1103px;left:534px;white-space:nowrap"
        class="ft10"
      >
        Cat. No. 0000/1736
      </p>
      <p
        style="position:absolute;top:1102px;left:732px;white-space:nowrap"
        class="ft10"
      >
        Form&#160;
      </p>
      <p
        style="position:absolute;top:1097px;left:759px;white-space:nowrap"
        class="ft17"
      >
        <b>8283</b>&#160;(Rev. 11-2019)
      </p>
    </div>
    <div id="page2-div" style="position:relative;width:917px;height:1187px;">
      <!-- <img
        width="917"
        height="1187"
        src="irsf8283002.png"
        alt="background image"
      /> -->
      <p
        style="position:absolute;top:55px;left:54px;white-space:nowrap"
        class="ft20"
      >
        Form 8283 (Rev. 11-2019)
      </p>
      <p
        style="position:absolute;top:56px;left:829px;white-space:nowrap"
        class="ft20"
      >
        Page&#160;
      </p>
      <p
        style="position:absolute;top:52px;left:856px;white-space:nowrap"
        class="ft21"
      >
        <b>2&#160;</b>
      </p>
      <p
        style="position:absolute;top:74px;left:54px;white-space:nowrap"
        class="ft20"
      >
        Name(s) shown on your income tax return&#160;
      </p>
      <div class="input-area" style="position:absolute;top:87px;left:54px">
        <input
          id="name"
          v-model="Irs8283.name"
          name="name"
          class="no-outline"
          type="text"
          readonly
          style="width:658px;"
        />
      </div>
      <div class="input-area" style="position:absolute;top:87px;left:713px">
        <input
          id="ssn"
          v-model="Irs8283.ssn"
          v-mask="'###-##-####'"
          name="ssn"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          class="no-outline"
          type="password"
          readonly
          style="width:151px;"
        />
      </div>
      <p
        style="position:absolute;top:74px;left:719px;white-space:nowrap"
        class="ft22"
      >
        <b>Identifying number&#160;</b>
      </p>
      <p
        style="position:absolute;top:110px;left:54px;white-space:nowrap"
        class="ft23"
      >
        <b
          >Section&#160;B.&#160;Donated&#160;Property&#160;Over&#160;$5,000&#160;(Except&#160;Publicly&#160;Traded&#160;Securities,&#160;Vehicles,&#160;Intellectual&#160;Property&#160;or&#160;Inventory&#160;Reportable&#160;</b
        >
      </p>
      <p
        style="position:absolute;top:125px;left:123px;white-space:nowrap"
        class="ft23"
      >
        <b>in&#160;Section&#160;A)—</b
        >Complete&#160;this&#160;section&#160;for&#160;one&#160;item&#160;(or&#160;a&#160;group&#160;of&#160;similar&#160;items)&#160;for&#160;which&#160;you&#160;claimed&#160;a&#160;deduction&#160;of&#160;more&#160;than&#160;
      </p>
      <p
        style="position:absolute;top:141px;left:123px;white-space:nowrap"
        class="ft24"
      >
        $5,000&#160;per&#160;item&#160;or&#160;group&#160;(except&#160;contributions&#160;reportable&#160;in&#160;Section&#160;A).&#160;Provide&#160;a&#160;separate&#160;form&#160;for&#160;each&#160;item&#160;donated&#160;unless&#160;it&#160;
      </p>
      <p
        style="position:absolute;top:156px;left:123px;white-space:nowrap"
        class="ft24"
      >
        is part of a group of similar items. A qualified appraisal is generally
        required for items reportable in Section B. See instructions.
      </p>
      <p style="position:absolute;top:181px;left:62px;color:white" class="ft25">
        <b>Part I&#160;</b>
      </p>
      <!-- Line 4 First colum -->
      <label
        style="position:absolute;top:217px;left:98px;"
        class="checkbox-container"
      >
        <input
          id="ArtWorthAtLeast20000DollarsInd"
          v-model="Irs8283.ArtWorthAtLeast20000DollarsInd"
          name="ArtWorthAtLeast20000DollarsInd"
          class="no-outline checkbox"
          type="radio"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:236px;left:98px;"
        class="checkbox-container"
      >
        <input
          id="QualifiedConservationContriInd"
          v-model="Irs8283.QualifiedConservationContriInd"
          name="ArtWorthAtLeast20000DollarsInd"
          class="no-outline checkbox"
          type="radio"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:254px;left:98px;"
        class="checkbox-container"
      >
        <input
          id="EquipmentInd"
          v-model="Irs8283.EquipmentInd"
          name="ArtWorthAtLeast20000DollarsInd"
          class="no-outline checkbox"
          type="radio"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <!-- Line 4 Second column -->
      <label
        style="position:absolute;top:217px;left:356px;"
        class="checkbox-container"
      >
        <input
          id="ArtWorthLssThan20000DollarsInd"
          v-model="Irs8283.ArtWorthLssThan20000DollarsInd"
          name="ArtWorthAtLeast20000DollarsInd"
          class="no-outline checkbox"
          type="radio"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:236px;left:356px;"
        class="checkbox-container"
      >
        <input
          id="OtherRealEstateInd"
          v-model="Irs8283.OtherRealEstateInd"
          name="ArtWorthAtLeast20000DollarsInd"
          class="no-outline checkbox"
          type="radio"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:254px;left:356px;"
        class="checkbox-container"
      >
        <input
          id="SecuritiesInd"
          v-model="Irs8283.SecuritiesInd"
          name="ArtWorthAtLeast20000DollarsInd"
          class="no-outline checkbox"
          type="radio"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <!-- Line 4 3th column -->
      <label
        style="position:absolute;top:217px;left:627px;"
        class="checkbox-container"
      >
        <input
          id="CollectiblesInd"
          v-model="Irs8283.CollectiblesInd"
          name="ArtWorthAtLeast20000DollarsInd"
          class="no-outline checkbox"
          type="radio"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:236px;left:627px;"
        class="checkbox-container"
      >
        <input
          id="IntellectualPropertyInd"
          v-model="Irs8283.IntellectualPropertyInd"
          name="ArtWorthAtLeast20000DollarsInd"
          class="no-outline checkbox"
          type="radio"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:254px;left:627px;"
        class="checkbox-container"
      >
        <input
          id="VehicleInd"
          v-model="Irs8283.VehicleInd"
          name="ArtWorthAtLeast20000DollarsInd"
          class="no-outline checkbox"
          type="radio"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <!-- 4th column -->
      <label
        style="position:absolute;top:217px;left:789px;"
        class="checkbox-container"
      >
        <input
          id="OtherInd"
          v-model="Irs8283.OtherInd"
          name="ArtWorthAtLeast20000DollarsInd"
          class="no-outline checkbox"
          type="radio"
          value="X"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:181px;left:140px;white-space:nowrap"
        class="ft21"
      >
        <b>Information on Donated Property</b>
      </p>
      <p
        style="position:absolute;top:200px;left:61px;white-space:nowrap"
        class="ft23"
      >
        <b>4</b>
      </p>
      <p
        style="position:absolute;top:201px;left:97px;white-space:nowrap"
        class="ft26"
      >
        Check the box that describes the type of property donated.
      </p>
      <p
        style="position:absolute;top:217px;left:83px;white-space:nowrap"
        class="ft23"
      >
        <b>a</b>
      </p>
      <p
        style="position:absolute;top:219px;left:119px;white-space:nowrap"
        class="ft26"
      >
        Art* (contribution of $20,000 or more)&#160;
      </p>
      <p
        style="position:absolute;top:235px;left:82px;white-space:nowrap"
        class="ft23"
      >
        <b>b</b>
      </p>
      <p
        style="position:absolute;top:237px;left:119px;white-space:nowrap"
        class="ft26"
      >
        Qualified Conservation Contribution&#160;
      </p>
      <p
        style="position:absolute;top:253px;left:83px;white-space:nowrap"
        class="ft23"
      >
        <b>c</b>
      </p>
      <p
        style="position:absolute;top:255px;left:119px;white-space:nowrap"
        class="ft26"
      >
        Equipment&#160;
      </p>
      <p
        style="position:absolute;top:217px;left:341px;white-space:nowrap"
        class="ft23"
      >
        <b>d</b>
      </p>
      <p
        style="position:absolute;top:219px;left:378px;white-space:nowrap"
        class="ft26"
      >
        Art* (contribution of less than $20,000)&#160;
      </p>
      <p
        style="position:absolute;top:235px;left:342px;white-space:nowrap"
        class="ft23"
      >
        <b>e</b>
      </p>
      <p
        style="position:absolute;top:237px;left:378px;white-space:nowrap"
        class="ft26"
      >
        Other Real Estate&#160;
      </p>
      <p
        style="position:absolute;top:253px;left:343px;white-space:nowrap"
        class="ft23"
      >
        <b>f</b>
      </p>
      <p
        style="position:absolute;top:255px;left:378px;white-space:nowrap"
        class="ft26"
      >
        Securities
      </p>
      <p
        style="position:absolute;top:217px;left:611px;white-space:nowrap"
        class="ft23"
      >
        <b>g</b>
      </p>
      <p
        style="position:absolute;top:219px;left:648px;white-space:nowrap"
        class="ft26"
      >
        Collectibles**&#160;
      </p>
      <p
        style="position:absolute;top:235px;left:612px;white-space:nowrap"
        class="ft23"
      >
        <b>h</b>
      </p>
      <p
        style="position:absolute;top:237px;left:648px;white-space:nowrap"
        class="ft26"
      >
        Intellectual Property&#160;
      </p>
      <p
        style="position:absolute;top:253px;left:614px;white-space:nowrap"
        class="ft23"
      >
        <b>i</b>
      </p>
      <p
        style="position:absolute;top:255px;left:648px;white-space:nowrap"
        class="ft26"
      >
        Vehicles
      </p>
      <p
        style="position:absolute;top:217px;left:776px;white-space:nowrap"
        class="ft23"
      >
        <b>j</b>
      </p>
      <p
        style="position:absolute;top:219px;left:810px;white-space:nowrap"
        class="ft26"
      >
        Other&#160;
      </p>
      <p
        style="position:absolute;top:280px;left:54px;white-space:nowrap"
        class="ft20"
      >
        *Art&#160;includes&#160;paintings,&#160;sculptures,&#160;watercolors,&#160;prints,&#160;drawings,&#160;ceramics,&#160;antiques,&#160;decorative&#160;arts,&#160;textiles,&#160;carpets,&#160;silver,&#160;rare&#160;manuscripts,&#160;historical&#160;memorabilia,&#160;and&#160;
      </p>
      <p
        style="position:absolute;top:292px;left:54px;white-space:nowrap"
        class="ft20"
      >
        other similar objects.&#160;
      </p>
      <p
        style="position:absolute;top:311px;left:54px;white-space:nowrap"
        class="ft213"
      >
        **Collectibles include coins, stamps, books, gems, jewelry, sports
        memorabilia, dolls, etc., but not art as defined above.&#160;<br /><b
          >Note:&#160;</b
        >In certain cases, you must attach a qualified appraisal of the
        property. See instructions.&#160;
      </p>
      <p
        style="position:absolute;top:350px;left:61px;white-space:nowrap"
        class="ft23"
      >
        <b>5&#160;</b>
      </p>
      <!-- 5A(a) first line -->
      <div class="input-area" style="position:absolute;top:379px;left:76px">
        <input
          v-model="PropertyInformation.DonatedPropertyDesc"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line 5A(a). Description of donated property (if you need more space, attach a separate statement)."
          style="text-align:left;width:302px; height:17px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:379px;left:379px">
        <input
          v-model="PropertyInformation.DonatedPropertyPhysicalCondTxt"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line 5A(b). If any tangible personal property or real property was donated, give a brief summary of the overall physical condition of the property at the time of the gift."
          style="text-align:left;width:377px; height:17px"
        />
      </div>
      <money-input
        v-model="PropertyInformation.AppraisedFairMarketValueAmt"
        name="AppraisedFairMarketValueAmt"
        :div-style="'position:absolute;top:379px;left:757px'"
        :width="108"
        :height="17"
        :line="'5A(c)'"
      />
      <!-- 5B(a) Second line -->
      <div class="input-area" style="position:absolute;top:397px;left:76px">
        <input
          v-model="PropertyInformation.DonatedPropertyDesc2"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line 5A(a). Description of donated property (if you need more space, attach a separate statement)."
          style="text-align:left;width:302px; height:17px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:397px;left:379px">
        <input
          v-model="PropertyInformation.DonatedPropertyPhysicalCondTxt2"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line 5A(b). If any tangible personal property or real property was donated, give a brief summary of the overall physical condition of the property at the time of the gift."
          style="text-align:left;width:377px; height:17px"
        />
      </div>
      <money-input
        v-model="PropertyInformation.AppraisedFairMarketValueAmt2"
        name="AppraisedFairMarketValueAmt2"
        :div-style="'position:absolute;top:397px;left:757px'"
        :width="108"
        :height="17"
        :line="'5A(c)'"
      />
      <!-- 5C(a) Third line -->
      <div class="input-area" style="position:absolute;top:415px;left:76px">
        <input
          v-model="PropertyInformation.DonatedPropertyDesc3"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line 5A(a). Description of donated property (if you need more space, attach a separate statement)."
          style="text-align:left;width:302px; height:17px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:415px;left:379px">
        <input
          v-model="PropertyInformation.DonatedPropertyPhysicalCondTxt3"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line 5A(b). If any tangible personal property or real property was donated, give a brief summary of the overall physical condition of the property at the time of the gift."
          style="text-align:left;width:377px; height:17px"
        />
      </div>
      <money-input
        v-model="PropertyInformation.AppraisedFairMarketValueAmt3"
        name="WagesAmt"
        :div-style="'position:absolute;top:415px;left:757px'"
        :width="108"
        :height="17"
        :line="'5A(c)'"
      />
      <!-- 5D(a) Third line -->
      <div class="input-area" style="position:absolute;top:433px;left:76px">
        <input
          v-model="PropertyInformation.DonatedPropertyDesc4"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line 5A(a). Description of donated property (if you need more space, attach a separate statement)."
          style="text-align:left;width:302px; height:17px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:433px;left:379px">
        <input
          v-model="PropertyInformation.DonatedPropertyPhysicalCondTxt4"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line 5A(b). If any tangible personal property or real property was donated, give a brief summary of the overall physical condition of the property at the time of the gift."
          style="text-align:left;width:377px; height:17px"
        />
      </div>
      <money-input
        v-model="PropertyInformation.AppraisedFairMarketValueAmt4"
        name="WagesAmt"
        :div-style="'position:absolute;top:433px;left:757px'"
        :width="108"
        :height="17"
        :line="'5A(c)'"
      />
      <p
        style="position:absolute;top:345px;left:114px;white-space:nowrap"
        class="ft22"
      >
        <b>(a) &#160;</b>Description of donated property (if you need&#160;<b
          >&#160;&#160;</b
        >
      </p>
      <p
        style="position:absolute;top:358px;left:129px;white-space:nowrap"
        class="ft20"
      >
        more space, attach a separate statement)&#160;
      </p>
      <p
        style="position:absolute;top:345px;left:389px;white-space:nowrap"
        class="ft22"
      >
        <b>(b) &#160;</b>If any tangible personal property or real property was
        donated, give a brief&#160;
      </p>
      <p
        style="position:absolute;top:358px;left:389px;white-space:nowrap"
        class="ft20"
      >
        summary of the overall
      </p>
      <p
        style="position:absolute;top:357px;left:492px;white-space:nowrap"
        class="ft22"
      >
        <b>&#160;</b>physical condition of the property at the time of the
        gift&#160;
      </p>
      <p
        style="position:absolute;top:345px;left:768px;white-space:nowrap"
        class="ft22"
      >
        <b>(c)&#160;</b>&#160;Appraised fair&#160;<b>&#160;&#160;</b>
      </p>
      <p
        style="position:absolute;top:358px;left:780px;white-space:nowrap"
        class="ft20"
      >
        market value&#160;
      </p>
      <p
        style="position:absolute;top:357px;left:843px;white-space:nowrap"
        class="ft22"
      >
        <b>&#160;</b>&#160;
      </p>
      <p
        style="position:absolute;top:381px;left:60px;white-space:nowrap"
        class="ft214"
      >
        <b>A</b>
      </p>
      <p
        style="position:absolute;top:400px;left:60px;white-space:nowrap"
        class="ft214"
      >
        <b>B</b>
      </p>
      <p
        style="position:absolute;top:416px;left:60px;white-space:nowrap"
        class="ft214"
      >
        <b>C</b>
      </p>
      <p
        style="position:absolute;top:432px;left:60px;white-space:nowrap"
        class="ft214"
      >
        <b>D</b>
      </p>
      <!-- Part 1 Date aquior by donor -->
      <!-- First line -->
      <div class="input-area" style="position:absolute;top:487px;left:76px">
        <input
          v-model="PropertyInformation.date"
          v-uppercase
          class="no-outline"
          type="date"
          title="Line 5A(a). Description of donated property (if you need more space, attach a separate statement)."
          style="text-align:left;width:106px; height:17px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:487px;left:184px">
        <input
          v-model="PropertyInformation.donor"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line 5A(e). How acquired by donor."
          style="text-align:left;width:226px; height:17px"
        />
      </div>
      <money-input
        v-model="PropertyInformation.cost"
        name="cost"
        :div-style="'position:absolute;top:487px;left:411px'"
        title="Line 5A(f). Donor's cost or adjusted basis."
        :width="107"
        :height="17"
      />
      <money-input
        v-model="PropertyInformation.amountRecive"
        name="cost"
        :div-style="'position:absolute;top:487px;left:519px'"
        title="Line 5A(f). Donor's cost or adjusted basis."
        :width="107"
        :height="17"
      />
      <money-input
        v-model="PropertyInformation.amountClimbDeduction"
        name="cost"
        :div-style="'position:absolute;top:487px;left:627px'"
        title="Line 5A(h). Amount claimed as deduction."
        :width="107"
        :height="17"
      />
      <div class="input-area" style="position:absolute;top:487px;left:735px">
        <input
          v-model="PropertyInformation.dateContribution"
          v-uppercase
          class="no-outline"
          type="date"
          title="Line 5A(i). Date of contribution. 2 digit month, 2 digit day and 4 digit year."
          style="text-align:left;width:129px; height:17px"
        />
      </div>
      <!-- Second line -->
      <div class="input-area" style="position:absolute;top:505px;left:76px">
        <input
          v-model="PropertyInformation.date2"
          v-uppercase
          class="no-outline"
          type="date"
          title="Line 5A(a). Description of donated property (if you need more space, attach a separate statement)."
          style="text-align:left;width:106px; height:17px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:505px;left:184px">
        <input
          v-model="PropertyInformation.donor2"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line 5A(e). How acquired by donor."
          style="text-align:left;width:226px; height:17px"
        />
      </div>
      <money-input
        v-model="PropertyInformation.cost2"
        name="cost"
        :div-style="'position:absolute;top:505px;left:411px'"
        title="Line 5A(f). Donor's cost or adjusted basis."
        :width="107"
        :height="17"
      />
      <money-input
        v-model="PropertyInformation.amountRecive2"
        name="cost"
        :div-style="'position:absolute;top:505px;left:519px'"
        title="Line 5A(f). Donor's cost or adjusted basis."
        :width="107"
        :height="17"
      />
      <money-input
        v-model="PropertyInformation.amountClimbDeduction2"
        name="cost"
        :div-style="'position:absolute;top:505px;left:627px'"
        title="Line 5A(h). Amount claimed as deduction."
        :width="107"
        :height="17"
      />
      <div class="input-area" style="position:absolute;top:505px;left:735px">
        <input
          v-model="PropertyInformation.dateContribution2"
          v-uppercase
          class="no-outline"
          type="date"
          title="Line 5A(i). Date of contribution. 2 digit month, 2 digit day and 4 digit year."
          style="text-align:left;width:129px; height:17px"
        />
      </div>
      <!-- Third line -->
      <div class="input-area" style="position:absolute;top:523px;left:76px">
        <input
          v-model="PropertyInformation.date3"
          v-uppercase
          class="no-outline"
          type="date"
          title="Line 5A(a). Description of donated property (if you need more space, attach a separate statement)."
          style="text-align:left;width:106px; height:17px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:523px;left:184px">
        <input
          v-model="PropertyInformation.donor3"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line 5A(e). How acquired by donor."
          style="text-align:left;width:226px; height:17px"
        />
      </div>
      <money-input
        v-model="PropertyInformation.cost3"
        name="cost"
        :div-style="'position:absolute;top:523px;left:411px'"
        title="Line 5A(f). Donor's cost or adjusted basis."
        :width="107"
        :height="17"
      />
      <money-input
        v-model="PropertyInformation.amountRecive3"
        name="cost"
        :div-style="'position:absolute;top:523px;left:519px'"
        title="Line 5A(f). Donor's cost or adjusted basis."
        :width="107"
        :height="17"
      />
      <money-input
        v-model="PropertyInformation.amountClimbDeduction3"
        name="cost"
        :div-style="'position:absolute;top:523px;left:627px'"
        title="Line 5A(h). Amount claimed as deduction."
        :width="107"
        :height="17"
      />
      <div class="input-area" style="position:absolute;top:523px;left:735px">
        <input
          v-model="PropertyInformation.dateContribution3"
          v-uppercase
          class="no-outline"
          type="date"
          title="Line 5A(i). Date of contribution. 2 digit month, 2 digit day and 4 digit year."
          style="text-align:left;width:129px; height:17px"
        />
      </div>
      <!-- 4th line -->
      <div class="input-area" style="position:absolute;top:541px;left:76px">
        <input
          v-model="PropertyInformation.date4"
          v-uppercase
          class="no-outline"
          type="date"
          title="Line 5A(a). Description of donated property (if you need more space, attach a separate statement)."
          style="text-align:left;width:106px; height:17px"
        />
      </div>
      <div class="input-area" style="position:absolute;top:541px;left:184px">
        <input
          v-model="PropertyInformation.donor4"
          v-uppercase
          class="no-outline"
          type="text"
          title="Line 5A(e). How acquired by donor."
          style="text-align:left;width:226px; height:17px"
        />
      </div>
      <money-input
        v-model="PropertyInformation.cost4"
        name="cost"
        :div-style="'position:absolute;top:541px;left:411px'"
        title="Line 5A(f). Donor's cost or adjusted basis."
        :width="107"
        :height="17"
      />
      <money-input
        v-model="PropertyInformation.amountRecive4"
        name="cost"
        :div-style="'position:absolute;top:541px;left:519px'"
        title="Line 5A(f). Donor's cost or adjusted basis."
        :width="107"
        :height="17"
      />
      <money-input
        v-model="PropertyInformation.amountClimbDeduction4"
        name="cost"
        :div-style="'position:absolute;top:541px;left:627px'"
        title="Line 5A(h). Amount claimed as deduction."
        :width="107"
        :height="17"
      />
      <div class="input-area" style="position:absolute;top:541px;left:735px">
        <input
          v-model="PropertyInformation.dateContribution4"
          v-uppercase
          class="no-outline"
          type="date"
          title="Line 5A(i). Date of contribution. 2 digit month, 2 digit day and 4 digit year."
          style="text-align:left;width:129px; height:17px"
        />
      </div>
      <!-- End Part 1 Date aquior by donor -->
      <p
        style="position:absolute;top:453px;left:89px;white-space:nowrap"
        class="ft22"
      >
        <b>(d)</b>&#160;Date acquired&#160;<b>&#160;&#160;</b>
      </p>
      <p
        style="position:absolute;top:466px;left:87px;white-space:nowrap"
        class="ft20"
      >
        by donor (mo., yr.)&#160;
      </p>
      <p
        style="position:absolute;top:459px;left:234px;white-space:nowrap"
        class="ft22"
      >
        <b>(e)&#160;</b>How acquired by donor&#160;
      </p>
      <p
        style="position:absolute;top:453px;left:422px;white-space:nowrap"
        class="ft22"
      >
        <b>(f)&#160;</b>Donor’s cost or&#160;<b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:466px;left:430px;white-space:nowrap"
        class="ft20"
      >
        adjusted basis&#160;
      </p>
      <p
        style="position:absolute;top:453px;left:524px;white-space:nowrap"
        class="ft22"
      >
        <b>(g)&#160;</b>For bargain sales,&#160;
      </p>
      <p
        style="position:absolute;top:466px;left:521px;white-space:nowrap"
        class="ft20"
      >
        enter amount received&#160;
      </p>
      <p
        style="position:absolute;top:453px;left:705px;white-space:nowrap"
        class="ft22"
      >
        <b>See instructions</b>
      </p>
      <p
        style="position:absolute;top:467px;left:630px;white-space:nowrap"
        class="ft28"
      >
        <b>(h)</b>&#160;Amount claimed as a&#160;<b>&#160;</b>
      </p>
      <p
        style="position:absolute;top:475px;left:660px;white-space:nowrap"
        class="ft29"
      >
        deduction&#160;
      </p>
      <p
        style="position:absolute;top:470px;left:753px;white-space:nowrap"
        class="ft28"
      >
        <b>(i)</b>&#160;Date of contribution
      </p>
      <p
        style="position:absolute;top:468px;left:54px;white-space:nowrap"
        class="ft210"
      >
        <b>&#160; &#160;&#160;&#160;&#160; &#160;&#160;</b>
      </p>
      <p
        style="position:absolute;top:468px;left:184px;white-space:nowrap"
        class="ft210"
      >
        <b>&#160; &#160;&#160;</b>
      </p>
      <p
        style="position:absolute;top:468px;left:410px;white-space:nowrap"
        class="ft210"
      >
        <b>&#160; &#160;&#160;</b>
      </p>
      <p
        style="position:absolute;top:468px;left:518px;white-space:nowrap"
        class="ft210"
      >
        <b>&#160; &#160; &#160;</b>
      </p>
      <p
        style="position:absolute;top:489px;left:60px;white-space:nowrap"
        class="ft214"
      >
        <b>A</b>
      </p>
      <p
        style="position:absolute;top:505px;left:60px;white-space:nowrap"
        class="ft214"
      >
        <b>B</b>
      </p>
      <p
        style="position:absolute;top:521px;left:60px;white-space:nowrap"
        class="ft214"
      >
        <b>C</b>
      </p>
      <p
        style="position:absolute;top:541px;left:60px;white-space:nowrap"
        class="ft214"
      >
        <b>D</b>
      </p>
      <p style="position:absolute;top:560px;left:60px;color:white" class="ft25">
        <b>Part II&#160;</b>
      </p>
      <p
        style="position:absolute;top:557px;left:140px;white-space:nowrap"
        class="ft215"
      >
        <b>Taxpayer (Donor) Statement—</b>List each item included in Part I
        above that the appraisal identifies as having<br />a value of $500 or
        less. See instructions.&#160;
      </p>
      <p
        style="position:absolute;top:596px;left:54px;white-space:nowrap"
        class="ft216"
      >
        I declare that the following item(s) included in Part I above has to the
        best of my knowledge and belief an appraised value of not more than
        $500&#160;<br />(per item). Enter identifying letter from Part I and
        describe the specific item. See instructions.&#160;▶
      </p>
      <p
        style="position:absolute;top:650px;left:54px;white-space:nowrap"
        class="ft26"
      >
        Signature of taxpayer (donor)&#160;▶
      </p>
      <p
        style="position:absolute;top:650px;left:665px;white-space:nowrap"
        class="ft26"
      >
        Date&#160;▶
      </p>
      <div
        class="input-area"
        style="position:absolute;top:612px;left:592px;white-space:nowrap;"
      >
        <input
          v-model="Irs8283.PropertyIdLetterAndDescGrp.PropertyId"
          v-uppercase
          class="no-outline"
          type="text"
          title="Appraiser title."
          data-line-number="f"
          style="text-align:left;width:50px; height:18px"
        />
        <input
          v-model="Irs8283.PropertyIdLetterAndDescGrp.DonatedPropertyDesc"
          v-uppercase
          class="no-outline"
          type="text"
          title="Part 2. Taxpayer (Donor Statement) I declare that the following item(s) included in Part 1 above has to the best of my knowledge and belief an appraised value of not more than $500 (per item). Describe the specific item. See instructions."
          data-line-number="f"
          style="text-align:left;width:218px; height:18px"
        />
      </div>
      <div
        class="input-area"
        style="position:absolute;top:646px;left:705px;white-space:nowrap;"
      >
        <input
          v-model="Irs8283.DateSign"
          v-uppercase
          class="no-outline"
          type="date"
          title="Date signed by taxpayer (donor) (2 digit month, 2 digit day, 4 digit year)."
          data-line-number="f"
          style="text-align:left;width:160px; height:18px"
        />
      </div>
      <p style="position:absolute;top:668px;left:57px;color:white" class="ft25">
        <b>Part III&#160;</b>
      </p>
      <div
        class="input-area"
        style="position:absolute;top:809px;left:468px;white-space:nowrap;"
      >
        <input
          v-model="Irs8283.AppraiserTitleTxt"
          v-uppercase
          class="no-outline"
          type="text"
          title="Appraiser title."
          data-line-number="f"
          style="text-align:left;width:201px; height:18px"
        />
      </div>
      <div
        class="input-area"
        style="position:absolute;top:809px;left:705px;white-space:nowrap;"
      >
        <input
          v-model="Irs8283.AppraiserSignedDt"
          v-uppercase
          class="no-outline"
          type="date"
          title="Date signed by appraiser (2 digit month, 2 digit day, 4 digit year)."
          data-line-number="f"
          style="text-align:left;width:160px; height:18px"
        />
      </div>
      <div
        class="input-area"
        style="position:absolute;top:845px;left:55px;white-space:nowrap;"
      >
        <input
          v-model="Irs8283.AppraiserForeignAddress.AddressLine1Txt"
          v-uppercase
          class="no-outline"
          type="text"
          title="Stree address"
          style="text-align:left;width:647px; height:18px"
        />
      </div>
      <div style="position:absolute;top:845px;left:703px;">
        <input
          id="AppraiserIdentifyingNum"
          v-model="Irs8283.AppraiserIdentifyingNum"
          v-mask="'##-#######'"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          name="AppraiserIdentifyingNum"
          data-line-number=""
          class="no-outline"
          style="width:162px;height:19px"
          type="text"
        />
      </div>
      <div
        class="input-area"
        style="position:absolute;top:881px;left:55px;white-space:nowrap;"
      >
        <input
          v-model="Irs8283.AppraiserForeignAddress.CityNm"
          v-uppercase
          class="no-outline"
          type="text"
          title="Employee's City"
          data-line-number="f"
          style="text-align:left;width:520px; height:18px"
        />
        <select
          v-model="Irs8283.AppraiserForeignAddress.StateAbbreviationCd"
          v-uppercase
          name="state"
          title="Select State"
          style="width:150px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
        >
          <option value=" "></option>
          <option v-for="state in stateList" :key="state" :value="state">{{
            state
          }}</option>
        </select>
        <input
          v-model="Irs8283.AppraiserForeignAddress.ZIPCd"
          v-mask="'#####'"
          class="no-outline"
          name="ZIPCd"
          type="number"
          title="Employee's ZIP Code"
          data-line-number="f"
          style="text-align:left;width:132px; height:18px"
        />
      </div>
      <p
        style="position:absolute;top:668px;left:140px;white-space:nowrap"
        class="ft21"
      >
        <b>Declaration of Appraiser&#160;</b>
      </p>
      <p
        style="position:absolute;top:688px;left:54px;white-space:nowrap;font-size:9px"
        class="ft20"
      >
        I&#160;declare&#160;that&#160;I&#160;am&#160;not&#160;the&#160;donor,&#160;the&#160;donee,&#160;a&#160;party&#160;to&#160;the&#160;transaction&#160;in&#160;which&#160;the&#160;donor&#160;acquired&#160;the&#160;property,&#160;employed&#160;by,&#160;or&#160;related&#160;to&#160;any&#160;of&#160;the&#160;foregoing&#160;persons,&#160;or&#160;&#160;married&#160;to&#160;any&#160;person&#160;
      </p>
      <p
        style="position:absolute;top:700px;left:54px;white-space:nowrap;font-size:9px"
        class="ft217"
      >
        who is related to any of the foregoing persons. And, if regularly used
        by the donor, donee, or party to the transaction, I performed the
        majority of my &#160;appraisals during my tax year for other
        persons.&#160;<br />Also,&#160;I&#160;declare&#160;that&#160;I&#160;perform&#160;appraisals&#160;on&#160;a&#160;regular&#160;basis;&#160;and&#160;that&#160;because&#160;of&#160;my&#160;qualifications&#160;as&#160;described&#160;in&#160;the&#160;&#160;appraisal,&#160;I&#160;am&#160;qualified&#160;to&#160;make&#160;appraisals&#160;of&#160;the&#160;type&#160;of&#160;property&#160;being&#160;valued.&#160;I&#160;certify&#160;that&#160;the&#160;
      </p>
      <p
        style="position:absolute;top:730px;left:54px;white-space:nowrap;font-size:9px"
        class="ft20"
      >
        appraisal&#160;fees&#160;were&#160;not&#160;based&#160;on&#160;a&#160;percentage&#160;of&#160;the&#160;appraised&#160;property&#160;value.&#160;Furthermore,&#160;I&#160;understand&#160;that&#160;a&#160;false&#160;or&#160;fraudulent&#160;overstatement&#160;of&#160;the&#160;property&#160;value&#160;as&#160;described&#160;in&#160;the&#160;qualified&#160;appraisal&#160;or&#160;this&#160;
      </p>
      <p
        style="position:absolute;top:742px;left:54px;white-space:nowrap;font-size:9px"
        class="ft20"
      >
        Form&#160;8283&#160;may&#160;subject&#160;me&#160;to&#160;the&#160;penalty&#160;under&#160;section&#160;6701(a)&#160;(aiding&#160;and&#160;abetting&#160;the&#160;understatement&#160;of&#160;tax&#160;liability).&#160;I&#160;understand&#160;that&#160;my&#160;appraisal&#160;will&#160;be&#160;used&#160;in&#160;connection&#160;with&#160;a&#160;return&#160;or&#160;claim&#160;for&#160;refund.&#160;I&#160;also&#160;
      </p>
      <p
        style="position:absolute;top:754px;left:54px;white-space:nowrap;font-size:9px"
        class="ft20"
      >
        understand&#160;that,&#160;if&#160;there&#160;is&#160;a&#160;substantial&#160;or&#160;gross&#160;valuation&#160;misstatement&#160;of&#160;the&#160;value&#160;of&#160;the&#160;property&#160;claimed&#160;on&#160;the&#160;return&#160;or&#160;claim&#160;for&#160;refund&#160;that&#160;is&#160;based&#160;on&#160;my&#160;appraisal,&#160;I&#160;may&#160;be&#160;subject&#160;to&#160;a&#160;penalty&#160;under&#160;section&#160;
      </p>
      <p
        style="position:absolute;top:766px;left:54px;white-space:nowrap;font-size:9px"
        class="ft20"
      >
        6695A&#160;of&#160;the&#160;Internal&#160;Revenue&#160;Code,&#160;as&#160;well&#160;as&#160;other&#160;applicable&#160;penalties.&#160;I&#160;affirm&#160;that&#160;I&#160;have&#160;not&#160;been&#160;at&#160;any&#160;time&#160;in&#160;the&#160;three-year&#160;period&#160;ending&#160;on&#160;the&#160;date&#160;of&#160;the&#160;appraisal&#160;barred&#160;from&#160;presenting&#160;evidence&#160;or&#160;
      </p>
      <p
        style="position:absolute;top:778px;left:54px;white-space:nowrap"
        class="ft20"
      >
        testimony before the Department of the Treasury or the Internal Revenue
        Service pursuant to 31 U.S.C. 330(c).
      </p>
      <p
        style="position:absolute;top:790px;left:54px;white-space:nowrap"
        class="ft218"
      >
        <b>Sign &#160;<br />Here&#160;&#160;</b>Signature&#160;▶
      </p>
      <p
        style="position:absolute;top:815px;left:432px;white-space:nowrap"
        class="ft20"
      >
        Title&#160;▶
      </p>
      <p
        style="position:absolute;top:813px;left:670px;white-space:nowrap"
        class="ft20"
      >
        Date&#160;▶
      </p>
      <p
        style="position:absolute;top:830px;left:54px;white-space:nowrap"
        class="ft20"
      >
        Business address (including room or suite no.)&#160;
      </p>
      <p
        style="position:absolute;top:830px;left:708px;white-space:nowrap"
        class="ft22"
      >
        <b>Identifying number&#160;</b>
      </p>
      <p
        style="position:absolute;top:866px;left:54px;white-space:nowrap"
        class="ft20"
      >
        City or town, state, and ZIP code&#160;
      </p>
      <p style="position:absolute;top:902px;left:57px;color:white" class="ft25">
        <b>Part IV&#160;</b>
      </p>
      <p
        style="position:absolute;top:902px;left:140px;white-space:nowrap"
        class="ft21"
      >
        <b>Donee Acknowledgment—</b>To be completed by the charitable
        organization.&#160;
      </p>
      <p
        style="position:absolute;top:920px;left:54px;white-space:nowrap"
        class="ft216"
      >
        This&#160;charitable&#160;organization&#160;acknowledges&#160;that&#160;it&#160;is&#160;a&#160;qualified&#160;organization&#160;under&#160;section&#160;170(c)&#160;and&#160;that&#160;it&#160;received&#160;the&#160;donated&#160;property&#160;as&#160;described&#160;<br />in
        Section B, Part I, above on the following date&#160;▶
      </p>
      <p
        style="position:absolute;top:960px;left:54px;white-space:nowrap"
        class="ft219"
      >
        Furthermore,&#160;this&#160;organization&#160;affirms&#160;that&#160;in&#160;the&#160;event&#160;it&#160;sells,&#160;exchanges,&#160;or&#160;otherwise&#160;disposes&#160;of&#160;the&#160;property&#160;described&#160;in&#160;Section&#160;B,&#160;Part&#160;I&#160;(or&#160;any&#160;<br />portion&#160;thereof)&#160;within&#160;3&#160;years&#160;after&#160;the&#160;date&#160;of&#160;receipt,&#160;it&#160;will&#160;file&#160;&#160;
      </p>
      <p
        style="position:absolute;top:975px;left:402px;white-space:nowrap"
        class="ft27"
      >
        <b>Form&#160;8282,&#160;</b
        >&#160;Donee&#160;Information&#160;Return,&#160;with&#160;the&#160;IRS&#160;and&#160;give&#160;the&#160;donor&#160;a&#160;copy&#160;of&#160;that&#160;
      </p>
      <p
        style="position:absolute;top:991px;left:54px;white-space:nowrap"
        class="ft220"
      >
        form. This acknowledgment does not represent agreement with the claimed
        fair market value.&#160;<br />Does the organization intend to use the
        property for an unrelated use?&#160;
      </p>
      <p
        style="position:absolute;top:1010px;left:450px;white-space:nowrap"
        class="ft26"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:468px;white-space:nowrap"
        class="ft26"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:486px;white-space:nowrap"
        class="ft26"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:504px;white-space:nowrap"
        class="ft26"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:522px;white-space:nowrap"
        class="ft26"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:540px;white-space:nowrap"
        class="ft26"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:558px;white-space:nowrap"
        class="ft26"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:576px;white-space:nowrap"
        class="ft26"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:594px;white-space:nowrap"
        class="ft26"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:612px;white-space:nowrap"
        class="ft26"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:630px;white-space:nowrap"
        class="ft26"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:648px;white-space:nowrap"
        class="ft26"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:666px;white-space:nowrap"
        class="ft26"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:684px;white-space:nowrap"
        class="ft26"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:702px;white-space:nowrap"
        class="ft26"
      >
        .
      </p>
      <p
        style="position:absolute;top:1010px;left:720px;white-space:nowrap"
        class="ft26"
      >
        &#160;▶
      </p>
      <p
        style="position:absolute;top:1011px;left:763px;white-space:nowrap"
        class="ft26"
      >
        Yes
      </p>
      <label
        style="position:absolute;top:1009px;left:745px;"
        class="checkbox-container"
      >
        <input
          id="UsePropertyForUnrelatedUseInd"
          v-model="Irs8283.UsePropertyForUnrelatedUseInd"
          name="UsePropertyForUnrelatedUseInd"
          data-line-number="13"
          class="no-outline checkbox"
          type="radio"
          value="true"
        />
        <span class="checkmark"></span>
      </label>
      <label
        style="position:absolute;top:1009px;left:810px;"
        class="checkbox-container"
      >
        <input
          id="UsePropertyForUnrelatedUseInd1"
          v-model="Irs8283.UsePropertyForUnrelatedUseInd"
          name="UsePropertyForUnrelatedUseInd"
          data-line-number="13"
          class="no-outline checkbox"
          type="radio"
          value="false"
        />
        <span class="checkmark"></span>
      </label>
      <p
        style="position:absolute;top:1011px;left:828px;white-space:nowrap"
        class="ft26"
      >
        No
      </p>
      <p
        style="position:absolute;top:1028px;left:54px;white-space:nowrap"
        class="ft20"
      >
        Name of charitable organization (donee)&#160;
      </p>
      <p
        style="position:absolute;top:1028px;left:481px;white-space:nowrap"
        class="ft22"
      >
        <b>Employer identification number&#160;</b>
      </p>
      <div
        class="input-area city-town"
        style="position:absolute;top:1043px;left:54px;white-space:nowrap;"
      >
        <input
          v-model="Irs8283.DoneeName.BusinessNameLine1Txt"
          v-uppercase
          class="no-outline"
          type="text"
          title="Stree address"
          data-line-number="f"
          style="text-align:left;width:420px; height:18px"
        />
      </div>
      <div style="position:absolute;top:1043px;left:476px;">
        <input
          id="DoneeEIN"
          v-model="Irs8283.DoneeEIN"
          v-mask="'##-#######'"
          onfocus="this.type='text'"
          onblur="this.type='password'"
          name="DoneeEIN"
          data-line-number=""
          class="no-outline"
          style="width:388px;height:19px"
          type="text"
        />
      </div>
      <p
        style="position:absolute;top:1064px;left:54px;white-space:nowrap"
        class="ft20"
      >
        Address (number, street, and room or suite no.)&#160;
      </p>
      <div
        class="input-area"
        style="position:absolute;top:1079px;left:55px;white-space:nowrap;"
      >
        <input
          v-model="Irs8283.DoneeUSAddress.AddressLine1Txt"
          v-uppercase
          class="no-outline"
          type="text"
          title="Stree address"
          style="text-align:left;width:420px; height:18px"
        />
      </div>
      <div
        class="input-area"
        style="position:absolute;top:1079px;left:477px;white-space:nowrap;"
      >
        <input
          v-model="Irs8283.DoneeUSAddress.CityNm"
          v-uppercase
          class="no-outline"
          type="text"
          title="Employee's City"
          data-line-number="f"
          style="text-align:left;width:180px; height:18px"
        />
        <select
          v-model="Irs8283.DoneeUSAddress.StateAbbreviationCd"
          v-uppercase
          name="state"
          title="Select State"
          style="width:110px;height:18px;border:none;background-color: #f1f4ff;"
          class="no-outline"
        >
          <option value=" "></option>
          <option v-for="state in stateList" :key="state" :value="state">{{
            state
          }}</option>
        </select>
        <input
          v-model="Irs8283.DoneeUSAddress.ZIPCd"
          v-mask="'#####'"
          class="no-outline"
          name="ZIPCd"
          type="number"
          title="Employee's ZIP Code"
          data-line-number="f"
          style="text-align:left;width:92px; height:18px"
        />
      </div>
      <div
        class="input-area"
        style="position:absolute;top:1114px;left:477px;white-space:nowrap;"
      >
        <input
          v-model="Irs8283.Title"
          v-uppercase
          class="no-outline"
          type="text"
          title="Charitable organization representative title."
          data-line-number="f"
          style="text-align:left;width:214px; height:18px"
        />
      </div>
      <div
        class="input-area"
        style="position:absolute;top:1114px;left:693px;white-space:nowrap;"
      >
        <input
          v-model="Irs8283.Date"
          v-uppercase
          class="no-outline"
          type="date"
          title="Date signed by charitable organization representative ( 2 digit month, 2 digit day, 4 digit year)."
          data-line-number="f"
          style="text-align:left;width:171px; height:18px"
        />
      </div>
      <p
        style="position:absolute;top:1064px;left:481px;white-space:nowrap"
        class="ft20"
      >
        City or town, state, and ZIP code&#160;
      </p>
      <p
        style="position:absolute;top:1098px;left:54px;white-space:nowrap"
        class="ft20"
      >
        Authorized signature&#160;
      </p>
      <p
        style="position:absolute;top:1100px;left:481px;white-space:nowrap"
        class="ft20"
      >
        Title&#160;
      </p>
      <p
        style="position:absolute;top:1098px;left:697px;white-space:nowrap"
        class="ft20"
      >
        Date&#160;
      </p>
      <p
        style="position:absolute;top:1138px;left:732px;white-space:nowrap"
        class="ft20"
      >
        Form&#160;
      </p>
      <p
        style="position:absolute;top:1133px;left:759px;white-space:nowrap"
        class="ft21"
      >
        <b>8283</b>&#160;(Rev. 11-2019)&#160;
      </p>
    </div>
  </div>
</template>
<script>
import MoneyInput from '~/components/Currency/MoneyInput'
import { stateList } from '~/services/states.js'
export default {
  components: { MoneyInput },
  data() {
    return {
      Irs8283: {
        PropertyId: 'A',
        informationOnDonatedProperty: [],
        PropertyInformation: [],
        AppraiserForeignAddress: {},
        PropertyIdLetterAndDescGrp: [],
        DoneeName: {},
        DoneeUSAddress: {}
      },
      informationOnDonatedProperty: {
        DoneeOrganizationName: {},
        DoneeOrganizationFrgnAddress: {},
        DonorLineDetail: {
          DonorAcquiredDt: {}
        },
        OrganizationNm: {},
        OrganizatonUSAddress: {},
        PersonPossessingPropBusName: {}
      },
      PropertyInformation: {},
      PropertyIdLetterAndDescGrp: {},
      stateList
    }
  }
}
</script>
<style>
@import '@/assets/styles/form.css';
#page1-div {
  background-image: url('../../static/form-assets/irs8283001.png');
}
#page2-div {
  background-image: url('../../static/form-assets/irs8283002.png');
}
.year {
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
</style>
