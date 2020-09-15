<template>
  <el-container>
    <el-row :gutter="20">
      <el-col>
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-document-checked"
          plain
          @click="onTransmit"
        >
          Transmit
        </el-button>
        <el-button
          type="success"
          size="mini"
          icon="el-icon-document-checked"
          plain
        >
          Save document
        </el-button>
        <!-- <el-button type="warning" size="mini" icon="el-icon-top" plain>
          Upload
        </el-button> -->
        <el-button-group>
          <el-button type="primary" size="mini" icon="el-icon-printer" plain>
            Print
          </el-button>
          <!-- <el-button
            type="primary"
            size="mini"
            icon="el-icon-plus"
            plain
            @click="$store.commit('toggleFormUploader')"
          >
            Attach Forms
          </el-button> -->
          <el-button type="primary" size="mini" icon="el-icon-message" plain>
            Email
          </el-button>
          <el-button type="primary" size="mini" icon="el-icon-printer" plain>
            Fax
          </el-button>
        </el-button-group>
        <el-popconfirm
          confirm-button-text="OK"
          cancel-button-text="No, Thanks"
          title="You will have to start over. Are you sure?"
        >
          <el-button
            slot="reference"
            type="danger"
            size="mini"
            icon="el-icon-close"
            plain
            >Clear</el-button
          >
        </el-popconfirm>
        <el-button type="info" size="mini" icon="el-icon-info" plain>
          Instructions
        </el-button>
      </el-col>
      <DocumentUploader :visible="$store.state.formUploaderVisible" />
    </el-row>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
