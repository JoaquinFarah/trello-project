

const OrganizationLayout = ({children}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full container mx-auto">
            {children}
        </div>
    )
}

export default OrganizationLayout;