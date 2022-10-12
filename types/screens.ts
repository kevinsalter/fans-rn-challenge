import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EmployeeModel } from './data';

export type RootStackParamList = {
    Home: undefined;
    Employee: { employee: EmployeeModel };
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type EmployeeScreenProps = NativeStackScreenProps<RootStackParamList, 'Employee'>;
