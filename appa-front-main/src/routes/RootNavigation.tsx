import PaymentValidatePage from '@/pages/Home';
import { DomiciliacionPreview } from '@/pages/Domiciliacion/preview';
import { Route, Routes } from 'react-router-dom';

export const RootNavigation = () => {
    return (
        <Routes>
            <Route
                path="/preview-domiciliacion"
                element={<DomiciliacionPreview />}
            />
            <Route
                path="*"
                caseSensitive={true}
                element={<PaymentValidatePage />}
            />
        </Routes>
    );
};
