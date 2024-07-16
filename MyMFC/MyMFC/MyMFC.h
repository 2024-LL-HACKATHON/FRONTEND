#pragma once

#include "afxwin.h" // afxwin.h 포함

#include <vector>
#include <fstream>

// LAS 포인트 구조체 정의
struct LASPoint
{
    double x;
    double y;
    unsigned short intensity;
};

class CMyMFCDlg : public CDialogEx
{
public:
    CMyMFCDlg(CWnd* pParent = nullptr); // 생성자 선언
    virtual ~CMyMFCDlg(); // 소멸자 선언

#ifdef AFX_DESIGN_TIME
    enum { IDD = IDD_MYMFC_DIALOG };
#endif

protected:
    virtual void DoDataExchange(CDataExchange* pDX); // 데이터 교환 함수 선언
    virtual BOOL OnInitDialog(); // 초기화 함수 선언
    DECLARE_MESSAGE_MAP() // 메시지 맵 선언

private:
    std::vector<LASPoint> m_points; // LAS 포인트를 저장할 벡터

private:
    void ReadLASFile(const std::string& filename); // LAS 파일을 읽는 함수 선언

public:
    afx_msg void OnBnClickedLoadButton(); // "Load" 버튼 클릭 이벤트 핸들러 선언
};
