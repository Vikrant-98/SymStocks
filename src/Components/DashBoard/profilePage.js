import React from 'react';
import './Profile.scss'

function ProfilePage(props) {
    return (
        <>
            <div className='profileMainContent d-flex '>
                <div className='subDivOne'>
                    <div className='SideAvtarDiv'>
                        <div>
                            <img className='imgeAvtarProfile mt-3 rounded-circle ' src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="Avatar" />
                            <h3>Sushant</h3>
                        </div>
                        <div>
                            <table>
                                <tr className='profileTableTr'>
                                    <td className='ml-3'>Client Code:</td>
                                    <td className='mr-3'>CS34D234245</td>
                                </tr>
                                <tr className='profileTableTr'>
                                    <td className='ml-3'>Name:</td>
                                    <td className='mr-3'>CS34D234245</td>
                                </tr>
                                <tr className='profileTableTr'>
                                    <td className='ml-3'>Mobile:</td>
                                    <td className='mr-3'>CS34D234245</td>
                                </tr>
                                <tr className='profileTableTr'>
                                    <td className='ml-3'>Parmanent Address:</td>
                                    <td className='mr-3'>CS34D234245</td>
                                </tr>
                                <tr className='profileTableTr'>
                                    <td className='ml-3'>Corresponding Address:</td>
                                    <td className='mr-3'>CS34D234245</td>
                                </tr>
                                <tr className='profileTableTr'>
                                    <td className='ml-3'>DOB:</td>
                                    <td className='mr-3'>CS34D234245</td>
                                </tr>
                                <tr className='profileTableTr'>
                                    <td className='ml-3'>Email :</td>
                                    <td className='mr-3'>CS34D234245</td>
                                </tr>
                                <tr className='profileTableTr'>
                                    <td className='ml-3'>Pan Number:</td>
                                    <td className='mr-3'>CS34D234245</td>
                                </tr>
                                <tr className='profileTableTr'>
                                    <td className='ml-3'>Account Opening Date:</td>
                                    <td className='mr-3'>CS34D234245</td>
                                </tr>


                            </table>
                        </div>

                    </div>
                </div>
                <div className='subDivTwo'>
                    <div className='mainDivProfile1 '>
                        <div className='Profileheading'><h6>Segments Activated</h6></div>
                        <table class="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>john@example.com</td>
                                </tr>
                                <tr>
                                    <td>Mary</td>
                                    <td>Moe</td>
                                    <td>mary@example.com</td>
                                </tr>
                                <tr>
                                    <td>July</td>
                                    <td>Dooley</td>
                                    <td>july@example.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='mainDivProfile2 mt-4'>

                    </div>
                    <div className='mainDivProfile3 mt-4'>

                    </div>
                    <div className='mainDivProfile4 mt-4'>

                    </div>
                </div>

            </div>
            <div className='footerProfile'>footer</div></>
    );
}

export default ProfilePage;