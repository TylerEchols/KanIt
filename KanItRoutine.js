/**
 * Created by Tyler on 12/30/2016.
 */
javascript:(function(){
    // Header
    $("#chk_GCodeConfirmed").attr('checked', true);          // Check box or radio button = checked
    $("#chklst_IncidentReported_1").attr('checked', true);
    $("#chklst_PatientIdentification_0").attr('checked', true);
    $("#chklst_PatientIdentification_6").attr('checked', true);
    $("#chklst_PatientIdentification_7").attr('checked', true);
    $("#chk_PatientToleratedSession").attr('checked', true);
    $("#chk_StandardPrecautionsObserved").attr('checked', true);

    // Respiratory system
    $("#chkLungSound").attr('checked', true);
    $("#drpRightUpperLungSound").val("1");                          // Select option 1
    $("#drpRightLowerLungSound").val("1");
    $("#drpLeftUpperLungSound").val("1");
    $("#drpLeftLowerLungSound").val("1");

    // Neurological system
    $("#chkOrientedto").attr('checked', true);
    $("#chklstOrientedto_0").attr('checked', true);
    $("#chklstOrientedto_1").attr('checked', true);
    $("#chklstOrientedto_2").attr('checked', true);
    $("#chklst_pupilReact_2").attr('checked', true);

    // Genitourinary system
    $("#rdbYellow").attr('checked', true);
    $("#rdblst_clarity_0").attr('checked', true);
    $("#rdblst_odor_1").attr('checked', true);
    $("#chk_PerPTReport").attr('checked', true);

    // Cardiovascular system
    $("#chkHeartSounds").attr('checked', true);
    $("#drp_heartSounds").val("5");
    $("#rdblst_capRefil_0").attr('checked', true);

    // Musculoskeletal system
    $("#chkWeakness").attr('checked', true);
    $("#chkAbnormalGait").attr('checked', true);
    $("#rdblst_gripStr_2").attr('checked', true);
    $("#chkFallPrecautions").attr('checked', true);

    // Emotional status
    $("#txtOtherEmotionalStatus").val("Appropriate for situation");               // Set text field

    // Pain, Infusion, Endocrine
    $("#rdblst_painFreq_3").attr('checked', true);
    $("#chk_Infusion_NA").attr('checked', true);
    $("#chk_Endocrine_NA").attr('checked', true);

    // Pain sub-form
    $("#rdbPainRelief_1").attr('checked', true);
    $("#rdbMedicationAdequate_1").attr('checked', true);
    $("#chk_PainWorse_2").attr('checked', true);
    $("#chk_PainBetter_3").attr('checked', true);
    $("#chk_PainBetter_4").attr('checked', true);
    $("#chk_PainBetter_6").attr('checked', true);
    $("#chk_PainBetter_7").attr('checked', true);
    $("#txt_Outcome").val("Patient denies pain at this visit");
    $("#rdbCP_0").attr('checked', true);
    $("#txt_PainImpact").val("Decreased activity and ambulation with increased pain, which increases skin and pneumonia risks");

    // Skin system
    $("#rdb_WoundNo").attr('checked', true);
    $("#rdblst_skinColor_3").attr('checked', true);
    $("#rdblst_temp_3").attr('checked', true);
    $("#rdblst_turgor_2").attr('checked', true);

    // Digestive system
    $("#drpBowelSound").val("4");
    $("#drpLastBM").val("1");
    $("#drpLastBM").trigger("change");                               // Trigger event for handlers and watchers
    $("#chkMealsPrepared").attr('checked', true);
    $("#chkDiet").attr('checked', true);
    $("#txtDiet").val("Regular");

    // Homebound
    $("#chk_HomeboundYes").attr('checked', true);
    $("#chklst_absenceinfrequent_0").attr('checked', true);
    $("#chklst_absenceinfrequent_1").attr('checked', true);
    $("#chklst_absenceinfrequent_2").attr('checked', true);
    $("#chklst_LeavingAbility_0").attr('checked', true);
    $("#chklst_LeavingAbility_1").attr('checked', true);
    $("#chklst_TaxingEfforts_0").attr('checked', true);

    // Medication
    $("#chk_MedChangedNo").attr('checked', true);
    $("#chk_IsPatientInstructed").attr('checked', true);
    $("#chk_MedicationMonitoring").attr('checked', true);
    $("#chk_MedicationReaction").attr('checked', true);
    $("#chk_MedicationProblemReport").attr('checked', true);

    // Care Coordination
    $("#chk_PTComplaintYes").attr('checked', true);
    $("#chk_DischargePlanYes").attr('checked', true);

})();
