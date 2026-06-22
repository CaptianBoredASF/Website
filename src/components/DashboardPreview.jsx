import { usePortfolio } from '../hooks/usePortfolio'

export default function DashboardPreview() {
  const { portfolio } = usePortfolio()
  const { assets, profile, branding } = portfolio

  if (assets.profileImage) {
    return (
      <img
        src={assets.profileImage}
        alt={profile.name}
        className="hero-profile-photo"
      />
    )
  }

  return (
    <div className="hero-profile-photo hero-profile-placeholder" aria-hidden="true">
      {branding.logoInitial}
    </div>
  )
}
