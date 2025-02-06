import { Container } from "react-bootstrap";
import ContentLoader from "react-content-loader";

const CartSkeleton = () => {
    const skeletonItems = Array(3).fill(0);

    return (
        <Container>
            {skeletonItems.map((_, index) => (
                <div key={index} className="m-0">
                    <ContentLoader
                        speed={1}
                        width="100%"
                        height={160}
                        viewBox="0 0 1200 160"
                        backgroundColor="#4f4f4f"
                        foregroundColor="#e3d9d9"
                    >
                        <rect x="0" y="0" rx="5" ry="5" width="160" height="160" />
                        <rect x="180" y="0" rx="3" ry="3" width="100" height="20" /> 
                        <rect x="180" y="40" rx="4" ry="4" width="100" height="20" />
                        <rect x="180" y="120" rx="4" ry="4" width="100" height="40" />
                    </ContentLoader>
                </div>
            ))}
        </Container>
    );
};

export default CartSkeleton;