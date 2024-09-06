function ProjCardDiv({ children, ...props }) {
    return (
        <div className="proj-card-item" {...props} >
            {children}
        </div>
    )
};

export default ProjCardDiv;