export const useGlobalTenant = () => {
    const tenant = localStorage.getItem('tenant') as string
    const tenantName = localStorage.getItem('tenantName') as string
    return { tenant, tenantName }
}