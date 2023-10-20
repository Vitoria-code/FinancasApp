import React, {useContext} from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './api.routes';
import {AuthContext} from '../contexts/auth';
import {ActivityIndicator, View} from 'react-native';

export default function Routes() {
  const {signed, loading} = useContext(AuthContext);

  if (loading) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: '#F0F4FF',
        }}>
        <ActivityIndicator size="large" color="#131313" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
