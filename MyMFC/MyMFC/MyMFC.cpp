#include "pch.h"
#include "MyMFC.h"
#include "afxdialogex.h"
#include <iostream>
#include "resource.h"


#ifdef _DEBUG
#define new DEBUG_NEW
#endif
#include "MyMFCDlg.h"

CMyMFCDlg::CMyMFCDlg(CWnd* pParent /*=nullptr*/)
    : CDialogEx(IDD_MYMFC_DIALOG, pParent)
{
    m_hIcon = AfxGetApp()->LoadIcon(IDR_MAINFRAME);
}

void CMyMFCDlg::DoDataExchange(CDataExchange* pDX)
{
    CDialogEx::DoDataExchange(pDX);
    DDX_Control(pDX, IDC_LIST1, m_listBox);
}

BEGIN_MESSAGE_MAP(CMyMFCDlg, CDialogEx)
    ON_BN_CLICKED(IDC_LOAD_BUTTON, &CMyMFCDlg::OnBnClickedLoadButton)
END_MESSAGE_MAP()

BOOL CMyMFCDlg::OnInitDialog()
{
    CDialogEx::OnInitDialog();

    // 여기에 초기화 코드 추가.

    return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}

void CMyMFCDlg::ReadLASFile(const std::string& filename)
{
    std::ifstream file(filename, std::ios::binary);
    if (!file)
    {
        AfxMessageBox(_T("Failed to open LAS file."));
        return;
    }

    LASPoint point;
    while (file.read(reinterpret_cast<char*>(&point), sizeof(LASPoint)))
    {
        m_points.push_back(point);
    }

    file.close();
}

void CMyMFCDlg::OnBnClickedLoadButton()
{
    std::string filename = "your_las_file.las";  // LAS 파일 경로 설정
    ReadLASFile(filename);

    // LAS 포인트 데이터를 텍스트로 출력
    CString text;
    for (const auto& point : m_points)
    {
        CString temp;
        temp.Format(_T("x: %.2f, y: %.2f, intensity: %u\n"), point.x, point.y, point.intensity);
        text += temp;
    }

    // 리스트 박스에 텍스트 출력
    m_listBox.AddString(text);
}
