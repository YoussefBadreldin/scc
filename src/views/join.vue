<template>
    <div>
        <HeaderComponent />
        <div class="container">
            <h2 class="text-center my-4">الجدول الزمني للانتخابات</h2>
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>اليوم</th>
                            <th>التاريخ</th>
                            <th>الوقت</th>
                            <th>الحدث</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>الخميس</td>
                        <td>٢٠٢٤/١٠/٠</td>
                        <td>من ٩ ص إلى ٣ ظ</td>
                        <td>فتح باب الترشح وسحب وتقديم الاستمارات (صوره شخصية + صوره بطاقة الرقم القومي + صورة كارنية الجامعة)</td>
                    </tr>
                    <tr>
                        <td>الأحد</td>
                        <td>٢٠٢٤/١١/٠</td>
                        <td>١٢ ظ</td>
                        <td>إعلان الكشوف المبدئية</td>
                    </tr>
                    <tr>
                        <td>الأثنين</td>
                        <td>٢٠٢٤/١١/٠</td>
                        <td>من ٩ ص إلى ٣ ظ</td>
                        <td>تلقي طلبات الطعون</td>
                    </tr>
                    <tr>
                        <td>الثلاثاء</td>
                        <td>٢٠٢٤/١١/٠</td>
                        <td>١٢ ظ</td>
                        <td>فحص الطعون</td>
                    </tr>
                    <tr>
                        <td>الأربعاء</td>
                        <td>٢٠٢٤/١١/٠</td>
                        <td>١٢ ظ</td>
                        <td>إعلان الكشوف النهائية</td>
                    </tr>
                    <tr>
                        <td>الخميس</td>
                        <td>٢٠٢٤/١١/٠</td>
                        <td>من ٩ ص إلى ٣ ظ</td>
                        <td>الدعاية الانتخابية</td>
                    </tr>
                    <tr>
                        <td>الأحد</td>
                        <td>٢٠٢٤/١١/٠</td>
                        <td>من ٩ ص إلى ٣ ظ</td>
                        <td>انتخابات الجولة الأولى والفرز وإعلان النتائج</td>
                    </tr>
                    <tr>
                        <td>الإثنين</td>
                        <td>٢٠٢٤/١١/٠</td>
                        <td>من ٩ ص إلى ٣ ظ</td>
                        <td>انتخابات الإعادة</td>
                    </tr>
                    <tr>
                        <td>الثلاثاء</td>
                        <td>٢٠٢٤/١١/٠</td>
                        <td>من ١٠ ص إلى ١٢ ظ</td>
                        <td>انتخابات أمناء اللجان ومساعديهم</td>
                    </tr>
                    <tr>
                        <td>الأربعاء</td>
                        <td>٢٠٢٤/١١/٠</td>
                        <td>من ١٠ ص إلى ١٢ ظ</td>
                        <td>انتخاب رئيس الاتحاد ونائبه وإعلان النتائج</td>
                    </tr>
                </tbody>
                </table>
            </div>

            <h2 class="text-center my-4">الشروط للتقدم للانتخابات</h2>
            <ol style="list-style-position: inside;">
                <li>- أن يكون متمتعا بجنسية جمهورية مصر العربية.</li>
                <br/>
                <li>- أن يكون محمود السيرة، وحسن السمعة.</li>
                <br/>
                <li>- أن يكون مستجدا ولم يرسب في أكثر من مقررين من المقررات التي سجلها في العام الماضي.</li>
                <br/>
                <li>- أن يكون له نشاط طلابي موثق في الجامعة أو الكلية أو المعهد في مجال اللجنة المرشح لها عدا طلاب السنة الدراسية الأولى.</li>
                <br/>
                <li>- ألا يكون قد سبق مجازاته تأديبيا بإحدى الجزاءات المنصوص عليها في المواد من ٥ إلى ١٣ من المادة ١٢٥ من اللائحة التنفيذية لقانون تنظيم الجامعات.</li>
                <br/>
                <li>- ألا يكون قد سبق الحكم عليه بعقوبة جنائية أو بعقوبة مقيدة للحرية في جريمة مخلة بالشرف أو بالأمانة ما لم يكن تم رد الاعتبار له.</li>
                <br/>
                <li>- ألا يكون منتميا إلى أي تنظيم أو كيان أو جماعة إرهابية مؤسسة على خلاف القانون.</li>
            </ol>
            <h2 class="text-center my-4">مكان التقدم للانتخابات</h2>
            <p>مكتب الأنشطة الطلابية بمبنى ٨ الدور الارضي مكتب رقم ١٠٧٥ من ٩ ص إلى ٣ ظ.</p>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '../../public/global/headerComponent.vue';
import FooterComponent from '../../public/global/footerComponent.vue';

export default {
    name: 'JoinUnion',
    components: {
        HeaderComponent,
        FooterComponent,
    },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
.container {
    padding: 20px;
    direction: rtl; /* Set the text direction to RTL */
}
.table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch; /* Enable momentum scrolling on iOS */
}
.table {
    width: 100%;
    margin-top: 20px;
}
.table th, .table td {
    text-align: center;
    padding: 10px;
}
.table-bordered {
    border: 1px solid #dee2e6;
}
.table-bordered th, .table-bordered td {
    border: 1px solid #dee2e6;
}
@media (max-width: 576px) {
    .table th, .table td {
        font-size: 0.8rem; /* Reduce font size on small screens */
    }
}
</style>
