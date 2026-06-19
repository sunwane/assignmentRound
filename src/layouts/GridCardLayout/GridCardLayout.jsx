function GridCardLayout({ children, className, ...props }) {
  return (
    <div className={`grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5 ${className}`} {...props}>
      {children}
    </div>
  );
}

export default GridCardLayout;