import DocumentUploader from '../DocumentUploader/DocumentUploader.vue'
import { isNumeric } from '../../libraries/utils'
export default {
  name: 'Toolbar',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    DocumentUploader
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['baseURL'])
  },
  methods: {
    onSave() {
      return {}
    },
    normalizeFormName(formName) {
      const baseName = formName.substr(3, formName.length)
      const normalized = `IRS${baseName}`
      return normalized
    },
    onTransmit() {
      const data = {
        TaxYr: 2019,
        GovernmentCd: 'IRS',
        FederalSubmissionTypeCd: '1040',
        BinaryAttachments: [],
        ReturnHeader: {
          OriginatorGrp: {
            EFIN: '780987',
            OriginatorTypeCd: 'ERO',
            PractitionerPINGrp: {
              EFIN: '780987',
              PIN: '00001'
            }
          },
          SelfSelectPINGrp: {
            PrimaryBirthDt: '1989-03-29'
          },
          PrimarySignatureDt: '2020-05-10',
          Filer: {
            PrimarySSN: '400001037',
            NameLine1Txt: 'MORGAN&lt;GARDNER',
            PrimaryNameControlTxt: 'L',
            USAddress: {
              AddressLine1Txt: '2250 W SAHARA AVE',
              CityNm: 'LAS VEGAS',
              StateAbbreviationCd: 'NV',
              ZIPCd: '89146'
            }
          },
          PaidPreparerInformationGrp: {
            SignatureDt: '2020-05-10',
            PTIN: 'P00000001',
            PreparerFirmEIN: '000000001',
            PreparerPersonNm: 'JOHN DOE',
            PreparerFirmName: {
              BusinessNameLine1Txt: 'EASY TAX',
              BusinessNameLine2Txt: '765 SAHARA AVE'
            },
            PreparerUSAddress: {
              AddressLine1Txt: '765 SAHARA AVE',
              CityNm: 'LAS VEGAS',
              StateAbbreviationCd: 'NV',
              ZIPCd: '89146'
            },
            PhoneNum: '4749918817',
            EmailAddressTxt: 'johndoe@me.com'
          },
          AdditionalFilerInformation: {
            AtSubmissionFilingGrp: {
              RefundDisbursementCd: '0',
              RefundProductElectionInd: 'false'
            }
          },
          FilingSecurityInformation: {
            AtSubmissionCreationGrp: {
              IPAddress: {
                IPv4AddressTxt: '204.120.0.15'
              },
              DeviceId: 'A46904EAA5B1FE72C23A84A6DED0078D29C51615',
              DeviceTypeCd: '0'
            },
            AtSubmissionFilingGrp: {
              IPAddress: {
                IPv4AddressTxt: '204.120.0.15'
              },
              FinalIPPortNum: '80',
              DeviceId: 'A46904EAA5B1FE72C23A84A6DED0078D29C51615',
              DeviceTypeCd: '0',
              UserAgentTxt: window.navigator.userAgent,
              BrowserLanguageTxt: 'en',
              PlatformTxt: 'testss',
              TimeZoneOffsetNum: '-003'
            },
            TotalPreparationSubmissionTs: '701722',
            TotActiveTimePrepSubmissionTs: '701622',
            AuthenticationReviewCd: '0',
            VendorControlNum: '34344',
            AuthenticationReviewTxt: '701722'
          }
        },
        ReturnData: {}
      }
      this.$confirm('Are you sure to transmit data. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
        .then(() => {
          const attachments = this.$store.state.attachments
          // eslint-disable-next-line no-console
          console.log('Attachments', attachments)
          Object.keys(attachments).map((key) => {
            if (!attachments[key]) return {}
            let formName = this.normalizeFormName(key)
            if (key === 'Irsw2') formName = 'IRSW2'
            const formData = {}
            Object.keys(attachments[key]).map((item) => {
              let val
              const itemType = typeof attachments[key][item]

              if (
                item === 'firstName' ||
                item === 'lastName' ||
                item === 'ssn' ||
                item === 'name' ||
                item === 'USAddress' ||
                item === 'ForeignAddress'
              )
                return {}

              if (itemType === Boolean) {
                val = attachments[key][item]
              } else if (Array.isArray(attachments[key][item])) {
                if (!attachments[key][item][0]) return null
                val = attachments[key][item][0]
              } else if (
                !Array.isArray(attachments[key][item]) &&
                itemType === 'object'
              ) {
                if (!attachments[key][item]) return null
                if (!attachments[key][item][0]) return null
                // eslint-disable-next-line no-console
                console.log('OBJECT Struct', item, attachments[key][item][0])
                val = attachments[key][item][0]
              } else if (isNumeric(item)) {
                val = attachments[key][item] ?? 0
              } else if (item.match('SSN') || item.match('EIN')) {
                val = attachments[key][item].split('-').join('')
              } else {
                val = attachments[key][item]
              }

              formData[item] = val
            })

            data.ReturnData[formName] = formData
          })

          data.ReturnData.IRS1040.PrimaryOccupationTxt = 'Janitor'
          data.ReturnData.IRS1040.PersonalRepresentativeInd = true
          data.ReturnData.IRS1040.PhoneNum = '4567891234'
          data.ReturnData.IRS1040.RefundProductCd = 'NO FINANCIAL PRODUCT'
          // IRSW2 Required fields
          // See instructions https://www.irs.gov/businesses/corporations/using-the-correct-name-control-in-e-filing-corporate-tax-returns
          // for `EmployerNameControlTxt`
          data.ReturnData.IRSW2.EmployerNameControlTxt = 'XYZW'
          data.ReturnData.IRSW2.AgentForEmployerInd = false
          data.ReturnData.IRSW2.EmployerName = {
            BusinessNameLine1Txt: 'XYZ Water Works'
          }
          data.ReturnData.IRSW2.EmployerUSAddress = {
            AddressLine1Txt: '393 S 14th St',
            CityNm: 'LAS VEGAS',
            StateAbbreviationCd: 'NV',
            ZIPCd: '89101'
          }
          data.ReturnData.IRSW2.EmployeeNm = 'Morgan Gardner'
          data.ReturnData.IRSW2.EmployeeUSAddress = {
            AddressLine1Txt: '2250 W Sahara Ave',
            CityNm: 'LAS VEGAS',
            StateAbbreviationCd: 'NV',
            ZIPCd: '89146'
          }
          data.ReturnData.IRSW2.SocialSecurityTipsAmt = '0'
          data.ReturnData.IRSW2.AllocatedTipsAmt = '0'
          data.ReturnData.IRSW2.DependentCareBenefitsAmt = '0'
          data.ReturnData.IRSW2.NonqualifiedPlansAmt = '0'

          if (data.ReturnData.IRS8962) {
            if (!data.ReturnData.IRS8962.QSEHRAInd) {
              data.ReturnData.IRS8962.QSEHRAInd = '0'
            } else {
              data.ReturnData.IRS8962.QSEHRAInd = '1'
            }

            if (parseInt(data.ReturnData.IRS8962.TotalExemptionsCnt) > 0) {
              data.ReturnData.IRS1040.TotalExemptionsCnt =
                data.ReturnData.IRS8962.TotalExemptionsCnt

              data.ReturnData.IRS1040.TotalExemptPrimaryAndSpouseCnt = '1'
              data.ReturnData.IRS1040.ChldWhoLivedWithYouCnt = '0'
              data.ReturnData.IRS1040.OtherDependentsListedCnt = '0'
            }

            data.ReturnData.IRS8962.TotalDependentsModifiedAGIAmt = '0'

            data.ReturnData.IRS8962.HouseholdIncomeAmt =
              data.ReturnData.IRS8962.ModifiedAGIAmt +
              parseInt(data.ReturnData.IRS8962.TotalDependentsModifiedAGIAmt)

            Object.keys(data.ReturnData.IRS8962).map((key) => {
              if (data.ReturnData.IRS8962[key] === 0)
                data.ReturnData.IRS8962[key] = '0'
            })

            data.ReturnData.IRS8962.AnnualPTCCalculationGrp = {
              AnnualPremiumAmt:
                attachments.Irs8962.AnnualPTCCalculationGrp.AnnualPremiumAmt,
              AnnualPremiumSLCSPAmt:
                attachments.Irs8962.AnnualPTCCalculationGrp
                  .AnnualPremiumSLCSPAmt,
              AnnualContributionAmt:
                attachments.Irs8962.AnnualPTCCalculationGrp
                  .AnnualContributionAmt,
              AnnualMaxPremiumAssistanceAmt:
                attachments.Irs8962.AnnualPTCCalculationGrp
                  .AnnualMaxPremiumAssistanceAmt,
              AnnualPremiumTaxCreditAllwAmt:
                attachments.Irs8962.AnnualPTCCalculationGrp
                  .AnnualPremiumTaxCreditAllwAmt,
              AnnualAdvancedPTCAmt:
                attachments.Irs8962.AnnualPTCCalculationGrp.AnnualAdvancedPTCAmt
            }
          }

          if (data.ReturnData.IRS1040.IRADistributionsLiteralCd === ' ') {
            delete data.ReturnData.IRS1040.IRADistributionsLiteralCd
          }

          // eslint-disable-next-line no-console
          console.log(data)
          const url = `https://forms-server.rdtechlab.com/submissions/submit`
          fetch(url, {
            method: 'POST',
            headers: {
              api_key: 'd882ed82bd6502b188e25887b297362175e9bad1',
              'cache-control': 'no-cache',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then((res) => res.json())
            .then((result) => {
              // eslint-disable-next-line no-console
              console.log('Result', result)
            })
            .catch((error) => {
              // eslint-disable-next-line no-console
              console.error('FETCH_ERROR', error)
            })
          // loading indicator on
          // this.$axios.$post('submissions/submit', data).then((res) => {
          //   // loading indicator off
          //   // eslint-disable-next-line no-console
          //   console.log(res)
          //   // Show success message
          //   // this.$message({
          //   //   type: 'success',
          //   //   message: 'Return process successffully!'
          //   // })
          // })
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err)
        })
    }
  }
}
</script>

<style>
.el-container {
  justify-content: flex-end;
}
</style>
