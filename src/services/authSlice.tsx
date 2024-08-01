import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 인증 상태 인터페이스 정의
interface AuthState {
  token: string | null; // 인증 토큰
  isAuthenticated: boolean; // 인증 여부
}

// 초기 상태 설정
const initialState: AuthState = {
  token: localStorage.getItem('token') || null, // 로컬 스토리지에서 초기화 (토큰이 없으면 null)
  isAuthenticated: !!localStorage.getItem('token'), // 토큰이 있으면 인증된 상태 (true)
};

// auth 슬라이스 생성
const authSlice = createSlice({
  name: 'auth', // 슬라이스 이름
  initialState, // 초기 상태
  reducers: {
    // 로그인 액션
    login(state, action: PayloadAction<string>) {
      state.token = action.payload; // 상태에 토큰 설정
      state.isAuthenticated = true; // 인증 상태를 true로 변경
      localStorage.setItem('token', action.payload); // 토큰을 로컬 스토리지에 저장
    },
    // 로그아웃 액션
    logout(state) {
      state.token = null; // 상태에서 토큰 제거
      state.isAuthenticated = false; // 인증 상태를 false로 변경
      localStorage.removeItem('token'); // 로컬 스토리지에서 토큰 제거
    },
    // 토큰 설정 액션
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload; // 상태에 토큰 설정 (null일 수도 있음)
      state.isAuthenticated = action.payload !== null; // 토큰이 있으면 인증된 상태로 설정
    }
  },
});

// 액션과 리듀서 내보내기
export const { login, logout, setToken } = authSlice.actions;

export default authSlice.reducer;
