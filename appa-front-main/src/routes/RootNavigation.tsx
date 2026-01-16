import PaymentValidatePage from '@/pages/Home';
import { Route, Routes } from 'react-router-dom';

export const RootNavigation = () => {
    return (
        <Routes>
            <Route
                path="*"
                caseSensitive={true}
                element={<PaymentValidatePage />}
            />
        </Routes>
    );
};
