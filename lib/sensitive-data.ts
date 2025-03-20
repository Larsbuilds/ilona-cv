export type ContactData = {
  email: string
  phone: string
  address: string
  name: string
  employers: string[]
}

// Obfuscate email while keeping the domain
export const obfuscateEmail = (email: string): string => {
  const [localPart, domain] = email.split('@')
  const obfuscatedLocal = localPart.slice(0, 2) + '***' + localPart.slice(-2)
  return `${obfuscatedLocal}@${domain}`
}

// Obfuscate phone number while keeping country code and last 2 digits
export const obfuscatePhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '')
  const countryCode = cleaned.slice(0, 3)
  const lastDigits = cleaned.slice(-2)
  return `+${countryCode}•••••${lastDigits}`
}

// Obfuscate company names
export const obfuscateCompany = (company: string): string => {
  return company.split('_')[0] + '***'
}

export const sensitiveData: ContactData = {
  email: "ilona.dorosh.96@gmail.com",
  phone: "+380933401465",
  address: "Київ, Україна",
  name: "ІЛОНА ДОРОШ",
  employers: ["29 FLOWERS", "QUARTER_FLOWERS_CV"]
}

export const obfuscatedData: ContactData = {
  email: obfuscateEmail(sensitiveData.email),
  phone: obfuscatePhone(sensitiveData.phone),
  address: sensitiveData.address, // City and country are okay to show
  name: sensitiveData.name, // Name is okay as it's public CV
  employers: sensitiveData.employers.map(obfuscateCompany)
} 