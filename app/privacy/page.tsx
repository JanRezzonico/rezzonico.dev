import { useTranslations } from 'next-intl'
import React from 'react'

const PrivacyPolicy = () => {
  const effectiveDate = '2025-04-26'
  const t = useTranslations('PrivacyPolicy')

  return (
    <div className="mx-auto p-6 shadow-lg rounded-lg">
      <h1 className="text-4xl font-semibold text-center mb-6">{t('title')}</h1>
      <p className="text-lg mb-4">
        <strong>{t('effective_date')}:</strong> {effectiveDate}
      </p>

      <p className="text-lg mb-6">{t('intro')}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">{t('data_controller.title')}</h2>
        <p className="text-lg mb-2">{t('data_controller.description')}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">{t('types_of_data_collected.title')}</h2>
        <p className="text-lg mb-2">{t('types_of_data_collected.description')}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">{t('purpose_of_data_collection.title')}</h2>
        <p className="text-lg mb-2">{t('purpose_of_data_collection.description')}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">{t('data_retention_period.title')}</h2>
        <p className="text-lg mb-2">{t('data_retention_period.description')}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">{t('user_rights.title')}</h2>
        <p className="text-lg mb-2">{t('user_rights.description')}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">{t('third_party_sharing.title')}</h2>
        <p className="text-lg mb-2">{t('third_party_sharing.description')}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">{t('security_measures.title')}</h2>
        <p className="text-lg mb-2">{t('security_measures.description')}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">{t('changes_to_the_privacy_policy.title')}</h2>
        <p className="text-lg mb-2">{t('changes_to_the_privacy_policy.description')}</p>
      </div>

    </div>
  )
}

export default PrivacyPolicy